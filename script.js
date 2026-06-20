let tg = window.Telegram.WebApp;
tg.expand();
let button = document.querySelector('#ABC');
button.onclick=()=>{
    if (tg.MainButton.isVisible){
        tg.MainButton.hide()
    }
    else {
    tg.MainButton.text='Button'
    tg.MainButton.show()
    }
}