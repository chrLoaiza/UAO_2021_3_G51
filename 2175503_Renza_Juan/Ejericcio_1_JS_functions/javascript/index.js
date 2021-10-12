// const functionBtn = document.getElementById("namedFunction");

// functionBtn.addEventListener("click", this.buttonClicked);

function focusElement(event){
  element = event.srcElement;
  element.classList.toggle('focus',true);
}

function blurElement(event){
  element = event.srcElement;
  element.classList.toggle('focus',false);
}


function formSubmited(event) {
  alert("Mensaje enviado!");
}


