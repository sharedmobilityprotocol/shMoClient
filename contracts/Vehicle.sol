pragma solidity ^0.5.0;

import "./lib/openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract Vehicle {
    address owner;
    address scooterClient;
    address rider;
    StandardToken token;

    // unix time stamp when it the ride started
    uint public started;
    bool public locked;

    // cost in Token / minute
    uint cost;

    event RideStarted(address indexed vehicle, address indexed rider, uint startTime);
    event RideFinished(address indexed vehicle, address indexed rider, uint amount);

    constructor(address _owner, address _scooterClient, address _tokenAddress) public {
        owner = _owner;
        scooterClient = _scooterClient;
        cost = 1; //daiCents per second
        token = StandardToken(_tokenAddress);
    }

    /// will unlock scooter, mark start time
    function startRide(address _rider) public {
        require(locked && msg.sender == scooterClient,"Ride cannot be started.");
        // TODO substract tokens
        started = block.timestamp;
        locked = false;
        rider = _rider;
        emit RideStarted(address(this), rider, started);
    }

    /// lock scooter and refund rider with remaining funds
    function finishRide() public {
        require(!locked && (msg.sender == rider || msg.sender == scooterClient),"Ride cannot be stoped.");
        uint amount = (block.timestamp - started) * cost;
        //require(token.balanceOf(address(this)) >= amount, "amount to be refunded exceeds balance");
        //if (msg.sender == rider) {
        //  token.transfer(rider, amount);
        //}
        emit RideFinished(address(this), rider, amount);
        rider = address(0);
        locked = true;
    }

    /// function for the owner of the vehice to withdraw his earnings
    function withdrawEarnings() public {
      require(msg.sender == owner, "Only owner can withdraw");
      uint earnings = token.balanceOf(owner);
      token.transfer(owner, earnings);
    }
}
