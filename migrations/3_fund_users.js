let TestToken = artifacts.require('./TestToken.sol')

// fund everyone with 100 token
module.exports = function (deployer) {
  deployer.then(async () => {
    let accounts = (await web3.eth.getAccounts())
  // let accounts = await getAccounts(deployer.network, web3)
  let instance = await TestToken.deployed()
  let amount = 100
  for (let i = 1; i < accounts.length; i++) {
    await instance.transfer(accounts[i], amount, {from: accounts[0]})
  }
  })
}

