const { ethers } = require('hardhat');

async function main() {
  const MessageContract = await ethers.getContractFactory('MessageContract');
  console.log('Deploying MessageContract...');
  const messageContract = await MessageContract.deploy('Hello, World!');
  await messageContract.deployed();
  console.log('MessageContract deployed to:', messageContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
