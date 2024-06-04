var express = require("express");
var app = express();
var carRoutes = require('./routes/carRoutes');
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/cars', carRoutes);

// Serve index.html file when accessing root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

var port = process.env.port || 3000;
app.listen(port, () => {
    console.log("App listening to: " + port);
});
