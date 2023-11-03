const express = require('express')
const mongoose = require('mongoose')
const BrandName = require('./model')
const app = express()
app.use(express.json())


mongoose.connect(`mongodb+srv://iamvarastesting:India789@cluster0.mstubpk.mongodb.net/?retryWrites=true&w=majority`)
    .then(()=> console.log('DB Connected !!!'))
    .catch( err => console.log(err))

app.get('/', (req, res)=>{
    res.send("Hello World")
})

app.post('/addbrands' , async(req, res) => {
    const{brandname} = req.body;
    try{
        const newData = new BrandName({brandname})
        await newData.save();
        return res.json(await BrandName.find())
    } catch(err){
        console.log(err.message)
    }
})


app.get('/allbrands', async(req, res) => {
    try{
        res.json(await BrandName.find())
    }catch(err){
        console.log(err.message)
    }
})


app.get('/allbrands/:id', async(req, res)=>{
    try{
        return res.json(await BrandName.findById(req.params.id))
    }catch(err){
        console.log(err.message)
    }
})

app.delete('/deletebrand/:id', async(req, res) => {
    try{
        res.json(await BrandName.findByIdAndDelete(req.params.id))
    } catch(err){
        console.log(err.message)
    }
})


app.listen('3000', ()=>{
    console.log("Server Running")
})