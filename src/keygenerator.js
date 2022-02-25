const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const key = ec.genKeyPair();
const publicKey = key.getPublic("hex");
const privateKey = key.getPrivate("hex");

console.log("-------");
console.log("Public Key: ", publicKey);
console.log("-------");
console.log("Private Key: ", privateKey);

// Public Key:  04d50bc671aa99a27cde554d58dacb3f86aa11eea46ca66efac500728347b0d99b5b640f8a78c9984725239ac3aa264646f33a839b95683ffd91a25abf8bae7237

// Private Key:  7583f2bc4363f17af0c076f97414760e9bb29de8598456a768eb31356e727f75
