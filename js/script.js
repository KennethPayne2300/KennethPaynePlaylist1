// Complete Day 1 goals here
let titleinput = document.querySelector(".title");
let artistinput = document.querySelector(".artist");
let imageinput = document.querySelector(".image");
let lengthinput = document.querySelector(".length");
let linkinput = document.querySelector(".link");
let add = document.querySelector(".add-input");

let titles = [];
let artists = [];
let images = [];
let lengths = [];
let links = [];

function displaySongInfo() {
  // Complete the Day 2 goals inside this function
  for(let i = 0; i<titles.length; i++) {
    $(".songs").append(`<p>${titles[i]}</p>`);
    $(".artists").append(`<p>${artists[i]}</p>`);
    $(".images").append(`<img src="${images[i]}" alt="cover image for ${titles[i]}">`);
    $(".lengths").append(`<p>${lengths[i]}</p>`);
    $(".links").append(`<a href="${links[i]}" target="_blank">Listen here</a>`);
    $(".delete").append(`<button class="delete-button" onclick="deleteSong(${i})">Delete</button>`);
  }
}

function deleteSong(index) {
  titles.splice(index, 1);
  artists.splice(index, 1);
  images.splice(index, 1);
  lengths.splice(index, 1);
  links.splice(index, 1);
  
  emptySongInfo();
  
  // Re-display the updated song information
  for(let i = 0; i<titles.length; i++) {
    $(".songs").append(`<p>${titles[i]}</p>`);
    $(".artists").append(`<p>${artists[i]}</p>`);
    $(".images").append(`<img src="${images[i]}" alt="cover image for ${titles[i]}">`);
    $(".lengths").append(`<p>${lengths[i]}</p>`);
    $(".links").append(`<a href="${links[i]}">Listen here</a>`);
    $(".delete").append(`<button class="delete-button" onclick="deleteSong(${i})">Delete</button>`);
  }}

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
  $(".delete").empty();
}

function addSongInfo() {
  // Complete Day 3 goals inside this function
  let title = titleinput.value;
  let artist = artistinput.value;
  let image = imageinput.value;
  let length = lengthinput.value;
  let link = linkinput.value;

  titles.push(title);
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
