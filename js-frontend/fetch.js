
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((responseJson) => {
//     responseJson.forEach((item) => console.log(item));
//   });

//classa bağla click eventiyle çalışsın
//arrow function normal function arasındaki fark
// rest nedir soap graph ql

const FETCH_MODAL_SELECTOR = "#fetch";
class Fetch {
  constructor(b) {
    this.fetchElement = document.querySelector(FETCH_MODAL_SELECTOR);
    this.bindListeners();
  }

  bindListeners() {
    this.fetchElement.addEventListener("click", this.onButtonClick.bind(this));
  }

  onButtonClick() {
    this.show();
  }

  show() {
    fetch("js-frontend/settings.json").then((response) => {
      console.log(response);
    });
    
    fetch("js-frontend/settings.json")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        console.log(responseJson);
        console.log(responseJson.userName);
      });    
    this.fetchElement.classList.add("active");
  }
}
