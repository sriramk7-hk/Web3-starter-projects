const ERC20FixedSupply = artifacts.require("Emboss");

module.exports = function (deployer) {
  deployer.deploy(ERC20FixedSupply);

};
