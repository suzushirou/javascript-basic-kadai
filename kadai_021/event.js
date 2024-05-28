const text = document.getElementById('text');
const btn = document.getElementById('btn');

btn.addEventListener('click', ()=> {
  setTimeout( ()=> {
    text.textContent = 'ボタンをクリックしました'
  },2000);
});
// イベント処理「クリックしたら」の中にさらにsetTimeout関数を入れて「2秒後にボタンをクリックしましたを表示」