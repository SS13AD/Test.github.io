let tg = window.Telegram.WebApp;
tg.expand();
let button = document.querySelector('#ABC');
button.onclick=()=>{
    tg.MainButton.setText('Button')
    tg.MainButton.show()
}