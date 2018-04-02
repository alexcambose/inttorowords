const assert = require('chai').assert;
const inttorowords = require('./index');

describe('1 to 20', () => {
    it('1', () => assert.equal(inttorowords(1), 'unu'))
    it('2', () => assert.equal(inttorowords(2), 'doi'))
    it('3', () => assert.equal(inttorowords(3), 'trei'))
    it('4', () => assert.equal(inttorowords(4), 'patru'))
    it('5', () => assert.equal(inttorowords(5), 'cinci'))
    it('6', () => assert.equal(inttorowords(6), 'şase'))
    it('7', () => assert.equal(inttorowords(7), 'şapte'))
    it('8', () => assert.equal(inttorowords(8), 'opt'))
    it('9', () => assert.equal(inttorowords(9), 'nouă'))
    it('10', () => assert.equal(inttorowords(10), 'zece'))
    it('11', () => assert.equal(inttorowords(11), 'unsprezece'))
    it('12', () => assert.equal(inttorowords(12), 'douăsprezece'))
    it('13', () => assert.equal(inttorowords(13), 'treisprezece'))
    it('14', () => assert.equal(inttorowords(14), 'paisprezece'))
    it('15', () => assert.equal(inttorowords(15), 'cincisprezece'))
    it('16', () => assert.equal(inttorowords(16), 'şaisprezece'))
    it('17', () => assert.equal(inttorowords(17), 'şaptesprezece'))
    it('18', () => assert.equal(inttorowords(18), 'optsprezece'))
    it('19', () => assert.equal(inttorowords(19), 'nouăsprezece'))
    it('20', () => assert.equal(inttorowords(20), 'douăzeci'))
});

describe('20 to 100', () => {
    it('34', () => assert.equal(inttorowords(34), 'treizeci şi patru'));
    it('56', () => assert.equal(inttorowords(56), 'cincizeci şi şase'));
    it('78', () => assert.equal(inttorowords(78), 'şaptezeci şi opt'));
    it('100', () => assert.equal(inttorowords(100), 'o sută'));
});

describe('others', () => {
    it('12345', () => assert.equal(inttorowords(12345), 'douăsprezece mii trei sute patruzeci şi cinci'))
    it('123456789', () => assert.equal(inttorowords(123456789), 'o sută douăzeci şi trei de milioane patru sute cincizeci şi şase de mii şapte sute optzeci şi nouă'))
});