const mongoose = require('mongoose')

const candidateSchema = new mongoose.Schema({

	name: {
		type: String,
		required: true
	},
	tel: {
		type: String,
		required: true,
		unique: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	position: {
		type: String,
		required: true,
		enum: ['Administração', 'Recursos Humanos', 'Serviços Gerais', 'Tecnologia de Informação']
	},
	create: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('Candidate', candidateSchema)