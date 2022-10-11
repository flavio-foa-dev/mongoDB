const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('results')
})



app.listen(3000, function () {console.log('listening on port 3000')})