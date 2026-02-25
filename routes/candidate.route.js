const express = require('express')

/* files import */
const candidateController = require('../controllers/candidate.controller')

const router = express.Router()

router.post('/', candidateController.create)

module.exports = router