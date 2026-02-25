const candidateService = require('../services/candidate.service')

async function create(req, res, next) {

	try {

		const candidate = await candidateService.create(req.body)
		console.log('from controller', req.body)
		res.status(201).json({
			success: true,
			data: candidate
		})

	} catch (err) { next(err) }
}

async function findAll(req, res, next) {

	try {

		const candidates = await candidateService.findAll()
		res.status(200).json({
			success: true,
			data: candidates
		})

	} catch (err) { next(err) }
}

module.exports = { create, findAll }