const InsertionSort = require('./InsertionSort');

test('use InsertionSort', () => {
  let array_sample = [10, 3, 1, 4, 2];
  let array_sort = [1, 2, 3, 4, 10];
  expect(InsertionSort(array_sample)).toStrictEqual(array_sort);
});
