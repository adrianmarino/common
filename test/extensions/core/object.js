//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
var expect  = require('chai').expect;
var let     = require("../../../lib/extensions/mocha").let;
var MethodDefinitionError    = require("../../../lib/extensions/core").MethodDefinitionError;


//-----------------------------------------------------------------------------
// Test
//-----------------------------------------------------------------------------
describe("Core", () => {
  describe("#defineMethod()", () => {
    function User(name) { this.name = name; };

    before(() => User.undefineMethod("getName").defineMethod("getName", function() { return this.name; }));

    context("when invoked getName method added with defineMethod", () => {
      var user = let(() => new User("Adrian"));
      it("returns Adrian", () => expect(user().getName()).to.equal("Adrian"));
    });

    it("throws an MethodDefinitionError when try to define an existent method", () => {        
      expect(() => User.defineMethod("getName", () => {})).to.throw(MethodDefinitionError.name);
    });

    it("delete object method when undefine an existent method", () => {
      expect(() => User.defineMethod("getName", () => {})).to.throw(MethodDefinitionError.name);
    });
  });
});