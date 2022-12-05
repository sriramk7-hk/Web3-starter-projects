const ERC20MinerReward = artifacts.require("ERC20MinerReward");

module.exports = function (deployer) {
    deployer.deploy(ERC20MinerReward);
}