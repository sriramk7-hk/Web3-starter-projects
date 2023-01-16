// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const {ethers} = require("hardhat");
require("dotenv");
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

async function main() {
  console.log("Deploying Contracts");
  const Lock = await ethers.getContractFactory("SimpleStorage");
  const lock = await Lock.deploy();

  await lock.deployed();
  console.log(lock.address);

  const currentValue = await lock.retrieve();
  console.log(`Current value is: ${currentValue}`);


  const transcationResponse = await lock.store("7");
  await transcationResponse.wait(1);
  const updatedValue = await lock.retrieve();
  console.log(`Updated Value: ${updatedValue}`);


}



// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
