const logger = require('mocha-logger');


async function main() {
  const keyPair = await locklift.ton.client.crypto.generate_random_sign_keys();
  
  const Giver = await locklift.factory.getContract('Giver');
  
  const giver = await locklift.giver.deployContract({
    contract: Giver,
    constructorParams: {},
    initParams: {
      owner: `0x${keyPair.public}`,
    },
    keyPair,
  }, locklift.utils.convertCrystal(100, 'nano'));
  
  logger.success(`Giver: ${giver.address}`);
  logger.success(`Giver private key: ${JSON.stringify(keyPair)}`);
}


main()
  .then(() => process.exit(0))
  .catch(e => {
    console.log(e);
    process.exit(1);
  });
