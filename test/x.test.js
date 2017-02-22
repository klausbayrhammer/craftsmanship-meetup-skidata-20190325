const chai = require('chai');
const x = require('../main/x');
chai.should();

describe('x', function () {
    it('should test x to equal 1', function () {
        x.should.equal("1");
    });
});