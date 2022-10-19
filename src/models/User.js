const mongoose = require('mongoose')

// mongoose vai pegar User e vai criar uma collection Users no plural o 1- param o nome da colletion, 2-param as chaves
const User = mongoose.model('User', {
  name: String,
  email: String,
  password: String
})


module.exports = User;