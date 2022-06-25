
const SIDEBAR_BUTTON = "#btn-toggle-nav";
const SIDEBAR = "#nav-sidebar";

class SidebarModal {
  constructor() {
    this.element = document.querySelector(SIDEBAR);
    this.sidebarElement = document.querySelector(SIDEBAR_BUTTON);
    this.bindListeners();
  }

  bindListeners() {
    this.sidebarElement.addEventListener("click", this.onClick.bind(this));
    console.log("deniz");
  }

  onClick(){
    this.show();
  }

  show() {
    this.element.classList.add("active");
  }

  hide() {
    this.element.classList.remove("active");
  }
}

