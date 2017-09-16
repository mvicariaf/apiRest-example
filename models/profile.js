'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProfileSchema = Schema({
	name: String,
	email: String,
	place: String,
	game: { type: String, enum:['world of warcraft', 'league of legends', 'dota','overwatch', 'starcraft 2'] },
	bio: String
})

module.exports = mongoose.model('Profile', ProfileSchema)