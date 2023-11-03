const express = require('express')
const mongoose = require('mongoose')

const app = express()


mongoose.connect(`mongodb+srv://iamvarastesting:India789@cluster0.mstubpk.mongodb.net/?retryWrites=true&w=majority`)
    .then(()=> console.log('DB Connected !!!'))
    .catch( err => console.log(err))

app.get('/', (req, res)=>{
    res.send("Hello World")
})

app.listen('3000', ()=>{
    console.log("Server Running")
})