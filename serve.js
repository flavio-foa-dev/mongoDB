// imports
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const routerBook = require('./src/router/booksRouter')

const app = express()

// Config JSON res
app.use(express.json())
app.use(routerBook)

// Models
const User = require('./src/models/User');


// Opn Route - Public Route
app.get('/', async(req, res) => {
 return res.status(200).json({message: 'Roding with Success'})
});

// middleware routes

const checkToken = (req, res, next) => {
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(' ')[1]

  if(!token) {
    return res.status(401).json({message: 'Token required'})
  }

  try {
    const secretKey = process.env.SECRET_KEY
    jwt.verify(token, secretKey)

  } catch (error) {
    console.log(error.message)
    return res.status(400).json({message: 'Token invalid'})
  }

  next()
}

// Private Route - Private Route
app.get('/user/:id', checkToken, async(req, res) => {
  const { id } = req.params
  const user = await User.findById(id, '-password')
  // delete user.password


  if(!user){
    return res.status(422).json({message: 'User not found'})
  }
   return res.status(200).json({user})

})

// Private Methods Users all
app.get('/users', async(req, res) => {
  let users = await User.find()
  console.log(users)

  res.status(200).json(users)

})

// login User
app.post('/auth/login', async(req, res) => {
  const {email, password} = req.body;
  if(!email){
    return res.status(422).json({message: 'Invalid email'})
  }
  if(!password){
    return res.status(422).json({message: 'Invalid password'})
  }

  // check if the user exists
  const user = await User.findOne({email:email})
  if (!user){
    res.status(422).json({message: 'E-mail not exists'})
  }

  // check if passwords match
  const checkPassword = await bcrypt.compare(password, user.password)
  if (!checkPassword){
    res.status(422).json({message: 'Passwords invalid'})
  }

  // tokens
  try {
    const secretKey = process.env.SECRET_KEY

    const header ={
      "alg": "HS256",
      "typ": "JWT"
    }

    const payload = {
      id: user.id,
      id: user.name,
      grants: []
    }

    const config =  {
      expiresIn: 60 * 60
    }

    const token = jwt.sign(
      payload,
      secretKey,
      config
    )

    res.status(200).json({token})

  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'service unavailable try later'
    })
  }

});

// Register User
app.post('/auth/register', async(req, res) => {

  const {name, email, password, password_confirmation} = req.body;

  // validations
  if(!name){
    return res.status(422).json({message: 'Invalid username'})
  }
  if(!email){
    return res.status(422).json({message: 'Invalid email'})
  }
  if(!password){
    return res.status(422).json({message: 'Invalid password'})
  }
  if(password !== password_confirmation){
    return res.status(422).json({message: 'Differnt password'})
  }

  // Credencials
  const userExists = await User.findOne({email: email})
  if(userExists){
    return res.status(422).json({message: 'E-mail already registered'})
  }

  // create password  - digitos a mais com o bcrypt
  const salt = await bcrypt.genSalt(12)
  const passwordHash = await bcrypt.hash(password, salt)

  // Create userRegister
  const user = new User({
    name,
    email,
    password: passwordHash
  })

  try {
  await user.save()
  res.status(200).json({message: 'User created with Success'})

  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

// Router Update
app.post('/user/update/:id', async(req, res) => {
  const { id } = req.params
  const {name, email, password} = req.body
  const isOkId = mongoose.isValidObjectId(id)
  console.log(isOkId)
  if(!isOkId){
    return res.status(422).json({message: 'Invalid id'})
  }

  const result = await User.updateOne({_id:id}, {name, email, password})
  console.log(result)

  return res.status(200).json({message: 'User updated', modifed: result.modifiedCount})
})

// Router delete
app.delete('/user/delete/:id', async(req, res)=> {
  const id = req.params.id
  const user = await User.deleteOne({_id : id})
  if (user.deletedCount < 1 ){
    return res.status(404).json({message: 'User not found'})
  }
  return res.status(200).json({message: 'User deleted'})
})

// Credencials
const dbUser = process.env.DB_USERNAME
const dbPassword = process.env.DB_PASSWORD
const dbHost = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.6xlmueu.mongodb.net/?retryWrites=true&w=majority`


mongoose.connect(dbHost)
  .then(()=> {
    app.listen(3000, () => console.log('listening on port 3000'))
    console.log('Database conected')

  })
  .catch((err) => console.log(err))
