var express = require('express')
var app = express()

// Serve static files from public directory
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html')
})

app.listen(3000, function () {
  console.log('Listening on port 3000...')
  console.log('Visit http://localhost:3000 to see your beautiful homepage!')
})
