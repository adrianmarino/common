//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
var common  = require("../lib/common");
var expect  = require('chai').expect;


//-----------------------------------------------------------------------------
// Test
//-----------------------------------------------------------------------------
describe('Map', () => {
  describe('#put() and #get()', () => {
    var subject = new common.Map();

    it("has 'b' value with 'a' key when put 'a' key with 'b' value", () => {
        subject.put("a","b");
        expect(subject.get("a")).to.equal("b")
    });
  });

  describe('#keys()', () => {
    var subject = new common.Map();

    it("haven't keys when doesn't any value", () => expect(subject.keys().length).to.equal(0));

    it("has 'a' key when put a 'a' key with 'b' value", () => {
        subject.put("a","b");
        expect(subject.keys()).to.contain("a")
    });
  });

  describe('#isEmpty()', () => {
    var subject = new common.Map();

    it("doesn't empty when put a value", () => {
        subject.put("a","b");
        expect(subject.isEmpty()).to.equal(false)
    });

    it("does empty when put a value", () => expect(subject.isEmpty()).to.equal(false));
  });

  describe("#filter()", () => {
    var subject = new common.Map();
    subject.put("a","b");
    it("returns a (a,b) pairs when filter 'a' key", () => expect(subject.filter((k,v) => k === 'a').get('a')).to.equal('b'));
    it("returns an empty map when filter 'x' key", () => expect(subject.filter((k,v) => k === 'x').isEmpty()).to.equal(true));
  });

  describe("#reject()", () => {
    var subject = new common.Map();
    subject.put("a","b");
    subject.put("x","y");

    it("returns a (a,b) pairs when reject 'x' key", () => expect(subject.filter((k,v) => k === 'a').get('a')).to.equal('b'));

    it("returns same map when filter 'z' key", () => {
        var result = subject.reject((k,v) => k === 'z');
        expect(result.keys().length).to.equal(2);
        expect(result.get('a')).to.equal('b');
        expect(result.get('x')).to.equal('y');
    });
  });

  describe("#forEach()", () => {
    var subject = new common.Map();
    subject.put("a","b");

    it("iterate each (key, value) pair", () => {
        subject.forEach((k,v) => {
            expect(k).to.equal('a');
            expect(v).to.equal('b');
        });
    });
  });
});