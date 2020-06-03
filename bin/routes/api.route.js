const errorController = require( './../../controllers/error.controller' );
const h = require( './../../controllers/helper.lib' );
module.exports = ( app ) => {

  // Get all errors
  app.get( '/api/errors', async ( req, res ) => {
    const r = await errorController.Read.all();
    const success = ( r && r.length > 0 );
    res.json({ "success": success, "errors": r });
  });

  // post error
  app.post( '/api/error', async ( req, res ) => {
    let  errorObj = {};
    if ( h.isVal( req.body.file ) ) errorObj.file = req.body.file;
    if ( h.isVal( req.body.info ) ) errorObj.info = req.body.info;
    if ( h.isVal( req.body.message ) ) errorObj.message = req.body.message;
    if ( h.isVal( req.body.method ) ) errorObj.method = req.body.method;
    if ( h.isVal( req.body.processId ) ) errorObj.processId = req.body.processId;
    if ( h.isVal( req.body.stackTrace ) ) errorObj.stackTrace = req.body.stackTrace;
    if ( h.isVal( req.body.variables ) ) errorObj.variables = req.body.variables;
    console.log( 'Error Obj recieved' );
    console.log( errorObj );
    const r = await errorController.Create.error( errorObj );
    res.status( 201 ).json({ "success": r.success });
  });

};