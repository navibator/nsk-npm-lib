# Navibator Software Kits

# Run demo
- install node.js
- git clone https://github.com/navibator/nsk-npm-lib.git
- $cd nsk-npm-lib
- $node demo.js (or $npm run start)

# Run from module
- $mkdir test
- $cd test
- create file "demo.js"
- $npm install -S nsk-algorithm
- $npm install -S nsk-extension
- $node demo.js

# demo.js
```js
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
```