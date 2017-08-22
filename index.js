const de = num => {
	if(typeof num !== 'number') num = parseInt(num);
	const snum = String(num);

	if(snum.length > 2) num = parseInt(snum.substring(snum.length-2, snum.length)); 

	return (num > 19 ? ' de' : '');
}

const inttorowords = (num, after = '') => {
  if(typeof num !== 'number') num = parseInt(num);
  const sNum = String(num);
  const numere = ['', 'unu', 'doi', 'trei', 'patru', 'cinci', 'şase', 'şapte', 'opt', 'nouă', 'zece', 'unsprezece', 'douăsprezece'];

  if (num < 13) {
    if (after && num === 2) return 'două' + after;
    return numere[num] + after;
  }
  if (num === 14) return 'paisprezece' + after;
  if (num === 16) return 'şaisprezece' + after;
  if (num < 20) return numere[num - 10] + 'sprezece';
  if (num < 100) { //tens
    let zeci = inttorowords(sNum[0], 'zeci');
    if(sNum[0] === '6') zeci = 'şaizeci'
    const unitati = inttorowords(sNum[1]);
    return zeci + (sNum[1] !== '0' ? ' şi ' + unitati : '') + after;
  }
  if (num < 1000) { //hundreds
    let sute = inttorowords(sNum[0], ' sute');
    if (sNum[0] === '1') sute = 'o sută';
    return sute + ' ' + inttorowords(sNum.substring(1, sNum.length)) + after;
  }
  if (num < 1000000) { //thousands 
    let miiNum = sNum.substring(0, sNum.length - 3);
    let mii = 'o mie ';
    if (miiNum > 1) mii = inttorowords(miiNum, de(miiNum) + ' mii ');

    return mii + inttorowords(sNum.substring(miiNum.length, sNum.length));
  }
  if(num <= 999999999){ //milions 
  	let milNum = sNum.substring(0, sNum.length - 6);
    let mil = 'un milion ';
    if (milNum > 1) mil = inttorowords(milNum, de(milNum.substring(0, sNum.length - 6)) + ' milioane ');
    return mil + inttorowords(sNum.substring(milNum.length, sNum.length));
  }

  //and away we go
  return;
};

module.exports.inttorowords = inttorowords;