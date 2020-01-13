function quickSort(array, startID, endID) {
  //範囲の間にある値をピポットに設定する
  let pivot = array[Math.floor((startID + endID) / 2)];
  //引数を左端、右端として変数にいれる
  let left = startID;
  let right = endID;

  //ピポットより小さい値を左側へ、大きい値を右側へ分割する
  while (true) {
    //leftの値がpivotより小さければleftを一つ右へ移動する
    while (array[left] < pivot) {
      left++;
    }
    //rightの値がpivotより小さければrightを一つ左へ移動する
    while (pivot < array[right]) {
      right--;
    }
    //leftとrightの値がぶつかったら、そこでグループ分けの処理を止める。
    if (right <= left) {
      break;
    }

    //rightとrightの値がぶつかっていない場合、leftとrightを交換
    //交換後にleftを後ろへ、rightを前へ一つ移動する
    let tmp = array[left];
    array[left] = array[right];
    array[right] = tmp;
    left++;
    right--;
  }

  //左側に分割できるデータがある場合、quickSort関数を呼び出して再帰的に処理を繰り返す。
  if (startID < left - 1) {
    quickSort(array, startID, left - 1);
  }
  //右側に分割できるデータがある場合、quickSort関数を呼び出して再帰的に処理を繰り返す。
  if (right + 1 < endID) {
    quickSort(array, right + 1, endID);
  }
  return array;
}
module.exports = quickSort;
