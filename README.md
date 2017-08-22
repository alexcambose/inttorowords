# inttorowords
Convert numbers into Romanian words
## Install
`npm install -S inttorowords`

[npm](https://www.npmjs.com/package/inttorowords)
## Usage
```js 
const inttorowords = require('inttorowords').inttorowords;

console.log(inttorowords(1));
// unu

console.log(inttorowords(12));
// douăsprezece

console.log(inttorowords(123));
// o sută douăzeci şi trei

console.log(inttorowords(1234));
// o mie două sute treizeci şi patru

console.log(inttorowords(12345));
// douăsprezece mii trei sute patruzeci şi cinci

console.log(inttorowords(123456));
// o sută douăzeci şi trei de mii patru sute cincizeci şi şase

console.log(inttorowords(1234567));
// un milion două sute treizeci şi patru de mii cinci sute şaizeci şi şapte

console.log(inttorowords(12345678));
// douăsprezece milioane trei sute patruzeci şi cinci de mii şase sute şaptezeci şi opt

console.log(inttorowords(123456789));
// o sută douăzeci şi trei de milioane patru sute cincizeci şi şase de mii şapte sute optzeci şi nouă

console.log(inttorowords(999999999));
// nouă sute nouăzeci şi nouă de milioane nouă sute nouăzeci şi nouă de mii nouă sute nouăzeci şi nouă
```
:warning: Maximum range is between `1` and `999999999`
