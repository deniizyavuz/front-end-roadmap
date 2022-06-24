const LOGIN_MODAL_SELECTOR = "#login-modal";
const LOGIN_MODAL_BUTTON_SELECTOR ="#login-button";
const LOGIN_MODAL_BUTTON_CLOSE = "#buttons";
class LoginModal {
  constructor(a) {
    this.element = document.querySelector(LOGIN_MODAL_SELECTOR);
    this.buttonElement = document.querySelector(LOGIN_MODAL_BUTTON_SELECTOR);
    this.closeElement = document.querySelector(LOGIN_MODAL_BUTTON_CLOSE);
    this.bindListeners();
  }

  bindListeners() {
    this.buttonElement.addEventListener("click", this.onButtonClick.bind(this));
    this.closeElement.addEventListener("click", this.closeButtonClick.bind(this));
  }

  onButtonClick(){
    this.show();
  }

  closeButtonClick(){
    this.hide();
  }
  

  show() {
    this.element.classList.add("active");
  }

  hide() {
    this.element.classList.remove("active");
  }
}
const myModal = new LoginModal("x");


//alttaki div display none olacak
//buton ve div eklenecek
//butona clicklendiğinde üstteki divin classı değişecek, eğer üstteli classa open classı gelmişse alttaki display görünür olacak.
//alttaki div login popup modal,çerçeve olacaak posiiton fixed olacak, sağdan soldan yukarıdan aşağı ortalanmış olacak.


// function a(y,b){
//   b(y);
// }
//  function c(x){
//   console.log(x);
//  }

//  a(1,c);
 
