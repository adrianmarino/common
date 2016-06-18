//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
require("../../../lib/extensions/core")
var expect  = require('chai').expect;
var let     = require("../../../lib/extensions/mocha").let;


//-----------------------------------------------------------------------------
// Test
//-----------------------------------------------------------------------------
describe('String', function() {
  describe('#repl()', function () {
    context("when create a string with many %s", function() {
      var subject = let(function() { return "Hello %s, this is a %s"; });

      it('replace variables in string', function () {
        expect(subject().repl("Adrian", "Test")).to.equal("Hello Adrian, this is a Test");
      });
    });
  });
});