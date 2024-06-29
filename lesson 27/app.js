const { expect } = require('chai');
const { sum, multiply } = require('./myFunctions');

describe('myFunctions', () => {
    it('should correctly sum two numbers', () => {
        expect(sum(2, 3)).to.equal(5);
    });

    it('should correctly multiply two numbers', () => {
        expect(multiply(2, 3)).to.equal(6);
    });
});