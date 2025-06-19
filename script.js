// Complete Day 1 goals here
let titleinput = document.querySelector(".titlein");
let artistinput = document.querySelector(".artistin");
let imageinput = document.querySelector(".imagein");
let lengthinput = document.querySelector(".lengthin");
let linkinput = document.querySelector(".linkin");
let add = document.querySelector(".add-input");

let titles = [];
let artists = [];
let images = [];
let lengths = [];
let links = [];

titles = localStorage.getItem("Titles");
titles = titles.split(",");
artists = localStorage.getItem("Artists");
artists = artists.split(",");
images = localStorage.getItem("Images");
images = images.split(",");
lengths = localStorage.getItem("Lengths");
lengths = lengths.split(",");
links = localStorage.getItem("Links");
links = links.split(",");

function displaySongInfo() {
  // Complete the Day 2 goals inside this function
  for(let i = 0; i<titles.length; i++) {
    $(".songs").append(`<p class="song item">${titles[i]}</p>`);
    $(".artists").append(`<p class="artist item">${artists[i]}</p>`);
    $(".images").append(`<img src="${images[i]}" class="image item" alt="cover image for ${titles[i]}">`);
    $(".lengths").append(`<p class="length item">${lengths[i]}</p>`);
    $(".links").append(`<a href="${links[i]}" target="_blank" class="link item">Listen here</a>`);
    $(".delete").append(`<button class="delete-button item" onclick="deleteSong(${i})">Delete</button>`);
    $(".dividers").append(`<div class="divider"></div>`);
  }
}

function deleteSong(index) {
  titles.splice(index, 1);
  artists.splice(index, 1);
  images.splice(index, 1);
  lengths.splice(index, 1);
  links.splice(index, 1);
  
  emptySongInfo();
  saveInfo();
  
  // Re-display the updated song information
  displaySongInfo();
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
  $(".delete").empty();
  $(".dividers").empty();
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
  saveInfo();
  titleinput.value = "";
  artistinput.value = "";
  imageinput.value = "";
  lengthinput.value = "";
  linkinput.value = "";
});

displaySongInfo();

function saveInfo() {
  localStorage.setItem("Titles", titles);
  localStorage.setItem("Artists", artists);
  localStorage.setItem("Images", images);
  localStorage.setItem("Lengths", lengths);
  localStorage.setItem("Links", links);
}