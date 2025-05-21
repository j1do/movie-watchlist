const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  year: String,
  poster: String,
  watched: Boolean
});

module.exports = mongoose.model('Movie', movieSchema);
