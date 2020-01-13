const QuickSort = require('./QuickSort');

test('use QuickSort', () => {
  let array_sample = [10, 3, 1, 4, 2];
  // let array_sort = [1, 2, 3, 4, 10];
  let array_sort = [10, 3, 1, 4, 2];
  expect(QuickSort(array_sample)).toStrictEqual(array_sort);
});
