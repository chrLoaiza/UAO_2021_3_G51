// const functionBtn = document.getElementById("namedFunction");

// functionBtn.addEventListener("click", this.buttonClicked);

function dobleClick(event) {
  // alert('I was double clicked, yaaay!!!!!!!!!');
}

function buttonClicked(event) {
  // alert("Normal Function");
}

function focused1(event) {
  element = event.srcElement;
  element.style.background = "yellow";
}

function focused2(event) {
  element = event.srcElement;
  element.style.background = "blue";
}

function focused3(event) {
  element = event.srcElement;
  element.style.background = "red";
}

function blurred1(event) {
  event.srcElement.style.background = "purple";
}

function blurred2(event) {
  event.srcElement.style.background = "orange";
}

function blurred3(event) {
  event.srcElement.style.background = "green";
}

function formSubmited(event) {
   alert("Mensaje enviado");
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

