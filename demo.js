
const {binarySearch} = require('./nsk-algorithm/nsk-algorithm.js');
const arr = [
  {k:'01' ,v:'jack'},
  {k:'02' ,v:'wesley'},
  {k:'04' ,v:'allen'},
  {k:'7'  ,v:'maggie'},
  {k:'8'  ,v:'nathan'},
  {k:'9'  ,v:'daniel'},
  {k:'907',v:'lily'}
];
let idx_03 = binarySearch(arr,'03'); // '04'
console.log('next =', arr[idx_03]);
let idx_8 = binarySearch(arr,'8');
console.log('bingo=', arr[idx_8 ]);

require('./nsk-extension/nsk-extension.js');
const objs = { '01':1, '02':2, '03':3, '04':4 };
console.log('objs-keys: ', Object.keys(objs).length );
console.log('objs-size: ', Object.size(objs) );