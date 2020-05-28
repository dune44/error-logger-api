module.exports = env => {
  const express = require( 'express' );
  const mongoose = require( 'mongoose' );
  const bodyParser = require( 'body-parser' );
  const config = require( ( process.env && process.env.NODE_ENV && process.env.NODE_ENV === 'production' ) ? './../etc/production.config' : ( env == 'dev') ? './../etc/dev.config' : './../etc/test.config' );
  const MongoUri = config.MONGO_URL + config.DATABASE;
  mongoose.connect( MongoUri,  { "useNewUrlParser": true, "useUnifiedTopology": true, "useCreateIndex": true } );
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ 'extended': false }));
  app.use( bodyParser.json() );
  ( () => { require( './routes/api.route' )( app ); })();
  app.use(function (req, res, next) {
    res.status(404).send('Sorry cant find that!');
  });
  app.use(function (err, req, res) {
    res.status(err.status || 500);
    const vm = {
        "error": { 
            "message": err.message, 
            "error": {}, 
            "stack": err.stack 
        }
    };
    res.render( 'error', vm );
  });
  process.on("uncaughtException", function (err) {
      if (config.NODE_ENV === "production") {
      } else {
          console.error((new Date()).toUTCString() + " uncaughtException: " + err.message);
          console.error(err.stack);
          process.exit(1);
      }
  });
};