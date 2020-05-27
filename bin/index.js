const app = require("./app").default;
const config = require( ( NODE_ENV === 'test' ) ? "./../etc/test.config" : './../etc/dev.config' );

app.set('port', config.PORT || 1337);
app.set('address', config.ADDRESS || 'localhost');
const server = app.listen(app.get('port'), app.get('address'), function () {
    console.log('Express server listening at http://%s:%s', server.address().address, server.address().port);
});
