// using mongoose to handle my schema
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//adding the model of what i want the schema to look like based off the html we were given
const workout = new Schema({
  // automatically inputting the date
  day: {
    type: Date,
    default: Date.now,
  },
  // based on inputs in the html file
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "required",
      },
      name: {
        type: String,
        trim: true,
        required: "required",
      },
      weight: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      duration: {
        type: Number,
        required: "required",
      },
      distance: {
        type: Number,
      },
    },
  ],
});

//creating an instance of a model https://mongoosejs.com/docs/models.html
const Workout = mongoose.model(`Workout`, workout);

//export the model
module.exports = Workout;
