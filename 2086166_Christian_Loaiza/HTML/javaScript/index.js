const functionBtn = document.getElementById("namedFunction");

functionBtn.addEventListener("click", this.buttonClicked);

function dobleClick(event) {
  // alert('I was double clicked, yaaay!!!!!!!!!');
}

function buttonClicked(event) {
  // alert("Normal Function");
}

function formSubmited(event) {
  let element = document.getElementById('form').children
  const loopSize = element.length - 1;
  let object = {}
  for (let index = 0; index < loopSize; index++) {
    const element = document.getElementById('form').children[index];
    const key = element.children[0].name
    console.log(`${element.children[0].name}: ${element.children[0].value}`)
  }
}


const anonymousClick = document.getElementById("anonymous");
anonymousClick.addEventListener("click", function (event) {
  // alert("Anonymous function");
});

const arrowClick = document.getElementById("arrow");
arrowClick.addEventListener("click", (event) => {
  // alert("Arrow function");
});

const inputElement = document.getElementById("inputName");
inputElement.addEventListener("focus", (event) => {
  console.log(`El id del elemento es ${event.target.id}`);
});

inputElement.addEventListener('input', (event) => {
  const mayuscula = event.target.value.toUpperCase();
  event.target.value = mayuscula;
})

inputElement.addEventListener('blur', (event) => {
  // alert ('Ya no tengo foco');
})

