const app = require( './test.app' );
const config = require( './../etc/test.config' );
  
app.set('port', config.PORT || 1337);
app.set('address', config.ADDRESS || 'localhost');
const server = app.listen( app.get('port'), app.get('address'), function () {
  console.log( 'starting as test');
  console.log('Express server listening at http://%s:%s', server.address().address, server.address().port);
});
module.exports = server;