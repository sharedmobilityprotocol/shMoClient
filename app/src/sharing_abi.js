var SharingABI = [
    {
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_scooterClient",
          "type": "address"
        },
        {
          "name": "_tokenAddress",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "vehicle",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "rider",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "startTime",
          "type": "uint256"
        }
      ],
      "name": "RideStarted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "vehicle",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "rider",
          "type": "address"
        }
      ],
      "name": "RideFinished",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_rider",
          "type": "address"
        }
      ],
      "name": "startRide",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "finishRide",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "withdrawEarnings",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
