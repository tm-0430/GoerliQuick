const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider("<YOUR_QUICKNODE_GOERLI_URL>");
const wallet = new ethers.Wallet("<FUNDED_WALLET_PRIVATE_KEY>", provider);

async function sendTestETH(toAddress) {
  const tx = await wallet.sendTransaction({
    to: toAddress,
    value: ethers.utils.parseEther("0.01") // amount of test ETH to send
  });
  await tx.wait();
  console.log(`Sent 0.01 Goerli ETH to ${toAddress}`);
}
