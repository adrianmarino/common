//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
require("../../../lib/extensions/core")
var expect  = require('chai').expect;
var let     = require("../../../lib/extensions/mocha").let;


//-----------------------------------------------------------------------------
// Test
//-----------------------------------------------------------------------------
describe('String', () => {
  describe('#repl()', () => {
    context("when create a string with many %s", () => {
      var subject = let(() => "Hello %s, this is a %s" );

      it('replace variables in string', () => {
        expect(subject().repl("Adrian", "Test")).to.equal("Hello Adrian, this is a Test");
      });
    });
  });
});