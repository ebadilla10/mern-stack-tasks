const mongoose = require('mongoose');
const URI = 'mongodb+srv://badi:iq42v2-RfMrCupK@freedb-ebadilla10.ffucz.mongodb.net/mern-crud-test?retryWrites=true&w=majority';

mongoose.connect(URI)
  .then(db => console.log('Db is connected'))
  .catch(error => console.error(error));

module.exports = mongoose;
