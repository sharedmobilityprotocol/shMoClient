pragma solidity ^0.5.0;

import "./lib/openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract TestToken is StandardToken {
  constructor (uint _initialSupply, address _initialOwner) public {
    totalSupply_ = _initialSupply;
    balances[_initialOwner] = _initialSupply;
  }
}
