function printParentNode() {
  const closebtn = document.querySelector(".cancelbtn");
  if (!closebtn) {
    console.error("closebtn does not exist");
    return false;
  }

  console.log(closebtn.parentNode);
}
printParentNode();

