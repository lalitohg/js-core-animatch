import { assert, expect, should } from 'chai';
should();

describe('test ES6 style testing capability', function () {
    describe('use mocha, import chai and ES6 test module', function () {
        var foo = true;

        it('should use assert and pass', function () {
            assert.equal(foo, true);
        });

        it('should use expect and pass', function () {
            expect(foo).to.equal(true);
        });

        it('should use should and pass', function () {
            foo.should.equal(true);
        });
    });
});
