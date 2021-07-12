const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI;

mongoose.connect(URI)
  .then(db => console.log('Db is connected'))
  .catch(error => console.error(error));

module.exports = mongoose;
