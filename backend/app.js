const express = require('express')
const cors = require('cors');
const app = express()
const {readdirSync} = require('fs')

require('dotenv').config()
const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery',false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Database Connected')
    } catch (error) {
        console.log('Database Connection Error')
    }
}

module.exports = {db}

const PORT = process.env.PORT

//middlewares

app.use(express.json())
app.use(cors())

//routes

readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))


const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('listening to port:',PORT)
    })
}


server()