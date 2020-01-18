function heapSort(array) {
  const cmp = (x, y) => (x < y ? -1 : x > y ? 1 : 0);
  let i = 0;
  let j = array.length;
  const n = j - i;
  let k = 0;
  while (++k < n) {
    let c = k;
    const cv = array[c + i];
    while (c > 0) {
      const p = ((c + 1) >> 1) - 1;
      const pv = array[p + i];
      if (cmp(pv, cv) >= 0) break;
      array[c + i] = pv;
      c = p;
    }
    array[c + i] = cv;
  }
  while (--k > 0) {
    let p = 0;
    const pv = array[k + i];
    array[k + i] = array[i];
    for (;;) {
      const cr = (p + 1) << 1;
      const cl = cr - 1;
      if (!(cl < k)) break;
      const c = cr >= k || cmp(array[cl + i], array[cr + i]) >= 0 ? cl : cr;
      const cv = array[c + i];
      if (cmp(pv, cv) >= 0) break;
      array[p + i] = cv;
      p = c;
    }
    array[p + i] = pv;
  }
  return array;
}

module.exports = heapSort;
