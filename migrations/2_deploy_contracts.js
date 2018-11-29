var RecurringLottery = artifacts.require("./RecurringLottery.sol");

module.exports = function(deployer) {
  deployer.deploy(RecurringLottery);
};