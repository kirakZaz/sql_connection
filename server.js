require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const http = require('http');


const port = process.env.PORT || '3000';

const articles = require('./routes/usersRoutes'); // ARTICLES ROUTES

const app = express();
const server = http.createServer(app); // CREATE HTTP SERVER USING APP

// VIEW ENGINE SETUP
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev')); // USE MORGAN
app.use(bodyParser.urlencoded({ extended: false })); // PARSE application/x-www-form-urlencoded
app.use(bodyParser.json()); // PARSE application/json

// USE STATIC FILES (CSS, JS, IMAGES)
app.use(express.static(path.join(__dirname, 'public')));

// CORS
app.all('/*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// SECURITY
app.disable('x-powered-by');

// ROUTES
articles(app); // ARTICLES ROUTES

/*
* START SERVER
*/

// SET THE PORT
app.set('port', port);

// LISTEN ON SPECIFIED PORT
server.listen(port);

// LOG WHICH PORT THE SERVER IS RUNNING ON
console.log('Server listening on port ' + port);

// ERROR HANDLER
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});

// EXPORT APP
module.exports = app;