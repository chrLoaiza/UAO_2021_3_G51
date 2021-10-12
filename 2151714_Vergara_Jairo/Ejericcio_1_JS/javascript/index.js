// const functionBtn = document.getElementById("namedFunction");

// functionBtn.addEventListener("click", this.buttonClicked);

function dobleClick(event) {
  // alert('I was double clicked, yaaay!!!!!!!!!');
}

function buttonClicked(event) {
  // alert("Normal Function");
}

function Element1(event) {
  element = event.srcElement;
  element.style.background = "red";
}

function Element2(event) {
  element = event.srcElement;
  element.style.background = "red";
}

function Element3(event) {
  element = event.srcElement;
  element.style.background = "red";
}

function Blur1(event) {
  event.srcElement.style.background = "red";
}

function Blur2(event) {
  event.srcElement.style.background = "red";
}

function Blur3(event) {
  event.srcElement.style.background = "red";
}

function formSubmited(event) {
  alert("Alerta");
}

//function formSubmited(event) {
//let element = document.getElementById('form').children
//const loopSize = element.length;
//let mailData = {}
//for (let index = 0; index < loopSize; index++) {
//const element = document.getElementById('form').children[index];
//const inputEle = element.children[1];
//mailData[inputEle.name] = inputEle.value;
//}
//}
