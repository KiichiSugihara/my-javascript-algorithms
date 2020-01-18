const heapSort = require('./HeapSort');

test('use HeapSort', () => {
  let array_sample = [10, 3, 1, 4, 2];
  let array_sort = [1, 2, 3, 4, 10];
  expect(heapSort(array_sample)).toStrictEqual(array_sort);
});
