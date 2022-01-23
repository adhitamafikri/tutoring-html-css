console.log("welcome!!");

function invokeAlert() {
  alert("Alert invoked");
}

function handleChange(evt) {
  console.log(evt.value);
}

function handleMouseOver(evt) {
  console.log(evt.classList.add('hovered'))
}

function handleMouseOut(evt) {
  console.log(evt.classList.remove('hovered'))
}
