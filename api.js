const express = require('express')
const cors = require('cors')

/* files import */
const connectDatabase = require('./config/database.js')

const api = express()

/* MongoDB conx */
connectDatabase()

api.use(express.json())
api.use(cors())


const PORT = process.env.PORT || 4000
api.listen(PORT, () => { console.log(`API Fly: localhost:${PORT}`) })