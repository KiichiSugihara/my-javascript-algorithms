const quickSort = require('./QuickSort');

test('use QuickSort', () => {
  let array_sample = [10, 3, 1, 4, 2];
  let array_sort = [1, 2, 3, 4, 10];
  expect(quickSort(array_sample, 0, array_sample.length - 1)).toStrictEqual(
    array_sort
  );
});
