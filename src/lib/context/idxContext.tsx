import CeramicClient from "@ceramicnetwork/http-client";
import { IDX } from '@ceramicstudio/idx';
import { createContext, useContext, useState} from 'react';

export type IdxContextValues = {
    did: any;
    setDid: any;
    ceramic: any;
    setCeramic: any;
    idx: any;
    setIdx: any;
}

export const IdxContext = createContext<IdxContextValues>({
    did: '',
    setDid: '',
    ceramic: '',
    setCeramic: '',
    idx: '',
    setIdx: '',
});

export const useIdxContext = () => useContext(IdxContext);

interface IdxProviderProps {
    children: any;
}

const IdxProvider = ({ children }: IdxProviderProps) => {
    const [did, setDid] = useState<string>('');
    const [idx, setIdx] = useState<IDX>();
    const [ceramic, setCeramic] = useState<CeramicClient>();

    return (
        <IdxContext.Provider
            value={{
                did,
                idx,
                ceramic,
                setDid,
                setIdx,
                setCeramic
            }}
            >
                {children}
            </IdxContext.Provider>
    )
}
export default IdxProvider;