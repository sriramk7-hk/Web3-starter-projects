const {task} = require("hardhat/config");

task("block-number", "prints the block number").setAction(
    async (taskArgs, hre) => {
        const blockNUmber = await hre.ethers.provider.getBlockNumber();
        console.log(`Currrent block number: ${blockNUmber}`);
    }
)


module.exports = {}