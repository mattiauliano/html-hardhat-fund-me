// Import ethers (ONLY IN THIS LESSON)
import { ethers } from "./ethers-5.1.esm.min.js";

// Select connect button
const connectBtn = document.getElementById("connectBtn");

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

// Fund function
const fund = async (ethAmount) => {
    console.log(`Funding with ${ethAmount}`);
    if (typeof window.ethereum !== "undefined") {
    }
};

// On click call connect function
connectBtn.addEventListener("click", connect);
