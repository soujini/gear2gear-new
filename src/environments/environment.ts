//localhost
// var environment = {
//   production: false,
//   //DB Connection string
//   CONNECTION_STRING:'postgres://postgres:1llus10n@localhost:5432/postgres',
//   API_URL: 'http://localhost:3000',
//   SSL: false,
//   ORIGIN:'http://localhost:4200',
//
//   firebaseConfig: {
//     apiKey: "AIzaSyCSjEwoBkEotCWofjF32LayrL2ZkTqrkyM",
//     authDomain: "gear2gear-3a321.firebaseapp.com",
//     databaseURL: "https://gear2gear-3a321-default-rtdb.firebaseio.com",
//     projectId: "gear2gear-3a321",
//     storageBucket: "gear2gear-3a321.appspot.com",
//     messagingSenderId: "894654011390",
//     appId: "1:894654011390:web:70329a7e57903272c0d2af",
//     measurementId: "G-Q83EWBD287"
//   }
//   //  //heroku config --app gear2gear gives connectionString
//   // CONNECTION_STRING:'postgres://qoqgsadljgzsgr:dbc104b647622f5e7460c72e7dc31a0b23b94ece8614c864b104b15dc44f2b9d@ec2-50-17-194-129.compute-1.amazonaws.com:5432/dalp1drkjndrse',
// };

//Production
var environment = {
  production: false,
  CONNECTION_STRING:'postgres://qoqgsadljgzsgr:dbc104b647622f5e7460c72e7dc31a0b23b94ece8614c864b104b15dc44f2b9d@ec2-50-17-194-129.compute-1.amazonaws.com:5432/dalp1drkjndrse',
  API_URL: 'https://gear2gear.herokuapp.com',
  SSL: true,
  // ORIGIN:'https://www.gear2gear.in',
  ORIGIN:'https://gear2gear.herokuapp.com',
  firebaseConfig: {
    apiKey: "AIzaSyCSjEwoBkEotCWofjF32LayrL2ZkTqrkyM",
    authDomain: "gear2gear-3a321.firebaseapp.com",
    databaseURL: "https://gear2gear-3a321-default-rtdb.firebaseio.com",
    projectId: "gear2gear-3a321",
    storageBucket: "gear2gear-3a321.appspot.com",
    messagingSenderId: "894654011390",
    appId: "1:894654011390:web:70329a7e57903272c0d2af",
    measurementId: "G-Q83EWBD287"
  }
  //  //heroku config --app gear2gear gives connectionString
  // CONNECTION_STRING:'postgres://qoqgsadljgzsgr:dbc104b647622f5e7460c72e7dc31a0b23b94ece8614c864b104b15dc44f2b9d@ec2-50-17-194-129.compute-1.amazonaws.com:5432/dalp1drkjndrse',
};

module.exports=environment;
