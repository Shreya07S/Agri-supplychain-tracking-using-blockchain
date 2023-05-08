// const Web3 = require ('web3');

// // Connect to the blockchain network
// const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));


// window.addEventListener('load', async () => {
//   // Modern dapp browsers...
//   if (window.ethereum) {
//     window.web3 = new Web3(window.ethereum);
//     try {
//       // Request account access if needed
//       await window.ethereum.enable();
//     } catch (error) {
//       // User denied account access...
//       console.error("User denied account access")
//     }
//   }
//   // Legacy dapp browsers...
//   else if (window.web3) {
//     window.web3 = new Web3(web3.currentProvider);
//   }
//   // Non-dapp browsers...
//   else {
//     console.log('Non-Ethereum browser detected. You should consider trying MetaMask!')
//   }

//   var contractAbi = [{"constant":true,"inputs":[],"name":"getGreeting","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_greeting","type":"string"}],"name":"setGreeting","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_greeting","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];
//   var contractAddress = "0x8A0c1552C8E4E539175e3dE399Ad04c9f8332a2a";
//   var contract = new web3.eth.Contract(contractAbi, contractAddress);
  
//   const accounts = await web3.eth.getAccounts();

// // Call the getMessage function
//   contract.methods.getTotalAreaByDistrict().call((error, result) => {
//   console.log(result);
// });
//   // Register Crop
//   const registerCrop = async () => {
//     const name = document.getElementById("crop-name").value;
//     const area = document.getElementById("crop-area").value;
//     const district = document.getElementById("crop-district").value;

//     await contract.methods.registerCrop(name, area, district).send({ from: accounts[0] });
//   }

//   // Get total area by district

//   contract.methods.getTotalAreaByDistrict().call(function(error, result) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log(result);
//     }
//   });

//   const getTotalAreaByDistrict = async () => {
//     const district = document.getElementById("district-name").value;
//     const crop = document.getElementById("crop-name").value;

//     const totalArea = await contractInstance.methods.getTotalAreaByDistrict(district, crop).call();

//     document.getElementById("total-area").innerHTML = totalArea;
//   }

//   // Estimate total produce

//   contract.methods.estimateTotalProduce().call(function(error, result) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log(result);
//     }
//   });

  
//   const estimateTotalProduce = async () => {
//     const crop = document.getElementById("crop-name-2").value;

//     // const totalProduce = await contractInstance.methods.estimateTotalProduce(crop).call();
//     const totalProduce = await contractInstance.methods.estimateProduce(crop).call();

//     document.getElementById("total-produce").innerHTML = totalProduce;
//   }

//   // Register crop event listener
//   document.getElementById("register-crop").addEventListener("click", registerCrop);

//   // Get total area by district event listener
//   document.getElementById("get-total-area").addEventListener("click", getTotalAreaByDistrict);

//   // Estimate total produce event listener
//   document.getElementById("submit").addEventListener("click", estimateTotalProduce);
// });


const Web3 = require('web3');

// Connect to the Ethereum network using Infura
const web3 = new Web3('https://mainnet.infura.io/v3/agrisupplychainm');

// Create an instance of the contract using its ABI and address
const abi = [[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_district",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "estimateProduce",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "estimateTotalProduce",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "fasal",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "area",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "district",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_district",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "getTotalAreaByDistrict",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "haryanaDistricts",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_area",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_district",
				"type": "string"
			}
		],
		"name": "registerCrop",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "totalAreaByDistrict",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "upaj",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "area",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "district",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
]; // Replace with the actual ABI of the contract
const address = '0xbFAB09a9f80b16F668aAe8c1cFe79A7D6c5bA9d0...'; // Replace with the actual address of the contract
const contract = new web3.eth.Contract(abi, address);

// Call the `registerCrop()` function on the contract to register a new crop
contract.methods.registerCrop()
  .send({ from: '0xbFAB09a9f80b16F668aAe8c1cFe79A7D6c5bA9d0...', gas: 3000000 })
  .then(console.log);