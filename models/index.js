//  using mongoose to handle my schema
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// creating how I want schema to look
const workout = new Schema({
  // input date automatically
  day: {
    type: Date,
    default: Date.now,
  },
  // based on inputs in html
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

// creating an instance of model at mongoosejs.com/doc/models.html
const Workout = mongoose.mondel(`Workout`, workout);
