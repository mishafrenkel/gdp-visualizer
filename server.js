var express = require('express');
const favicon = require('express-favicon');

var app = express();
var axios = require('axios');
var cors = require('cors');
var path = require('path');
const bodyParser = require('body-parser');
let data = []

// use cors to allow cross origin resource sharing
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
// Serve static files from the React frontend app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(favicon(__dirname + '/client/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'client/build')))
app.get('/ping', function (req, res) {
    return res.send('pong');
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/public'));
});

app.get('/api/graph', function (req, res) {
    let start = parseInt(req.query.start);
    let windowSize = parseInt(req.query.windowSize);
    let totalValues = data[0].total;
    if (windowSize + start > totalValues) {
        res.json(data[1].slice(start, totalValues))
    } else {
        res.json(data[1].slice(start, windowSize + start))
    }

})

axios.get('http://api.worldbank.org/countries/USA/indicators/NY.GDP.MKTP.CD?per_page=5000&format=json')
    .then(response => {
        data = [...response.data]
        if (!data.length) throw Error("no data found!")
    })
    .then(_ => {
        app.listen(process.env.PORT || 3001)
        console.log("listening on", process.env.PORT || 3001);
    })
    .catch(e => console.error(e));
