const mongoose = require('mongoose')

// mongoose vai pecar User  vai criar uma collection Users no plural - 1 param nome, segundo as chaves
const User = mongoose.model('User', {
  name: String,
  email: String,
  password: String
})


module.exports = User;