require( './../bin/app' )( 'test' );
const errorController = require( './../controllers/error.controller' );
const errorSchema = require( './../schema/errors.schema' );
const chai = require( 'chai' );
const expect = chai.expect;

file = 'error.controllers.test.js';

let eid, resultTimestamp;
const st = "(node:1680) UnhandledPromiseRejectionWarning: TypeError: Cannot read property '_id' of undefined " +
'at Context.<anonymous> (/Users/dune44/Projects/Github Portfolio/error-logger-api/test/error.controller.test.js:27:25)' +
'(node:1680) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)' +
'(node:1680) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.';
const errorObj = {
  file: file,
  info: 'This is part of the testing system.',
  message: 'I am a faux error, nothing to see here.',
  method: 'Create a full error.',
  processId: '1',
  serverName: 'localhost',
  stackTrace: st,
  variables: '{"launch":"ocean","pithy":true,"myList":["oranges","apples","bananas"]}'
};
const purgeDB = next => {
  errorSchema.deleteMany({}, e => {
    if ( e ) console.error( e );
    else next();
  });
};

describe( 'Create a full error', () => {

  let create_result;

  before( done => {
    purgeDB( async () => {
      create_result = await errorController.Create.error( errorObj );
      // Aux variables for testing.  Not for exposure to endpoint.
      eid = create_result._id;
      resultTimestamp = create_result.timestamp;
      done();
    });
  });

  after( done => { done(); } );

  // Property Exists
  it( 'create_result should have property success', () => {
    expect( create_result ).to.have.property( 'success' );
  });

  // Property Type
  it( 'create_result should be an object', () => {
    expect( create_result ).to.be.a( 'object' );
  });

  it( 'create_result.success should be a boolean', () => {
    expect( create_result.success ).to.be.a( 'boolean' );
  });

  // Return Value
  it( 'create_result.success should have a value of true', () => {
    expect( create_result.success ).to.equal( true );
  });

});

describe( 'check database saved values', () => {

  let read_result;

  before( async () => {
    read_result = await errorController.Read.error_id( eid );
    return;
  });

  after( done => { done(); } );

  // Property Exists
  it( 'read_result should have property file', () => {
    expect( read_result ).to.have.property( 'file' );
  });

  it( 'read_result should have property info', () => {
    expect( read_result ).to.have.property( 'info' );
  });

  it( 'read_result should have property message', () => {
    expect( read_result ).to.have.property( 'message' );
  });

  it( 'read_result should have property method', () => {
    expect( read_result ).to.have.property( 'method' );
  });

  it( 'read_result should have property processId', () => {
    expect( read_result ).to.have.property( 'processId' );
  });

  it( 'read_result should have property serverName', () => {
    expect( read_result ).to.have.property( 'serverName' );
  });

  it( 'read_result should have property serverName', () => {
    expect( read_result ).to.have.property( 'stackTrace' );
  });

  it( 'read_result should have property timestamp', () => {
    expect( read_result ).to.have.property( 'timestamp' );
  });

  it( 'read_result should have property variables', () => {
    expect( read_result ).to.have.property( 'variables' );
  });

  // Property Type
  it( 'read_result should be an object', () => {
    expect( read_result ).to.be.a( 'object' );
  });

  it( 'read_result.file should be a string', () => {
    expect( read_result.file ).to.be.a( 'string' );
  });

  it( 'read_result.info should be a string', () => {
    expect( read_result.info ).to.be.a( 'string' );
  });

  it( 'read_result.message should be a string', () => {
    expect( read_result.message ).to.be.a( 'string' );
  });

  it( 'read_result.method should be a string', () => {
    expect( read_result.method ).to.be.a( 'string' );
  });

  it( 'read_result.processId should be a string', () => {
    expect( read_result.processId ).to.be.a( 'string' );
  });

  it( 'read_result.serverName should be a string', () => {
    expect( read_result.serverName ).to.be.a( 'string' );
  });

  it( 'read_result.stackTrace should be a string', () => {
    expect( read_result.stackTrace ).to.be.a( 'string' );
  });

  it( 'read_result.timestamp should be a string', () => {
    expect( read_result.timestamp ).to.be.a( 'string' );
  });

  it( 'read_result.variables should be a string', () => {
    expect( read_result.variables ).to.be.a( 'string' );
  });

  // Return Value
  it( 'read_result.file should have a value of errorObj', () => {
    expect( read_result.file ).to.equal( errorObj.file );
  });

  it( 'read_result.info should have a value of errorObj', () => {
    expect( read_result.info ).to.equal( errorObj.info );
  });

  it( 'read_result.message should have a value of errorObj', () => {
    expect( read_result.message ).to.equal( errorObj.message );
  });

  it( 'read_result.method should have a value of errorObj', () => {
    expect( read_result.method ).to.equal( errorObj.method );
  });

  it( 'read_result.processId should have a value of errorObj', () => {
    expect( read_result.processId ).to.equal( errorObj.processId );
  });

  it( 'read_result.serverName should have a value of errorObj', () => {
    expect( read_result.serverName ).to.equal( errorObj.serverName );
  });

  it( 'read_result.stackTrace should have a value of errorObj', () => {
    expect( read_result.stackTrace ).to.equal( errorObj.stackTrace );
  });

  it( 'read_result.timestamp should have a value of resultTimestamp', () => {
    expect( read_result.timestamp ).to.equal( resultTimestamp );
  });

  it( 'read_result.variables should have a value of errorObj', () => {
    expect( read_result.variables ).to.equal( errorObj.variables );
  });

});

describe( 'Read all', () => {

  let read_all_result;

  before( async () => {
    read_all_result = await errorController.Read.all();
    done();
  });

  after( done => { done(); } );

  // Property Type
  it( 'read_all_result should have be array', () => {
    expect( read_all_result ).to.be.a( 'array' );
  });

  it( 'read_all_result.file should be a string', () => {
    expect( read_all_result.file ).to.be.a( 'string' );
  });

  it( 'read_all_result.info should be a string', () => {
    expect( read_all_result.info ).to.be.a( 'string' );
  });

  it( 'read_all_result.message should be a string', () => {
    expect( read_all_result.message ).to.be.a( 'string' );
  });

  it( 'read_all_result.method should be a string', () => {
    expect( read_all_result.method ).to.be.a( 'string' );
  });

  it( 'read_all_result.processId should be a string', () => {
    expect( read_all_result.processId ).to.be.a( 'string' );
  });

  it( 'read_all_result.serverName should be a string', () => {
    expect( read_all_result.serverName ).to.be.a( 'string' );
  });

  it( 'read_all_result.stackTrace should be a string', () => {
    expect( read_all_result.stackTrace ).to.be.a( 'string' );
  });

  it( 'read_all_result.timestamp should be a string', () => {
    expect( read_all_result.timestamp ).to.be.a( 'string' );
  });

  it( 'read_all_result.variables should be a string', () => {
    expect( read_all_result.variables ).to.be.a( 'string' );
  });

  // Return Value
  it( 'read_all_result should be have length of 1', () => {
    expect( read_all_result.length ).to.equal( 1 );
  });
  
});