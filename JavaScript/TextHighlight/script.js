let textInput = document.getElementById("textInput");
let paragraph = document.getElementById("paragraph");

textInput.addEventListener("keyup", (event) => {
  textInput = event.target.value.replace("/[.*+?^${}()|[]\\]/g", "\\$&");

  let pattern = new RegExp(`${textInput}`, "gi");

  paragraph.innerHTML = paragraph.textContent.replace(
    pattern,
    (match) => `<strong>${match}</strong>`
  );
});
