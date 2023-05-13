import "./App.css";
import React, { useState } from 'react';
import { ethers } from 'ethers';
import HelloWorldContract from './artifacts/contracts/Lock.sol/MessageContract.json';


const App = () => {
  const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
  const contractABI = HelloWorldContract.abi;
  const [userInput, setUserInput] = useState('');
  const [message, setMessage] = useState('');

  // Connect to the deployed contract
  const provider = new ethers.providers.JsonRpcProvider();
  const contract = new ethers.Contract(contractAddress, contractABI, provider);

  // Function to fetch the contract message
  const fetchMessage = async () => {
    try {
      const fetchedMessage = await contract.getMessage();
      setMessage(fetchedMessage);
    } catch (error) {
      console.error('Error fetching message:', error);
    }
  };

  // Function to update the contract message based on user input
  const updateMessage = async () => {
    try {
      const signer = provider.getSigner();
      const contractWithSigner = contract.connect(signer);
      await contractWithSigner.setMessage(userInput);
      setMessage(userInput);
    } catch (error) {
      console.error('Error updating message:', error);
    }
  };
  return (
    <div className="App-header">
        <div className="Body">
        <h3>Contract Interaction</h3>
        <p>Current Message: {message}</p>
        <button onClick={fetchMessage}>Fetch Message</button>
          <div className="Update">
          <button onClick={updateMessage}>Update Message</button>
              <input
              placeholder="Input your text here!"
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
          </div>

        </div>
    </div>
  );
};

export default App;
