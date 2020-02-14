function Chain() {
  this.chain = [];
  this.pendingTransactions = [];
}

//-- (if you want to use class. mostly uses in other languages) but javascript mostly uses function and object prototypes --//
// class Chain {
//   constructor() {
//     this.chain = [];
//     this.newTransactions = [];
//   }
// }

Chain.prototype.createNewBlock = function(nonce, previousBlockHash, hash){
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.pendingTransactions, //data or record
        nonce: nonce,  //proof of work or new block or number
        hash: hash, //compressed data with the help of hash method
        previousBlockHash: previousBlockHash //hash of the previous block
    }

    this.pendingTransactions = [];
    this.chain.push(newBlock);
    
   return newBlock; 
}

Chain.prototype.getLastBlock = function(){
    return this.chain[this.chain.length - 1];
}

Chain.prototype.createNewTransaction = function(amount, sender, recipient){
    const newTransaction = {
        amount: amount,
        sender: sender,
        recipient: recipient      
    }

    this.pendingTransactions.push(newTransaction);
    
    return this.getLastBlock()['index'] + 1; 
}

module.exports = Chain;
