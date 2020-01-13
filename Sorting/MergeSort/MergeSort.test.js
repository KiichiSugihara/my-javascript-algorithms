const MergeSort = require('./MergeSort');

test('use MergeSort', () => {
  let array_sample = [10, 3, 1, 4, 2];
  let array_sort = [1, 2, 3, 4, 10];
  expect(MergeSort(array_sample)).toStrictEqual(array_sort);
});
