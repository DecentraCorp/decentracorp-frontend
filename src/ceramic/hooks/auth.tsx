import { useMultiAuth } from '@ceramicstudio/multiauth';
import type { AuthAccount } from '@ceramicstudio/multiauth';
import { useCallback } from 'react';

import type { SelfID } from '../self';

import { useEnv } from './env';

export function useLogin(): (
  switchAccount?: boolean,
) => Promise<SelfID | null> {
  const [authState, connect] = useMultiAuth();
  const [env, tryAuth, resetEnv] = useEnv();
  console.log(authState);

  return useCallback(
    async (switchAccount?: boolean) => {
      if (
        env.auth.state === 'confirmed' &&
        authState.status === 'connected' &&
        !switchAccount &&
        env.self !== null
      ) {
        return env.self;
      }

      let eth: AuthAccount<'ethereum'> | null = null;
      try {
        if (switchAccount) {
          resetEnv();
          eth = await connect({ mode: 'force' });
        } else {
          eth = await connect({ mode: 'use' });
        }
      } catch (err) {
        console.warn('Failed to login:', err);
      }

      return eth
        ? await tryAuth(
            eth.provider.state.provider as any,
            eth.provider.state.account,
          )
        : null;
    },
    [authState, connect, env, resetEnv, tryAuth],
  );
}

export function useLogout() {
  const disconnect = useMultiAuth()[2];
  const resetEnv = useEnv()[2];

  return useCallback(() => {
    disconnect();
    resetEnv();
  }, [disconnect, resetEnv]);
}
