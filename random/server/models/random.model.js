const mongoose = require('mongoose');


const RandomSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name is required"],
		minlength: [3, "Name must be at least 3 characters long"]
	},
	image: {
		type: String,
		required: [true, "Image is required"],
		minlength: [8, "Image must be at least 3 characters long" ]
	},
	chests: {
		type: Number,
		required: [true, "Number of Treasure Chests is required"],
		minlength: [0, "Number of Treasure Chests must be a positive number" ]
	},
	phrase: {
		type: String,
		required: [true, "Pirate Catch Phrase is required"],
		minlength: [2, "Pirate Catch Phrase must be at least 2 characters long" ]
	},
	position: {
		type: String,
		required: [true, "Position is required"],
		minlength: [3, "Position must be at least 3 characters long" ]
	},
	leg: {
		type: Boolean

	},
	patch: {
		type: Boolean
	},
	hand: {
		type: Boolean
	},
	},
	{timestamps: true}
);

const Random = mongoose.model("Random", RandomSchema)

module.exports = Random;