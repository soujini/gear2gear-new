const { Client } = require('pg');
const express = require('express');
const router = express.Router();
let environment = require('../../environments/environment.ts');
const app = express();

function connect(){
  console.log(environment.SSL);
  var client = new Client({
     connectionString:'postgres://localhost:5432/postgres',
    ////connectionString: environment.CONNECTION_STRING,
    // connectionString:'postgres://qoqgsadljgzsgr:dbc104b647622f5e7460c72e7dc31a0b23b94ece8614c864b104b15dc44f2b9d@ec2-50-17-194-129.compute-1.amazonaws.com:5432/dalp1drkjndrse',
    ssl: false
  });


  client.connect(function(err,client,done) {
    if(err){
      console.log("Failed to connect to the database "+ err);
     console.log("Connecting to (Connection String) "+ environment.CONNECTION_STRING);
    }
    else {
      console.log("Connecting (Environment) "+ app.get('env'));
      console.log("Connecting (ORIGIN) "+ environment.ORIGIN);
    }

  });

  return client;
}

module.exports = connect();
