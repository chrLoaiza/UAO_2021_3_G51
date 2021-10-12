
function formSubmited(event) {
 
  alert("confirmado el envío");
}

document.querySelector('#form')
  .addEventListener('focusin', focusElement);

function focusElement(event) {
  if (event.target) {
    const tag = event.target.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA") {
      event.target.classList.add("focus");
    }
  }
}

document.querySelector('#form')
  .addEventListener('focusout', blurElement);
  
function blurElement(event) {
  if (event.target) {
    const tag = event.target.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA") {
      event.target.classList.remove("focus");
      event.target.value = event.target.value.toUpperCase()
    }
  }
}
