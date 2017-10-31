const express = require('express')
const app = express()
const http = require('./http')
const port = 9099
const debug = require('debug')('rpi-webtorrent:api')

// FUCKING POST ISN'T WORKING!
app.get('/login', require('./routes/login'))
app.get('/rpc', require('./routes/rpc'))

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.listen(port, function () {
  console.log(`Api listening at 9099`);
})

process.on('UnhandledException', (err) => {
  debug(err)
})