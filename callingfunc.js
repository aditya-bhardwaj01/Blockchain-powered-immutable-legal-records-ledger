import { ethers } from "ethers";
const infuraApiKey = "4de39552661f469088a8aef633f0d75f";
const network = "Mainnet"; // Replace with your desired network
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/85fef0f96c584ce1a8cca8c29b0c79e0`);

const fs = require('fs');

// Read the ABI JSON file
fs.readFile('ABI.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading ABI JSON file:', err);
    return;
  }

  // Parse the JSON content into a JavaScript variable
  const contractABI = JSON.parse(data);

  // Now, you can use contractAbi as a JavaScript variable
  console.log('ABI:', contractABI);

  // Replace with your contract's ABI
  const contractAddress = "0xee9E28eE8954012e77e835CACfA742de53FB9c72"; // Replace with your contract's address
  const contract = new ethers.Contract(contractAddress, contractABI, provider);

const policeId = 123; // Replace with the actual police ID
const ipfsLink = ' '; // Replace with the actual IPFS link
const post = ' '; // Replace with the actual post
const metaMaskAddress = ' '; // Replace with the actual MetaMask address
const criminalId=' ';

async function interactWithContract() {
    try {
      // Call getPoliceData to get an IPFS link
      const regPolice =await contract.registerPolice(policeId,ipfsLink,post,metaMaskAddress);
      await regPolice.wait();
      console.log('Registered successfully');
      const ipfsLinkResult = await contract.getPoliceData(policeId);
      console.log('IPFS Link:', ipfsLinkResult);
  
      // Add a criminal record using addCriminal
      const addCriminalTx = await contract.addCriminal(policeId, criminalId, ipfsLink);
      await addCriminalTx.wait();
      console.log('Criminal added successfully.');
  
      // Search for a criminal record using searchCriminalUsingId
      const searchResult = await contract.searchCriminalUsingId(policeId, criminalId);
      console.log('Criminal Record URL:', searchResult);
  
      // Get criminal data for a police ID using getCriminalData
      const criminalData = await contract.getCriminalData(policeId);
      console.log('Criminal Data:', criminalData);
  
      // Update a criminal record using updateCriminalData
      const updateCriminalTx = await contract.updateCriminalData(policeId, criminalId, newData);
      await updateCriminalTx.wait();
      console.log('Criminal data updated successfully.');
    } catch (error) {
      console.error('Error interacting with contract:', error);
    }
  }
  
  interactWithContract(); // Call the function inside the callback
});
