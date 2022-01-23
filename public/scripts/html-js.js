console.log("welcome!!");

function invokeAlert() {
  alert("Alert invoked");
}

function handleChange(elem) {
  console.log(elem.value);
}

function handleMouseOver(elem) {
  console.log(elem.classList.add("hovered"));
}

/**
 *
 * @param {Element} elem
 */
function handleMouseOut(elem) {
  console.log(elem.classList.remove("hovered"));
}

/**
 *
 * @param {Event} evt
 */
function handleSubmission(evt) {
  evt.preventDefault();
  const form = document.forms["test-form"];
  console.log(form["name"].value);
  console.log(form["email"].value);
}
