import { ContractAddresses } from './contracts';
import { NETWORK_TYPES } from './networks';

// TODO: remove any, fix network types
const addresses: { [network in NETWORK_TYPES]: ContractAddresses } = {
  [NETWORK_TYPES.KOVAN]: {
    DStock: '0xd1C7acdC170dB38F2Ac23bA6B3a6f32fBE13f833',
    DDollar: '0x89821A0648FB81f29bEF9148CF50CE4498269Fa7',
    Dscore: '0xc923F117396875E2Ca080C51d56815903d242f73',
    DCore: '0xfb821d4BD0027E80282F6F16E7550F9Ee8D21645',
    DBank: '0xB2a048B89D77AA8c8c023B5f82F0adc177F2D33E'
  },
} as any;

export default addresses;