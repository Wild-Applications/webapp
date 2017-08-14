// web.js
const express = require('express');
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

app.get('*', function(req, res) {
  res.sendfile('./dist/index.html')
})
// Start the app by listening on the default port
app.listen(process.env.PORT || 8080);
console.log("Listening on port 8080");
