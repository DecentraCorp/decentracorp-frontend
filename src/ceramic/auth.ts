import {
  FortmaticConnector,
  InjectedConnector,
  PortisConnector,
  TorusConnector,
  WalletConnectConnector,
} from '@ceramicstudio/multiauth';
import type { PartialConnectorConfig } from '@ceramicstudio/multiauth';

export const connectors: Array<PartialConnectorConfig> = [
  {
    key: 'injected',
    connector: new InjectedConnector({}),
  },
];

// const walletConnectChainId = '';
// const walletConnectRpcUrl = '';
// if (
//   typeof walletConnectChainId === 'string' &&
//   typeof walletConnectRpcUrl === 'string'
// ) {
//   connectors.push({
//     key: 'walletConnect',
//     connector: new WalletConnectConnector({
//       rpc: { [walletConnectChainId]: walletConnectRpcUrl },
//     }),
//   });
// }

const fortmaticApiKey = '';
const fortmaticChainId = '';
if (
  typeof fortmaticApiKey === 'string' &&
  typeof fortmaticChainId === 'string'
) {
  connectors.push({
    key: 'fortmatic',
    connector: new FortmaticConnector({
      apiKey: fortmaticApiKey,
      chainId: parseInt(fortmaticChainId, 10),
    }),
  });
}

const portisDappId = '';
const portisNetworks = '';
if (typeof portisDappId === 'string' && typeof portisNetworks === 'string') {
  connectors.push({
    key: 'portis',
    connector: new PortisConnector({
      dAppId: portisDappId,
      networks: portisNetworks.split(',').map((v) => parseInt(v, 10)),
    }),
  });
}

const torusChainId = '';
if (typeof torusChainId === 'string') {
  connectors.push({
    key: 'torus',
    connector: new TorusConnector({
      chainId: parseInt(torusChainId, 10),
      initOptions: { showTorusButton: false },
    }),
  });
}
