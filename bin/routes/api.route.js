const errorController = require( './../../controllers/error.controller' );
module.exports = ( app ) => {

  // Get all errors
  app.get( '/api/errors', async ( req, res ) => {
    
    res.json({ "success": false });
  });

  // post error
  app.post( '/api/error', async ( req, res ) => {
    const errorObj = {
      "file": req.body.file,
      "info": req.body.info,
      "message": req.body.message,
      "method": req.body.method,
      "processId": req.body.processId,
      "stackTrace": req.body.stackTrace,
      "variables": req.body.variables
    };
    const r = await errorController.Create.error( errorObj );
    res.status( 201 ).json({ "success": r.success });
  });

};