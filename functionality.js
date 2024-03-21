// Select the date picker input element
const datePicker = document.getElementById("datePicker");
const sources = [
  "https://gifdb.com/images/high/kawaii-cat-cheerful-dance-7hpalfa53geygxqa.gif",
  "https://media.tenor.com/lCKwsD2OW1kAAAAi/happy-cat-happy-happy-cat.gif",
  "https://media.tenor.com/1jrUvITt1QcAAAAi/github-sticker.gif",
  "https://media.tenor.com/1MGcyWdEnmEAAAAi/cutecats-kitten.gif",
  "https://media.tenor.com/Rrl0kEdmhl0AAAAj/amazed-sparkle.gif",
  "https://media.tenor.com/Ex1pkci_-v8AAAAj/white-cute-cat-hearts.gif",
  "https://media.tenor.com/9X_EXRhnImUAAAAj/love-ilu.gif",
  "https://media.tenor.com/DZKcXvpu-d8AAAAi/bongo-cat-cute-png.gif",
  "https://media.tenor.com/gBRGMDDg6z4AAAAj/peach-peach-and-goma.gif",
  "https://media.tenor.com/7Ie2NGeUuFgAAAAj/cutecat.gif",
  "https://media.tenor.com/s-Nnz3VDs5sAAAAj/ilyakazakov-heart.gif",
  "https://media.tenor.com/hnpqa8Zp8z8AAAAj/mochi-kiss.gif",
  "https://media.tenor.com/guk9njDOl3AAAAAj/peachcat-cat.gif",
];
// Add an event listener for the 'change' event
datePicker.addEventListener("change", function () {
  // Get the selected date value
  const selectedDate = datePicker.value;

  const sourceCount = {};
  let sec = 33;
  let timer = setInterval(function () {
    sec--;
    if (sec < 0) {
      clearInterval(timer);
    } else {
      if (sec % 3 == 0) {
        let image = document.createElement("img");
        let randomIndex = Math.floor(Math.random() * sources.length);
        // Check if randomIndex exists in sourceCount
        if (!sourceCount[randomIndex]) {
          // If randomIndex is not listed, add it to sourceCount with a count of 1
          sourceCount[randomIndex] = 1;
        } else {
          // If randomIndex is listed, increment its count
          sourceCount[randomIndex]++;

          // Check if the count of randomIndex is 2
          if (sourceCount[randomIndex] === 4) {
            // If the count reaches 2, remove the index from sources
            sources.splice(randomIndex, 1);
            // Reset the count of randomIndex to prevent further removals
            delete sourceCount[randomIndex];
          }
        }
        // Set the source of the image to a random URL from sources
        image.src = sources[randomIndex];
        image.style.zIndex = "9999";

        // Calculate random positions inside the visible area of the screen
        let maxX = 200;
        let maxY = 600;
        let randomX = Math.floor(Math.random() * maxX);
        let randomY = Math.floor(Math.random() * maxY);

        // Set the position of the image
        image.style.maxWidth = "200px";
        image.style.position = "fixed";
        image.style.top = randomY + "px";
        image.style.left = randomX + "px";

        document.body.appendChild(image);
        sources.splice(randomIndex, 1);
      }
    }
  }, 1000);
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
});
