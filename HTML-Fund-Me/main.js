import {ethers} from "./ethers-5.2.esm.min.js";
import {abi, contractAddress} from "./constants.js"
const fundButton = document.getElementById("fundButton");
fundButton.onclick = fund

async function connect() {
    if(typeof window.ethereum !=="undefined"){
        await window.ethereum.request({method: "eth_requestAccounts"})
        console.log("Connected");
        document.getElementById("connectButton").innerHTML = "Connected!"
    }else {
        document.getElementById("connectButton").innerHTML = "Please Connect Metamask"
    }
}

async function fund(ethAmount) {
    console.log(`Funding... ${ethAmount}`);
    if(typeof window.ethereum !=="undefined"){
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        console.log(signer);
        const contract = new ethers.Contract(contractAddress, abi, signer)
        try {
            const transactionResponse = await contract.fund({
                value: ethers.utils.parseEther(ethAmount),
            })
        } catch(error) {
            console.log(error);
        }
    }

}