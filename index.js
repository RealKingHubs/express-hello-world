var express = require('express')
var app = express()

// Serve static files from public directory
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html')
})

app.listen(80, function () {
  console.log('Listening on port 80...')
  console.log('Visit your public IP to see your beautiful homepage!')
})
