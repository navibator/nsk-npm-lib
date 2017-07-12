
function _binary_search(arr, idx0, idx2, iVal) {

  let len=idx2-idx0+1;
  if(len<10) {
    let idx1=0;
    for(idx1=idx0; idx1<=idx2; idx1++) {
      let ans = iVal.localeCompare(arr[idx1].k.toUpperCase());
      if(ans<=0) break;
    }
    return idx1;
  } else {
    let idx1  = Math.floor((idx0+idx2)/2);
    let ans   = iVal.localeCompare(arr[idx1].k.toUpperCase());
    // 'a'.localeComare('n') < 0
    if(ans<0) {
      return _binary_search(arr, idx0  , idx1-1, iVal);
    } else
    if(ans>0) {
      return _binary_search(arr, idx1+1, idx2  , iVal);
    } else { // (ans==0)
      return idx1;
    }
  }
}
exports.binarySearch =  function bSearch(arr,iVal) {
  let len = arr.length; // 7
  let idx = _binary_search(arr, 0, len-1, iVal);
  console.log('bSearch idx=', idx);
  return idx; // [arr[0].k, arr[1]];
}