let NODE_ENV;
if ( process.env && process.env.NODE_ENV )
  NODE_ENV = process.env.NODE_ENV;
else if ( !NODE_ENV )
  NODE_ENV = 'dev';

const app = require( './app' )( NODE_ENV );
const config = require( './../etc/' + NODE_ENV + '.config' );
  
app.set('port', config.PORT || 1337);
app.set('address', config.ADDRESS || 'localhost');
const server = app.listen(app.get('port'), app.get('address'), function () {
  if ( NODE_ENV ) console.log( 'starting as dev');
  console.log('Express server listening at http://%s:%s', server.address().address, server.address().port);
});