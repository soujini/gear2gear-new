
var compression = require('compression');
const express = require('express');
const path = require('path');
// const spdy = require('spdy');
const spdy = require('http');
const cors = require('cors');
const port = process.env.PORT || '3000';
var bodyParser = require('body-parser');

const app = express();
require('dotenv').config();

const environment = require('./src/environments/environment.ts');
const makesAPI = require('./src/api/routes/makes');
const modelsAPI = require('./src/api/routes/models');
const variantsAPI = require('./src/api/routes/variants');
const vehicleTypesAPI = require('./src/api/routes/vehicle-types');
const fuelTypesAPI = require('./src/api/routes/fuel-types');
const transmissionTypesAPI = require('./src/api/routes/transmission-types');
const insurancesAPI = require('./src/api/routes/insurances');
const colorsAPI = require('./src/api/routes/colors');
const carsAPI = require('./src/api/routes/cars');
const clientsAPI = require('./src/api/routes/clients');
const expensesAPI = require('./src/api/routes/expenses');
const transactionTypesAPI = require('./src/api/routes/transaction-types');
const transactionDetailsAPI = require('./src/api/routes/transaction-details');

var corsOptions = {
  origin:environment.ORIGIN,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(compression());

app.use(express.static(path.join(__dirname, 'dist')));
 // app.use(compression({threshold:0, filter:function(){return true;}}));
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 // res.header("Cache-Control", "public, max-age=31557600");//1year
 // res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
res.header('Expires', '9');
  next();
});

app.use(makesAPI);
app.use(modelsAPI);
app.use(variantsAPI);
app.use(vehicleTypesAPI);
app.use(fuelTypesAPI);
app.use(transmissionTypesAPI);
app.use(insurancesAPI);
app.use(colorsAPI);
app.use(carsAPI);
app.use(clientsAPI);
app.use(expensesAPI);
app.use(transactionTypesAPI);
app.use(transactionDetailsAPI);

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.set('port',port);

var   fs = require("fs");

var privateKey = fs.readFileSync('ssl/server.key').toString();
var certificate = fs.readFileSync('ssl/server.crt').toString();
var credentials = {key: privateKey, cert: certificate};

// Initialize the app.
const server = spdy.createServer(credentials,app);
server.listen(port, () => console.log("App is listening on Port : ",port));
// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}
