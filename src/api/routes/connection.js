const { Client } = require('pg');
const express = require('express');
const router = express.Router();
let environment = require('../../environments/environment.ts');
const app = express();

function connect(){
  console.log("souj "+environment.CONNECTION_STRING);
  var client = new Client({
    connectionString: environment.CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
  });


  client.connect(function(err,client,done) {
    if(err){
      console.log("Failed to connect to the database "+ err);
    }
    else {
      console.log("Connecting (Environment) "+ app.get('env'));
      console.log("Connecting (ORIGIN) "+ environment.ORIGIN);
    }

  });

  return client;
}

module.exports = connect();
