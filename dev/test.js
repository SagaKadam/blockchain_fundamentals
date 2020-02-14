const Chain = require('./chain');

const coin = new Chain();

// coin.createNewBlock(2389, '0INGBJN520', 'INGBSX52XSXS'); 
// coin.createNewBlock(1111, 'VDSHCSD56', 'WSCXDSCDS512'); 
// coin.createNewBlock(3568, 'NCKEDNC55', '55DCDECCDWEWC'); 

//coin.createNewBlock(2389, '0INGBJN520', 'INGBSX52XSXS')

coin.createNewBlock(3568, 'NCKEDNC55', '55DCDECCDWEWC'); 
coin.createNewTransaction(100, 'ALEXEJKCVN2056', 'JENNDWCW816262')
coin.createNewBlock(1111, 'VDSHCSD56', 'WSCXDSCDS512'); 

//coin.createNewTransaction(125, 'DCDCDWC25CDWC', 'KOONIBBHBCDS')
//coin.createNewTransaction(145, 'EWCEWC256EWC', 'EWDCDCCEWCWE')
// coin.createNewTransaction(189, 'CEWCEWC562EEC', 'NSAMXBHBSASA')
// console.log(coin.chain[1]);
console.log(coin.chain[1])