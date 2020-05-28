
const chai = require( 'chai' );
const chaiHttp = require( 'chai-http' );
const expect = chai.expect;
const should = chai.should();
const server = require( './../bin/test.index' );

chai.use(chaiHttp);

describe('Error Route /api/error', () =>{
  const st = 'MongooseError: The `uri` parameter to `openUri()` must be a string, got "number". Make sure the first parameter to `mongoose.connect()` or `mongoose.createConnection()` is a string.' +
  'at NativeConnection.Connection.openUri (/Users/dune44/Projects/Github Portfolio/error-logger-api/node_modules/mongoose/lib/connection.js:579:11)' +
  'at Mongoose.connect (/Users/dune44/Projects/Github Portfolio/error-logger-api/node_modules/mongoose/lib/index.js:333:15)' + 
  'at module.exports (/Users/dune44/Projects/Github Portfolio/error-logger-api/bin/app.js:7:12)' +
  'at Object.<anonymous> (/Users/dune44/Projects/Github Portfolio/error-logger-api/bin/index.js:2:31)' +
  'at Module._compile (internal/modules/cjs/loader.js:936:30)' +
  'at Object.Module._extensions..js (internal/modules/cjs/loader.js:947:10)' +
  'at Module.load (internal/modules/cjs/loader.js:790:32) ' +
  'at Function.Module._load (internal/modules/cjs/loader.js:703:12)' +
  'at Module.require (internal/modules/cjs/loader.js:830:19)' +
  'at require (internal/modules/cjs/helpers.js:68:18)' +
  'at Object.<anonymous> (/Users/dune44/Projects/Github Portfolio/error-logger-api/test/error.route.test.js:6:16)' +
  'at Module._compile (internal/modules/cjs/loader.js:936:30)' +
  'at Object.Module._extensions..js (internal/modules/cjs/loader.js:947:10)' +
  'at Module.load (internal/modules/cjs/loader.js:790:32)' +
  'at Function.Module._load (internal/modules/cjs/loader.js:703:12)' +
  'at Module.require (internal/modules/cjs/loader.js:830:19)' +
  'at require (internal/modules/cjs/helpers.js:68:18)' +
  'at /Users/dune44/Projects/Github Portfolio/error-logger-api/node_modules/mocha/lib/mocha.js:349:36' +
  'at Array.forEach (<anonymous>)' +
  'at Mocha.loadFiles (/Users/dune44/Projects/Github Portfolio/error-logger-api/node_modules/mocha/lib/mocha.js:346:14)' +
  'at /Users/dune44/Projects/Github Portfolio/error-logger-api/node_modules/mocha/lib/mocha.js:382:12' +
  'at new Promise (<anonymous>)' +
  'at Mocha.loadFilesAsync (/Users/dune44/Projects/Github Portfolio/error-logger-api/node_modules/mocha/lib/mocha.js:381:12)' +
  'at singleRun (/Users/dune44/Projects/Github Portfolio/error-logger-api/node_modules/mocha/lib/cli/run-helpers.js:149:15)' +
  'at exports.runMocha (/Users/dune44/Projects/Github Portfolio/error-logger-api/node_modules/mocha/lib/cli/run-helpers.js:186:11)' +
  'at Object.exports.handler (/Users/dune44/Projects/Github Portfolio/error-logger-api/node_modules/mocha/lib/cli/run.js:319:11)' +
  'at /Users/dune44/Projects/Github Portfolio/error-logger-api/node_modules/yargs/lib/command.js:241:49';

  const variables = {
    "tigerMilk": 'cure what ails me',
    "color": 'white',
    "timestamp": {
      "added": 'right now',
      "updated": 'never'
    },
    "todo": [
      "make this list",
      "finish this variable",
      "stringify me",
      "send me home."
    ],
    "number": 42
  };
  const errorObj = {
    file: file,
    info: 'Why do you never have any good information for me?',
    message: 'I am a faux error, Im better than fake fur, no really, Im not a petrol byproduct.',
    method: 'Create a full error on the api.',
    processId: '1',
    serverName: 'localhost',
    stackTrace: st,
    variables: JSON.stringify( variables )
  };

  describe('POST an error', () => {
    it( 'it should post an error and report back success.', done => {
      chai.request( server )
        .post( '/api/error' )
        .send( errorObj )
        .end(( e, res ) => {
          if ( e ) console.error( e );
          else {
            res.should.have.status( 201 );
            res.body.should.have.property( 'success' );
            expect( res.body.success ).to.be.true;
            done();
          }
        });
    });
  });

  describe('GET All errors', async () => {

  });


});