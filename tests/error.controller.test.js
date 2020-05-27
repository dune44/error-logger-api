const errorController = require( './../controllers/error.controller' );
const errorSchema = require( './../schema/errors.schema' );
const chai = require( 'chai' );
const expect = chai.expect;

file = 'error.controllers.test.js';

describe( 'Create a full error', () => {

  let create_result;
  const errorObj = {
    file: file,
    info: 'This is part of the testing system.',
    message: String,
    method: String,
    processId: String,
    serverName: String,
    stackTrace: String,
    timestamp: String,
    variables: String
  };

  before( async done => {
    create_result = await errorController.Create.error( errorObj );
    done( create_result);
  });

  after( done => { done(); } );

  // Property Exists
  it( 'errMsg should have property ', () => {
    expect( create_result ).to.have.property( 'success' );
  });

  // Property Type

  // Return Value

});