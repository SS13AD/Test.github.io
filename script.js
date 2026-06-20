let tg = window.Telegram.WebApp;
tg.expand();
let button = document.querySelector('#1');
button.onclick=()=>{
    tg.MainButton.setText('Button')
    tg.MainButton.show()
}