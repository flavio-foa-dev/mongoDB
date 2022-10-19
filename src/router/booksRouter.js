const express = require('express')

const router = express.Router()

router.get('/book/', (req, res) => {
  return res.status(200).json({message: 'Router Book'})
})


module.exports = router