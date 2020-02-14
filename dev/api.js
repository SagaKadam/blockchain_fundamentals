const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Blockchain = require('./chain')

const bitcoin = new Blockchain()

bitcoin.createNewBlock(3568, 'NCKEDNC55', '55DCDECCDWEWC'); 
bitcoin.createNewTransaction(100, 'ALEXEJKCVN2056', 'JENNDWCW816262')
bitcoin.createNewBlock(1111, 'VDSHCSD56', 'WSCXDSCDS512'); 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

app.get('/blockchain', function(req, res){
    res.send(bitcoin)
})

app.post('/transaction', function(req, res){
    const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient)
    res.json({ note: `Transaction will be added in block ${blockIndex}.`})
})

app.get('/mine', function(req, res){

})

app.listen(3000, function(req, res){
    console.log('The server is listening on port 3000')
})
