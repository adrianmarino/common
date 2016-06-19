//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
require("../../../lib/extensions/core")
var expect  = require('chai').expect;
var let     = require("../../../lib/extensions/mocha").let;


//-----------------------------------------------------------------------------
// Test
//-----------------------------------------------------------------------------
describe('Date', () => {
  describe('#iso()', () => {
    context("when create a date as 1981-09-22 06:05:00", () => {
      var subject = let(() => new Date("1981-09-22 06:05:00"));
      it('returns an iso string representation', () => expect(subject().iso()).to.equal("1981-09-22 06:05:00"));
    });
  });
});
