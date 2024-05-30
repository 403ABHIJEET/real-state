import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect(process.env.MONGODB_URI || '')
    .then(() => {
        console.log("Database connected")
    })
    .catch((err) => {
        console.log("Databse not connection failed")
    }
)

const app = express()

app.listen(3000, () => {
    console.log('Server is runing on port 3000')
})