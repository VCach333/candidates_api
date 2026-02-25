const mongoose = require('mongoose')

async function connectDatabase() {

	try {

		const mongo_uri = process.env.PORT ? 'mongodb+srv://alphaavatarvladmircach:112358@cluster0.06hvb3w.mongodb.net/zeno_cand_gest' : 'mongodb://localhost/zeno_cand_gest'

		await mongoose.connect(mongo_uri)

		console.log('MongoDB Connected')

	} catch (err) { console.log('MongoDB Error: ' + err) }
}

module.exports = connectDatabase

/*
	to connect the atlas cli

        mongosh "mongodb+srv://cluster0.06hvb3w.mongodb.net/" --apiVersion 1 --username alphaavatarvladmircach

        pwd: 112358

*/