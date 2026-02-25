const express = require('express')
const cors = require('cors')

const api = express()

api.use(express.json())
api.use(cors())


const PORT = process.env.PORT || 4000
api.listen(PORT, () => { console.log(`API Fly: localhost:${PORT}`) })