module.exports = ( app ) => {

  // Get all errors
  app.get( '/api/error', async ( req, res ) => {
    
    res.json({ "success": false });
  });

  // post error
  app.post( '/api/error', async ( req, res ) => {
    
    res.status( 201 ).json({ "success": false });
  });

};