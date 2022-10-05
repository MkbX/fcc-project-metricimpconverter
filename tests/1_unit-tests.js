const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

    test('should correctly read a whole number input', function() {
        assert.isOk(convertHandler.getNum(2), 'reads whole number "2"');
    });
    test('should correctly read a decimal number input', function() {
        assert.isOk(convertHandler.getNum(7.2), 'reads decimal number "7.2"');
    });
    test('should correctly read a fractional input', function() {
        assert.isOk(convertHandler.getNum(5/2), 'reads fractional input "5/2"');
    });
    test('should correctly read a fractional input with a decimal', function() {
        assert.isOk(convertHandler.getNum(8/1.1), 'reads fractional input with decimal "8/1.1"');
    });
    test('sould correctly return an error on a double-fraction', function() {
        assert.equal(convertHandler.getNum('3/2/3lbs'), 'invalid number');
    });
    test('should correctly default to a numerical input of 1 when no numerical input is provided', function() {
        assert.equal(convertHandler.getNum(''), 1);
    });
    test('should correctly read each valid input unit', function() {
        assert.equal(convertHandler.getUnit('km'), 'km');
    });
    test('should correctly return an error for an invalid input unit', function() {
        assert.equal(convertHandler.getUnit('k'), 'invalid unit');
    });
    test('should return the correct return unit for each valid input unit', function() {
        assert.equal(convertHandler.getUnit('lbs'), 'lbs');
    });
    test('should correctly return the spelled-out string unit for each valid input unit', function() {
        assert.equal(convertHandler.getReturnUnit('GAL'), 'L');
    });
    test('should correctly convert gal to L', function() {
        assert.equal(convertHandler.convert(1,'gal'), 3.78541);
    });
    test('should correctly convert L to gal', function() {
        assert.equal(convertHandler.convert(1,'L'), (1/3.78541).toFixed(5));
    });
    test('should correctly convert mi to km', function() {
        assert.equal(convertHandler.convert(1,'mi'), 1.60934);
    });
    test('should correctly convert km to mi', function() {
        assert.equal(convertHandler.convert(1,'km'), (1/1.60934).toFixed(5));
    });
    test('should correctly convert lbs to kg', function() {
        assert.equal(convertHandler.convert(1,'lbs'), (0.453592).toFixed(5));
    });
    test('should correctly convert kg to lbs', function() {
        assert.equal(convertHandler.convert(1,'kg'), (1/0.453592).toFixed(5));
    });

});