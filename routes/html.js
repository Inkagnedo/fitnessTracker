const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const workoutSchema = new Schema({
  exercise: {
    type: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number
  },
  day: {    
    type: Date,
    default: Date.now
  }
});

const workout = mongoose.model('workout', workoutSchema);

module.exports = workout;