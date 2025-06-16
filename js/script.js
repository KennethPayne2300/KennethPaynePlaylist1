// Complete Day 1 goals here
let titlediv = document.querySelector(".songs");
let artistdiv = document.querySelector(".artists");
let titleinput = document.querySelector(".title");
let artistinput = document.querySelector(".artist");
let imageinput = document.querySelector(".image");
let lengthinput = document.querySelector(".length");
let linkinput = document.querySelector(".link");
let add = document.querySelector(".add-input");

let songs = [];
let artists = [];
let images = [];
let lengths = [];
let links = [];

function displaySongInfo() {
  // Complete the Day 2 goals inside this function
}

function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  $(".songs").empty();
  $(".artists").empty();
  $(".images").empty();
  $(".lengths").empty();
  $(".links").empty();
}

function addSongInfo() {
  // Complete Day 3 goals inside this function
  let title = titleinput.value;
  let artist = artistinput.value;
  let image = imageinput.value;
  let length = lengthinput.value;
  let link = linkinput.value;

  songs.push(title);
  artists.push(artist);
  images.push(image);
  lengths.push(length);
  links.push(link);
}

add.addEventListener("click", function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});

displaySongInfo();
