// Select the date picker input element
const datePicker = document.getElementById("datePicker");

// Add an event listener for the 'change' event
datePicker.addEventListener("change", function () {
  // Get the selected date value
  const selectedDate = datePicker.value;

  // Perform your desired action here, for example:
  let image = document.createElement("img");
  let musica = document.createElement("audio");
  musica.loop = true;
  musica.src = "happyCat.mp3";
  image.src =
    "https://media.tenor.com/lCKwsD2OW1kAAAAi/happy-cat-happy-happy-cat.gif";
  image.id = "happy";
  document.body.appendChild(image);
  musica.play();
  console.log("Selected date:", selectedDate);
});
