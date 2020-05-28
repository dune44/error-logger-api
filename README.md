# Error Logger API
Capture errors and log them to Mongo

## Usage
download and add config files for test, dev and production as needed.

## Config Files
/etc/dev.config.js

/etc/production.config.js

/etc/dev.config.js

## Config Variables
module.exports = {

  "MONGO_URL": String, // Url to mongo server
  
  "DATABASE": String,  // Name for your error database
  
  "ADDRESS": String,   // Server IP address or localhost usu.
  
  "PORT": Number       // Server port, if you don't know, I can't help you.
  
};
