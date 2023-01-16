const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config()

async function main() {

    const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
    const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf-8")
    const binary = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin", "utf-8")
    const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
    // console.log("Deploying, please wait...");
    const contract = await contractFactory.deploy();
    // const deploymentReceipt = await contract.deployTransaction.wait(1);
    // console.log("Here is the deployment Receipt: ")
    // console.log(deploymentReceipt);
    // console.log("Here is the deployment transaction: ");

    const number = await contract.display();
    const store = await contract.store("8");
    console.log(store);
    
}

main().then(() => process.exit(0)).catch((error) => {
    console.error(error);
    process.exit(1);
})