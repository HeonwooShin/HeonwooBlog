const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

console.log(__dirname)

app.use(express.static(__dirname + '/dist'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(PORT, function() {
    console.log('Server is running on PORT:',PORT);
});
