// Your code here
const { expect } = require('chai')
const reverseString = require('../problems/reverse-string')

describe ("reverseString()", () => {

    it('should reverse string', function () {
        let word = "nuf"
        let reverse = reverseString('fun')
        expect(reverse).to.eql(word)

        // assert.strictEqual(reverseString("fun"), "nuf")

    });
});
