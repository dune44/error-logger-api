const express = require( 'express' );
const mongoose = require( 'mongoose' );
const bodyParser = require( 'body-parser' );
const config = require( './../etc/dev.config' );
const MongoUri = config.MONGO_URL + config.DATABASE;
mongoose.connect( MongoUri,  { "useNewUrlParser": true, "useUnifiedTopology": true, "useCreateIndex": true } );
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': false }));
app.use( bodyParser.json() );
( () => { require( './routes/api.route' )( app ); })();
app.use( (req, res, next) => {
  res.status(404).send('Sorry cant find that!');
});
app.use( (err, req, res) => {
  res.status( err.status || 500 );
  console.error( err );
});
process.on("uncaughtException", err => {
  console.error((new Date()).toUTCString() + " uncaughtException: " + err.message);
  console.error(err.stack);
  process.exit(1);
});
module.exports = app;