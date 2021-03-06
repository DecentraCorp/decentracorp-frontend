import type { Account as AlsoKnownAsAccount } from '@datamodels/identity-accounts-web';
import type { BasicProfile } from '@datamodels/identity-profile-basic';
import type { EthereumProvider } from '@self.id/web';
import { AccountId } from 'caip';
import { useAtom } from 'jotai';
import { useCallback } from 'react';

import { authenticate, loadKnownDIDsData } from '../env';
import type { KnownDIDsData } from '../env';
import type { SelfID } from '../self';
import {
  authDIDDataAtom,
  editProfileAtom,
  envAtom,
  getInitialEnv,
  knownDIDsAtom,
  knownDIDsDataAtom,
} from '../state';
import type { EnvState, EditProfileState } from '../state';

export function useKnownDIDs() {
  return useAtom(knownDIDsAtom)[0];
}

export function useKnownDIDsData() {
  return useAtom(knownDIDsDataAtom)[0];
}

export function useEnvState() {
  return useAtom(envAtom)[0];
}

export function useDIDsData(): [KnownDIDsData | null, () => Promise<void>] {
  const env = useEnvState();
  const knownDIDs = useKnownDIDs();
  const [knownDIDsData, setKnownDIDsData] = useAtom(knownDIDsDataAtom);

  const load = useCallback(async () => {
    const data = await loadKnownDIDsData(env.client, knownDIDs);
    setKnownDIDsData(data);
  }, [env.client, knownDIDs, setKnownDIDsData]);

  return [knownDIDsData, load];
}

export function useEnv(): [
  EnvState,
  (provider: EthereumProvider, address: string) => Promise<SelfID>,
  () => void,
] {
  const [env, setEnv] = useAtom(envAtom);
  const setKnownDIDs = useAtom(knownDIDsAtom)[1];
  const setKnownDIDsData = useAtom(knownDIDsDataAtom)[1];

  const tryAuthenticate = useCallback(
    async (provider: EthereumProvider, address: string): Promise<SelfID> => {
      void setEnv({ auth: { state: 'loading', id: env.auth.id } });

      try {
        const self = await authenticate(env.client, provider, address);
        const knownDIDs = {
          [self.id]: {
            accounts: [AccountId.parse(env.client.threeId.accountId as string)],
          },
        };
        void setKnownDIDs(knownDIDs);
        void setEnv({
          auth: { state: 'confirmed', id: self.id, address },
          self,
        });
        void loadKnownDIDsData(env.client, knownDIDs).then(setKnownDIDsData);
        return self;
      } catch (err) {
        void setEnv({
          auth: { state: 'error', id: env.auth.id, error: err as Error },
        });
        throw err;
      }
    },
    [env, setEnv, setKnownDIDs, setKnownDIDsData],
  );

  const resetEnv = useCallback(() => {
    void setEnv(getInitialEnv(false));
    void setKnownDIDs({});
  }, [setEnv, setKnownDIDs]);

  return [env, tryAuthenticate, resetEnv];
}

export function useEditProfile(): [
  EditProfileState,
  (profile: BasicProfile) => Promise<void>,
  () => void,
] {
  const env = useEnvState();
  const [editState, setEditState] = useAtom(editProfileAtom);
  const [authDIDData, setAuthDIDData] = useAtom(authDIDDataAtom);

  const applyEdit = useCallback(
    async (profile: BasicProfile) => {
      if (authDIDData == null) {
        throw new Error('DID data is not available');
      }
      if (env.self === null) {
        throw new Error('Authentication required');
      }

      await env.self.setProfile(profile);
      setAuthDIDData({ profile });
      setEditState({ status: 'done' });
    },
    [env.self, authDIDData, setEditState, setAuthDIDData],
  );

  const edit = useCallback(
    async (profile: BasicProfile) => {
      if (editState.status === 'editing') {
        return;
      }

      try {
        setEditState({ status: 'editing' });
        setEditState({ status: 'done' });
      } catch (error) {
        setEditState({ status: 'failed', error: error as Error });
      }
    },
    [applyEdit, editState.status, setEditState],
  );

  const reset = useCallback(() => {
    void setEditState({ status: 'pending' });
  }, [setEditState]);

  return [editState, edit, reset];
}

export function useSocialAccounts(): [
  Array<AlsoKnownAsAccount>,
  (socialAccounts: Array<AlsoKnownAsAccount>) => void,
] {
  const [authDIDData, setAuthDIDsData] = useAtom(authDIDDataAtom);

  const accounts = authDIDData?.socialAccounts ?? [];
  const setAccounts = useCallback(
    (socialAccounts: Array<AlsoKnownAsAccount>) => {
      setAuthDIDsData({ socialAccounts });
    },
    [setAuthDIDsData],
  );

  return [accounts, setAccounts];
}
