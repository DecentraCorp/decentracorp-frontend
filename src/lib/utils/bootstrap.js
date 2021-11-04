const { writeFile } = require('fs').promises;
const Ceramic = require('@ceramicnetwork/http-client').default;
const { createDefinition, publishSchema } = require('@ceramicstudio/idx-tools');
const { Ed25519Provider } = require('key-did-provider-ed25519');
const ThreeIdResolver = require('@ceramicnetwork/3id-did-resolver').default;
const KeyDidResolver = require('key-did-resolver').default;
const { Resolver } = require('did-resolver');
const { DID } = require('dids');
const { fromString } = require('uint8arrays/from-string');

const CERAMIC_URL = 'http://localhost:7007';

const InvoiceSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  title: 'IPFS Hash',
  type: 'object',
  properties: {
    date: {
      type: 'string',
      format: 'date-time',
      title: 'date',
      maxLength: 30,
    },
    text: {
      type: 'string',
      title: 'IPFS Hash',
      maxLength: 400,
    },
    CeramicStreamId: {
      type: 'string',
      pattern: '^ceramic://.+(\\\\?version=.+)?',
      maxLength: 150,
    },
  },
};

async function run() {
  // The seed must be provided as an environment variable
  // This will eventually come from 3ID connect
  const seed = fromString(
    '766704d84eb2c49390e68843aaf1b5c69af6d2a609f817a5d21673031369dff2',
    'base16'
  );
  // Connect to the local Ceramic node
  const ceramic = new Ceramic(CERAMIC_URL);
  // Provide the DID Resolver and Provider to Ceramic
  const resolver = new Resolver({
    ...KeyDidResolver.getResolver(),
    ...ThreeIdResolver.getResolver(ceramic),
  });
  const provider = new Ed25519Provider(seed);
  const did = new DID({ provider, resolver });
  await ceramic.setDID(did);
  // Authenticate the Ceramic instance with the provider
  await ceramic.did.authenticate();

  // Publish the two schemas
  const [invoiceSchema] = await Promise.all([
    publishSchema(ceramic, { content: InvoiceSchema }),
  ]);

  // Create the definition using the created schema ID
  const invoiceDefinition = await createDefinition(ceramic, {
    name: 'invoice',
    description: 'Invoices',
    schema: invoiceSchema.commitId.toUrl(),
  });

  // Write config to JSON file
  const config = {
    definitions: {
      invoices: invoiceDefinition.id.toString(),
    },
    schemas: {
      Invoice: invoiceSchema.commitId.toUrl(),
    },
  };
  await writeFile('./src/config.json', JSON.stringify(config));

  console.log('Config written to src/config.json file:', config);
  process.exit(0);
}

run().catch(console.error);
