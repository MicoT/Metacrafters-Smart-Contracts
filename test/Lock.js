const { expect } = require('chai');

describe('MessageContract', function () {
  let contract;
  let owner;
  const initialMessage = 'Hello, World!';
  const newMessage = 'Updated message';

  beforeEach(async function () {
    const MessageContract = await ethers.getContractFactory('MessageContract');
    contract = await MessageContract.deploy(initialMessage);
    await contract.deployed();
    [owner] = await ethers.getSigners();
  });

  it('should set the initial message', async function () {
    const message = await contract.getMessage();
    expect(message).to.equal(initialMessage);
  });

  it('should update the message', async function () {
    await contract.connect(owner).setMessage(newMessage);
    const updatedMessage = await contract.getMessage();
    expect(updatedMessage).to.equal(newMessage);
  });
});
