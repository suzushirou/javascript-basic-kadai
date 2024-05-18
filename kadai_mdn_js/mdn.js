// 現在の標準時を取得
const today = new Date();
// 現在の標準時を出力
  console.log (today);

  // 標準時から年を出力
  console.log(today.getFullYear());
  // 標準時から月を出力(月は１月が0になるので1足さないとだめらしい？)
  console.log(today.getMonth()+1);
  // 標準時から日を出力
  console.log(today.getDate());
  // 標準時を文字列と一緒にして出力
  console.log(today.getFullYear()+'年',today.getMonth()+1+'月',today.getDate()+'日');

  // 別パターン
  const year = today.getFullYear();
  const month = today.getMonth()+1;
  const date = today.getDate();
    console.log (year+'年'+month+'月'+date+'日');
