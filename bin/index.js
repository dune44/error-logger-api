const app = require( './app' );
const config = require( './../etc/production.config' );
  
app.set('port', config.PORT || 'error');
app.set('address', config.ADDRESS || 'localhost');
const server = app.listen(app.get('port'), app.get('address'), function () {
  console.log( 'starting as production server');
  console.log('Express server listening at http://%s:%s', server.address().address, server.address().port);
});