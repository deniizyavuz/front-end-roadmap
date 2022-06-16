
const LOGIN_MODAL_SELECTOR = "#login-modal";
class LoginModal {
  constructor() {
    this.element = document.querySelector(LOGIN_MODAL_SELECTOR);
    this.printElement();
    this.bindListeners();
  }
  printElement() {
    console.log(this.element);
  }
  bindListeners() {
    this.element.addEventListener("click", function () {
      console.log('here');
    });
  }
}
const myModal = new LoginModal();
//alttaki div display none olacak
//buton ve div eklenecek
//butona clicklendiğinde üstteki divin classı değişecek, eğer üstteli classa open classı gelmişse alttaki display görünür olacak.
//alttaki div login popup modal,çerçeve olacaak posiiton fixed olacak, sağdan soldan yukarıdan aşağı ortalanmış olacak.