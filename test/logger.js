//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
var common  = require("../lib/common");
var chai    = require('chai');
var sinon   = require('sinon');


//-----------------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------------
var Logger  = common.Logger;
var assert  = chai.assert;


//-----------------------------------------------------------------------------
// Test
//-----------------------------------------------------------------------------
describe('Logger', () => {
  var output  = {log:(arg)=>{}};
  var spy     = sinon.spy(output, "log");
  var subject = new Logger(output);

  before(() => Date.undefineMethod("iso").defineMethod("iso", function() { return "DATE"; }));

  describe("#info", () => {
    before(() => subject.info("hello"));
    it('write a hello message to output when log a message', () => assert(spy.calledWith("DATE - INFO - hello")));
  });

  describe("#warn", () => {
    before(() => subject.warn("hello"));
    it('write a hello message to output when log a message', () => assert(spy.calledWith("DATE - WARN - hello")));
  });

  describe("#error", () => {
    before(() => subject.error("hello"));
    it('write a hello message to output when log a message', () => assert(spy.calledWith("DATE - ERROR - hello")));
  });

  describe("#debug", () => {
    before(() => subject.debug("hello"));
    it('write a hello message when log a message', () => assert(spy.calledWith("DATE - DEBUG - hello")));
  });
});
