// Import ethers (ONLY IN THIS LESSON)
import { ethers } from "./ethers-5.1.esm.min.js";
// Import contract (dev net not real network)
// REMEMBER: connect your localhost to MetaMask
import { abi, contractAddress } from "./constants.js";

// Select from the document
const connectBtn = document.getElementById("connectBtn");
const fundBtn = document.getElementById("fundBtn");
const ethAmountInput = document.getElementById("ethAmountInput");

const connect = async () => {
    // Check if exist a wallet connected to ethereum
    if (typeof window.ethereum !== "undefined") {
        // Ask user to connect his wallet
        await window.ethereum.request({ method: "eth_requestAccounts" });
        connectBtn.innerText = "Connected";
    } else {
        connectBtn.innerText = "Wallet required";
    }
};

/* In order to interact with your contract:
    1. Provider - Connection to the blockchain
    2. Signer / Wallet - Someone with some gas
    3. Contract - ABI & Address
*/

// Fund function
const fund = async () => {
    const ethAmount = ethAmountInput.value;
    console.log(`Funding with ${ethAmount}`);
    if (typeof window.ethereum !== "undefined") {
        // Web3Provider wraps whatever is the rpc url from the user's wallet
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        // Since the provider is connected to the wallet, it's possible to get a signer from it
        const signer = provider.getSigner();
        // Get contract
        const contract = new ethers.Contract(contractAddress, abi, signer);

        try {
            // Make a fund
            const transactionResponse = await contract.fund({
                value: ethers.utils.parseEther(ethAmount),
            });
        } catch (error) {
            console.log(error);
        }
    }
};

// On click calls function
connectBtn.addEventListener("click", connect);
fundBtn.addEventListener("click", fund);
