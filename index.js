const express = require('express');
const path = require('path'); // 1. Import the built-in path tool
const app = express();

// Looks for cloud environment port first. If none, defaults to port 3000.
const PORT = process.env.PORT || 3000; 


// Serve static files (CSS, Images, JS) from the public directory
app.use(express.static('public'));

app.get('/', function (req, res) {
  // 3. Safe, cross-platform way to join paths
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}...`);
  console.log(`Visit http://localhost:${PORT} to see your beautiful homepage!`);
});
