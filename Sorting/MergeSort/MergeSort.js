function MergeSort(items) {
  // 受け取ったdata(配列)が、最小単位になるまで分割し続ける。
  if (items.length < 2) {
    return items;
  }

  let middle = Math.floor(items.length / 2),
    left = items.slice(0, middle),
    right = items.slice(middle);

  return merge(MergeSort(left), MergeSort(right));
}
function merge(left, right) {
  let result = [],
    il = 0,
    ir = 0;

  while (il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      result.push(left[il++]);
    } else {
      result.push(right[ir++]);
    }
  }

  // 配列で余った一番大きい値を最後にresultに入れて終了。
  return result.concat(left.slice(il)).concat(right.slice(ir));
}
module.exports = MergeSort;
