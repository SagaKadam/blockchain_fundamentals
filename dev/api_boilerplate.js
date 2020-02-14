const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

app.get('/blockchain', function(req, res){
    res.send('Hello, Sagar!')
})

app.post('/transaction', function(req, res){
    console.log(req.body) 
    res.send(`The amount of transaction is ${req.body.amount} bitcoin.`)
})

app.get('/mine', function(req, res){

})

app.listen(3000, function(req, res){
    console.log('The server is listening on port 3000')
})
