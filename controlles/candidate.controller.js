const candidateService = require('../services/candidate.service')

async function create(req, res, next) {

	try {

		const candidate = await candidateService.create(req.body)
		res.status(201).json({
			success: true,
			data: candidate
		})

	} catch (err) { next(err) }
}

module.exports = { create }