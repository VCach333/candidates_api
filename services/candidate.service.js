const Candidate = require('../models/candidate.model.js')

async function create(data) {

	try {

		/* validation */
		if(!data.name || !data.tel || !data.email || !data.position) {

			const err = new Error('Preencha devidamente os Campos')
			err.status = 400
			throw err
		}

		const candidate = await Candidate.create(data)
		return candidate

	} catch (err) { console.log(err) }
}

async function findAll() {

	try {

		const candidates = await Candidate.find()
		return candidates

	} catch (err) { console.log(err) }
}

module.exports = { create, findAll }