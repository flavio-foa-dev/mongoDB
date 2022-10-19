const express = require('express')
let data = require('../data/dataBooks')

const router = express.Router()

router.get('/book/', (req, res) => {
  return res.status(200).json(data)
})


module.exports = router