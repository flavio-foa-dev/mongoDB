// imports
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express()


// Opn Route - Public Route
app.get('/', (req, res) => {
  res.status(200).json({message: 'Roding with Success'})
});

// Register User
app.post('/auth/register', async(req, res) => {

  const {} = req.body;

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
