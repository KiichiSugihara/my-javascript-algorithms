function InsertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let tmp = array[i];
    if (array[i - 1] > tmp) {
      let j = i;

      while (j > 0 && array[j - 1] > tmp) {
        array[j] = array[j - 1];
        j--;
      }
      array[j] = tmp;
    }
  }
  return array;
}
module.exports = InsertionSort;
