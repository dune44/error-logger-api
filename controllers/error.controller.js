const errorSchema = require( './../schema/errors.schema' );
const h = require( './helper.lib' );

const methods = {
  Create: {
    error: async errorObj => {
      try {
        errorObj.timestamp = h.now();
        const r = await new errorSchema( errorObj ).save();
        console.log( 'r' );
        console.log( r );
        const success = ( r && r.length === 1 );
        if ( success )
          return { "timestamp": errorObj.timestamp, "_id": r._id, "success": success };
        else
          return { "timestamp": errorObj.timestamp, "success": success };
      } catch ( e ) {
        console.error( e );
      }
    }
  },
  Read: {
    all: () => {

    },
    error_id: async eid => {
      try {
        return await errorSchema.findOne( { "_id": eid });
      } catch ( e ) {
        console.error( e );
      }
    } 
  }
};

module.exports = methods;