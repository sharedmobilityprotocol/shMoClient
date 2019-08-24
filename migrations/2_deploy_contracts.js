var Vehicle = artifacts.require('./Vehicle.sol')
var TestToken = artifacts.require('./TestToken.sol')

// could be used to get the same set of accounts when deploying to a testnet
// let getAccounts = require('../js/getAccounts.js')
let zeroAddress = '0x0000000000000000000000000000000000000000'
module.exports = async function (deployer) {
  // deploy Token to be used for Testing
  // let accounts = await getAccounts(deployer.network, web3) 
  let accounts = (await web3.eth.getAccounts())
  console.log('accounts', accounts)

  let initialAmount = 1000000000
  let initialUser = accounts[0]
  let scooterClientAddress = zeroAddress // TODO
  let vehicleOwner = accounts[0]

  console.log('funding ', initialUser, ' with ', initialAmount, ' Tokens...')
  await deployer.deploy(TestToken, initialAmount, initialUser);

  // deploy a vehicleContract
  await deployer.deploy(Vehicle, vehicleOwner, scooterClientAddress, TestToken.address);


}

// let accounts = await getAccounts(deployer.network, web3)
// deployer.then(async () => {
//   let accounts = await getAccounts(deployer.network, web3)
//   let instance = await FathomToken.deployed()
//   let amount = 100e9
//   console.log('funding', accounts.length, 'users with', amount / 1e9, 'AHA each')
//   for (let i = 1; i < accounts.length; i++) {
//     await instance.transfer(accounts[i], amount)
//     if (deployer.network !== 'development') console.log('funded', accounts[i])
//   }
// })
// }

