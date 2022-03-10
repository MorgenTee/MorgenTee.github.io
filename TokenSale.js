TokenSale_json_interface = {
  "_format": "hh-sol-artifact-1",
  "contractName": "TokenSale",
  "sourceName": "contracts/TokenSale.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "contract IERC20Metadata",
          "name": "_contract",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "EndSaleEvent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "buyer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "SoldEvent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "StartSaleEvent",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "buyTokens",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "endSale",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "saleActive",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "startSale",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tokenContract",
      "outputs": [
        {
          "internalType": "contract IERC20Metadata",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tokenPrice",
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
      "inputs": [],
      "name": "tokensSold",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x60e0604052600080556001805460ff1916905534801561001e57600080fd5b50604051610de5380380610de583398101604081905261003d9161005f565b33606090811b60c0529190911b6001600160601b03191660805260a052610097565b60008060408385031215610071578182fd5b82516001600160a01b0381168114610087578283fd5b6020939093015192949293505050565b60805160601c60a05160c05160601c610ce96100fc600039600081816105a601528181610756015261094201526000818161015d015261020a01526000818160da0152818161029b0152818161037d015281816104c001526107180152610ce96000f3fe6080604052600436106100705760003560e01c806355a373d61161004e57806355a373d6146100c857806368428a1b146101215780637ff9b5961461014b578063b66a0e5d1461017f57600080fd5b80633610724e14610075578063380d831b1461008a578063518ab2a81461009f575b600080fd5b610088610083366004610ab2565b610194565b005b34801561009657600080fd5b5061008861058e565b3480156100ab57600080fd5b506100b560005481565b6040519081526020015b60405180910390f35b3480156100d457600080fd5b506100fc7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100bf565b34801561012d57600080fd5b5060015461013b9060ff1681565b60405190151581526020016100bf565b34801561015757600080fd5b506100b57f000000000000000000000000000000000000000000000000000000000000000081565b34801561018b57600080fd5b5061008861092a565b60015460ff16610205576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f53616c652068617320656e64656400000000000000000000000000000000000060448201526064015b60405180910390fd5b61022f7f000000000000000000000000000000000000000000000000000000000000000082610c47565b3414610297576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f496e636f727265637420746f6b656e2076616c756520726174696f000000000060448201526064016101fc565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156102ff57600080fd5b505afa158015610313573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103379190610ae2565b61034290600a610b7c565b61034c9083610c47565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529091507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a082319060240160206040518083038186803b1580156103d457600080fd5b505afa1580156103e8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061040c9190610aca565b811115610475576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f4f7574206f6620746f6b656e730000000000000000000000000000000000000060448201526064016101fc565b816000808282546104869190610b03565b90915550506040517fa9059cbb000000000000000000000000000000000000000000000000000000008152336004820152602481018290527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063a9059cbb90604401602060405180830381600087803b15801561051957600080fd5b505af115801561052d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105519190610a8b565b5060408051338152602081018490527e369e3836597da5317aa232706cc264db0fedfc25d9fd36d3390ba6027783ab910160405180910390a15050565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161461062d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f596f75206d75737420626520746865206f776e6572000000000000000000000060448201526064016101fc565b60015460ff16610699576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f53616c6520616c726561647920656e646564000000000000000000000000000060448201526064016101fc565b600180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690556040517f6b304ef82d5790ab6a7d724c6936d180521df8760775a55f1aa9dbc663a5a13190600090a16040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063a9059cbb907f00000000000000000000000000000000000000000000000000000000000000009083906370a082319060240160206040518083038186803b15801561079957600080fd5b505afa1580156107ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107d19190610aca565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815273ffffffffffffffffffffffffffffffffffffffff90921660048301526024820152604401602060405180830381600087803b15801561083c57600080fd5b505af1158015610850573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108749190610a8b565b50604051600090339047908381818185875af1925050503d80600081146108b7576040519150601f19603f3d011682016040523d82523d6000602084013e6108bc565b606091505b5050905080610927576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f556e61626c6520746f2073656e642076616c756500000000000000000000000060448201526064016101fc565b50565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146109c9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f596f75206d75737420626520746865206f776e6572000000000000000000000060448201526064016101fc565b60015460ff1615610a36576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f53616c6520616c7265616479207374617274656400000000000000000000000060448201526064016101fc565b600180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016811790556040517f6da77ed52db9d7bb842713f98a2f63785ba449eed679639b57674c7a3f30b87990600090a1565b600060208284031215610a9c578081fd5b81518015158114610aab578182fd5b9392505050565b600060208284031215610ac3578081fd5b5035919050565b600060208284031215610adb578081fd5b5051919050565b600060208284031215610af3578081fd5b815160ff81168114610aab578182fd5b60008219821115610b1657610b16610c84565b500190565b600181815b80851115610b7457817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115610b5a57610b5a610c84565b80851615610b6757918102915b93841c9390800290610b20565b509250929050565b6000610aab60ff841683600082610b9557506001610c41565b81610ba257506000610c41565b8160018114610bb85760028114610bc257610bde565b6001915050610c41565b60ff841115610bd357610bd3610c84565b50506001821b610c41565b5060208310610133831016604e8410600b8410161715610c01575081810a610c41565b610c0b8383610b1b565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115610c3d57610c3d610c84565b0290505b92915050565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610c7f57610c7f610c84565b500290565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea26469706673582212208241b55f01f5262a39ca45d081d6a68787e4220ec05d498b5bc8606dd0b3296764736f6c63430008040033",
  "deployedBytecode": "0x6080604052600436106100705760003560e01c806355a373d61161004e57806355a373d6146100c857806368428a1b146101215780637ff9b5961461014b578063b66a0e5d1461017f57600080fd5b80633610724e14610075578063380d831b1461008a578063518ab2a81461009f575b600080fd5b610088610083366004610ab2565b610194565b005b34801561009657600080fd5b5061008861058e565b3480156100ab57600080fd5b506100b560005481565b6040519081526020015b60405180910390f35b3480156100d457600080fd5b506100fc7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100bf565b34801561012d57600080fd5b5060015461013b9060ff1681565b60405190151581526020016100bf565b34801561015757600080fd5b506100b57f000000000000000000000000000000000000000000000000000000000000000081565b34801561018b57600080fd5b5061008861092a565b60015460ff16610205576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f53616c652068617320656e64656400000000000000000000000000000000000060448201526064015b60405180910390fd5b61022f7f000000000000000000000000000000000000000000000000000000000000000082610c47565b3414610297576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f496e636f727265637420746f6b656e2076616c756520726174696f000000000060448201526064016101fc565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156102ff57600080fd5b505afa158015610313573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103379190610ae2565b61034290600a610b7c565b61034c9083610c47565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529091507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a082319060240160206040518083038186803b1580156103d457600080fd5b505afa1580156103e8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061040c9190610aca565b811115610475576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f4f7574206f6620746f6b656e730000000000000000000000000000000000000060448201526064016101fc565b816000808282546104869190610b03565b90915550506040517fa9059cbb000000000000000000000000000000000000000000000000000000008152336004820152602481018290527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063a9059cbb90604401602060405180830381600087803b15801561051957600080fd5b505af115801561052d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105519190610a8b565b5060408051338152602081018490527e369e3836597da5317aa232706cc264db0fedfc25d9fd36d3390ba6027783ab910160405180910390a15050565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161461062d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f596f75206d75737420626520746865206f776e6572000000000000000000000060448201526064016101fc565b60015460ff16610699576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f53616c6520616c726561647920656e646564000000000000000000000000000060448201526064016101fc565b600180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690556040517f6b304ef82d5790ab6a7d724c6936d180521df8760775a55f1aa9dbc663a5a13190600090a16040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063a9059cbb907f00000000000000000000000000000000000000000000000000000000000000009083906370a082319060240160206040518083038186803b15801561079957600080fd5b505afa1580156107ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107d19190610aca565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815273ffffffffffffffffffffffffffffffffffffffff90921660048301526024820152604401602060405180830381600087803b15801561083c57600080fd5b505af1158015610850573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108749190610a8b565b50604051600090339047908381818185875af1925050503d80600081146108b7576040519150601f19603f3d011682016040523d82523d6000602084013e6108bc565b606091505b5050905080610927576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f556e61626c6520746f2073656e642076616c756500000000000000000000000060448201526064016101fc565b50565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146109c9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f596f75206d75737420626520746865206f776e6572000000000000000000000060448201526064016101fc565b60015460ff1615610a36576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f53616c6520616c7265616479207374617274656400000000000000000000000060448201526064016101fc565b600180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016811790556040517f6da77ed52db9d7bb842713f98a2f63785ba449eed679639b57674c7a3f30b87990600090a1565b600060208284031215610a9c578081fd5b81518015158114610aab578182fd5b9392505050565b600060208284031215610ac3578081fd5b5035919050565b600060208284031215610adb578081fd5b5051919050565b600060208284031215610af3578081fd5b815160ff81168114610aab578182fd5b60008219821115610b1657610b16610c84565b500190565b600181815b80851115610b7457817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115610b5a57610b5a610c84565b80851615610b6757918102915b93841c9390800290610b20565b509250929050565b6000610aab60ff841683600082610b9557506001610c41565b81610ba257506000610c41565b8160018114610bb85760028114610bc257610bde565b6001915050610c41565b60ff841115610bd357610bd3610c84565b50506001821b610c41565b5060208310610133831016604e8410600b8410161715610c01575081810a610c41565b610c0b8383610b1b565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115610c3d57610c3d610c84565b0290505b92915050565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610c7f57610c7f610c84565b500290565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea26469706673582212208241b55f01f5262a39ca45d081d6a68787e4220ec05d498b5bc8606dd0b3296764736f6c63430008040033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}