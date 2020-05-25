const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * file: Name of file where error occurred. 
 * info: Any additional info that you might find helpful.  
 * message: Error message. 
 * method: The name of the function called at time of error.  
 * processId: If available the Process Id of the service running.  
 * variables: String form of any object of variables used.  
 */

const errorSchema = new Schema({
  file: String,
  info: String,
  message: String,
  method: String,
  processId: String,
  serverName: String,
  stackTrace: String,
  timestamp: String,
  variables: String
 });

module.exports = mongoose.model( 'error', errorSchema );