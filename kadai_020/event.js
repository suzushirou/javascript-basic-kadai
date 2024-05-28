// 定数btnにID:btnを代入
const btn = document.getElementById('btn');
// 定数textにID:textを代入
const text = document.getElementById('text');

// --btnをクリックしたらイベント処理--
  // btnをクリックしたら
  btn.addEventListener('click', ()=> {
    // textのテキストを変更する
    text.textContent = 'ボタンをクリックしました';
  });