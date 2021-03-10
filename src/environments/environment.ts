// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

//  var environment = {
//   production: false,
//   CONNECTION_STRING:'postgres://localhost:5432/postgres',
//   DATABASE_URL:'postgres://localhost:5432/postgres',
//   API_URL: 'http://localhost:3000',
//   SSL:true,
//   // ORIGIN: 'http://localhost:4200', //use this origin for local
//   ORIGIN:'https://www.gear2gear.in', //use this for deployment
// };
//  //export{environment};
//    module.exports =  environment;


    export const  environment = {
      production: true,
      DATABASE_URL: 'postgres://bltypmsejfdisv:e88eb86f18914916049a49313bb5c7a8044cd50c229e0b55671ace8e4565f4ea@ec2-174-129-236-147.compute-1.amazonaws.com:5432/d2m86fr3a5nu60',
      API_URL: 'https://gear2gear.herokuapp.com',
      SSL:true,
      ORIGIN:'https://www.gear2gear.in',

      //  //heroku config --app gear2gear gives connectionString
      CONNECTION_STRING:'postgres://qoqgsadljgzsgr:dbc104b647622f5e7460c72e7dc31a0b23b94ece8614c864b104b15dc44f2b9d@ec2-50-17-194-129.compute-1.amazonaws.com:5432/dalp1drkjndrse',
   };

     // module.exports=environment;
