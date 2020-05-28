let NODE_ENV = ( process.env && process.env.NODE_ENV ) ? process.env.NODE_ENV : 'dev';
const app = require( './app' )( NODE_ENV );
const config = require( ( NODE_ENV === 'production' ) ? "./../etc/production.config" : './../etc/dev.config' );

app.set('port', config.PORT || 1337);
app.set('address', config.ADDRESS || 'localhost');
const server = app.listen(app.get('port'), app.get('address'), function () {
    console.log('Express server listening at http://%s:%s', server.address().address, server.address().port);
});
