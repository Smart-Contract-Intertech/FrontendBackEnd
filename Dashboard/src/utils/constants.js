import abi from "./Transactions.json";

export const contractABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "userNo",
        "type": "uint256"
      }
    ],
    "name": "newRegister",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "timeForRelease",
        "type": "uint256"
      }
    ],
    "name": "divideToRecipients",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getRecipients",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "invesmentsMadeToMe",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "invester",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "receiver",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timeOfInvesment",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timeForRelease",
            "type": "uint256"
          },
          {
            "internalType": "enum Transactions.Status",
            "name": "invesmentStatus",
            "type": "uint8"
          },
          {
            "internalType": "uint256",
            "name": "invesmentNo",
            "type": "uint256"
          }
        ],
        "internalType": "struct Transactions.invesment[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "timeForRelease",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      }
    ],
    "name": "makeInvesment",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "myInvesments",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "invester",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "receiver",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timeOfInvesment",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timeForRelease",
            "type": "uint256"
          },
          {
            "internalType": "enum Transactions.Status",
            "name": "invesmentStatus",
            "type": "uint8"
          },
          {
            "internalType": "uint256",
            "name": "invesmentNo",
            "type": "uint256"
          }
        ],
        "internalType": "struct Transactions.invesment[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "userAddress",
        "type": "address"
      }
    ],
    "name": "register",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      }
    ],
    "name": "registerReceiver",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "invesmentNo",
        "type": "uint256"
      }
    ],
    "name": "reverseInvesment",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "invesmentNo",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "timeForRelease",
        "type": "uint256"
      }
    ],
    "name": "reviseInvesment",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "invesmentNo",
        "type": "uint256"
      }
    ],
    "name": "withdrawInvesment",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }
];

export const contractAddress = "0x189edd866Ce9e1aDbd2c3Fed98486A07b3E98247";