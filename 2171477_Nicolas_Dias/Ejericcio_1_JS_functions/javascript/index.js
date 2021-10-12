// const functionBtn = document.getElementById("namedFunction");

// functionBtn.addEventListener("click", this.buttonClicked);

function dobleClick(event) {
  // alert('I was double clicked, yaaay!!!!!!!!!');
}

function buttonClicked(event) {
  // alert("Normal Function");
}

function formSubmited(event) {
  let element = document.getElementById('form').children
  const loopSize = element.length;
  let mailData = {}
  for (let index = 0; index < loopSize; index++) {
    const element = document.getElementById('form').children[index];
    const inputEle = element.children[1];
    mailData[inputEle.name] = inputEle.value;
  }

}

function focusElement(event){
  element = event.srcElement; //capturamos el elemento
  element.classList.toggle('focus', true) // true agregamos la clase focus
  }                                       // false quitamos la clase focus

  function blurElement(event){
        element.classList.toggle('focus', false) //eliminamos la clase para que al salir del focus cambie
    }

    function formSubmited(event){
      swal(' Very Good BRO', '','success');
    }

