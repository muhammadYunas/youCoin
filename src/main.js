const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('f796b40d7a7fe197f3c4d7de08d5862a84ae985137dc7bd450d6be4fed217430');
const myWalletAddress = myKey.getPublic('hex');

let youCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
youCoin.addTransaction(tx1);


// youCoin.createTransaction(new Transaction('address1', 'address2', 100));
// youCoin.createTransaction(new Transaction('address2', 'address1', 50));

console.log('\n Starting the miner...');
youCoin.minePendingTransactions(myWalletAddress);

console.log('\n Balance of xavier is ', youCoin.getBalanceOfAddress(myWalletAddress));


// mining
// console.log("Mining block 1...");
// youCoin.addBlock(new Block(1, "21/3/2021", {amount: 4}));

// console.log("Mining block 2...");
// youCoin.addBlock(new Block(2, "27/3/2021", {amount: 8}));

youCoin.chain[1].transactions[0].amount = 1;

console.log("Is blockchain valid? " , youCoin.isChainValid());

// youCoin.chain[1].data = {amount: 100};
// youCoin.chain[1].hash = youCoin.chain[1].calculateHash();
// console.log("Is blockchain valid? " + youCoin.isChainValid());

// console.log(JSON.stringify(youCoin, null, 4));