const expect = require('expect');
const x = require('../main/x');

describe('x', function () {
    it('should test x to equal 1', function () {
        expect(x).toEqual("1");
    });
});