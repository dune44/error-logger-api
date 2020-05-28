const errorSchema = require( './../schema/errors.schema' );
const h = require( './helper.lib' );

const methods = {
  Create: {
    error: async errorObj => {
      try {
        errorObj.timestamp = h.now();
        const r = await new errorSchema( errorObj ).save();
        const success = ( r && r.timestamp && typeof r.timestamp === 'string' );
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
    all: async () => {
      try {

      } catch ( e ) {
        console.error( e );
      }
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