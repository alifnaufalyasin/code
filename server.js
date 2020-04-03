const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { userDatabase } = require('./model/user')
require('dotenv').config()

const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

mongoose.connect(process.env.url_mongo)



app.post('/api/getUser', async (req,res) =>{
  const user = await userDatabase.find({})
  res.send(user)
})


app.listen(3000, () => console.log(`Server running in port: 3000`))
