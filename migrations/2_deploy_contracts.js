const SukoRouter = artifacts.require("SukoRouter");

const { config } = require('./migration-config');

module.exports = function (deployer, network, accounts) {
  //constructor(address _factory, address _WETH) public {
  deployer.deploy(SukoRouter, config[network].factoryAddress, config[network].WBNBAddress);
};
