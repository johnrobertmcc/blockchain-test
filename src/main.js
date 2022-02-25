const EC = require("elliptic").ec;
const ec = new EC("secp256k1");
const { Blockchain, Transaction } = require("./blockchain");

const JRKey = ec.keyFromPrivate(
  "7583f2bc4363f17af0c076f97414760e9bb29de8598456a768eb31356e727f75"
);

const walletAddress = JRKey.getPublic("hex");

let newCoin = new Blockchain();

const tx1 = new Transaction(walletAddress, "another wallet public key", 10);
tx1.signTransaction(JRKey);
newCoin.addTransaction(tx1);
newCoin.addTransaction(tx1);

console.log("\n Starting to mine....");
newCoin.minePendingTransactions(walletAddress);
console.log("JR's Balance: ", newCoin.getBalanceOfAddress(walletAddress));

console.log("Is chain valid?: ", newCoin.isChainValid());
console.log(newCoin.listAllTransactions());
newCoin.chain[1].transactions[0].amount = 1;
console.log("Is chain valid?: ", newCoin.isChainValid());
