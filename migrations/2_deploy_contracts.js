const SokuRouter = artifacts.require("SokuRouter");

const { config } = require('./migration-config');

module.exports = function (deployer, network, accounts) {
  //constructor(address _factory, address _WETH) public {
  deployer.deploy(SokuRouter, config[network].factoryAddress, config[network].WBNBAddress);
};
