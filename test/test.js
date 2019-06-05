const chai = require("chai");
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

describe('test mocha and chai themselves are woring :)', function() {
    var foo = true;

    it('should use assert and pass', function() {
        assert.equal(foo, true);
    });

    it('should use expect and pass', function() {
        expect(foo).to.equal(true);
    });

    it('should use should and pass', function() {
        foo.should.equal(true);
    });
});
