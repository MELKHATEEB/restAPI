var mongoose = require('mongoose');

var CategorySchema = new mongoose.Schema({
  cat_name: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Category', CategorySchema);
