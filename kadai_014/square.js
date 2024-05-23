//課題: 引数で渡した値を二乗した計算結果を戻り値として返す関数を記述する
// 1関数を定義する関数名をsquareに、引数をnumに設定
const square = (num) => {
  // returnで戻り値を返す、二乗なのでnumとnumを乗する
  return num * num;
}
// 戻り値を表示する(num=10とする)
  console.log (square(12));

// function ver.
function square1 (num) {
  return num ** 2;  
}
// 戻り値を表示する(num=10とする)
console.log (square1(12));
