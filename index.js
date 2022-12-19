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

// On click call connect function
connectBtn.addEventListener("click", connect);
