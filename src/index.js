/**
 * es6 modules and imports
 */
// import sayHello from './hello.js';
// sayHello('World');

/**
 * require style imports
 */

import $ from "jquery";
const {getMovie, getMovies, postMovie, patchMovie, deleteMovie} = require('./api.js');



// import {getMovies, getMovie, postMovie, patchMovie, deleteMovie} from "./api" ;
// const {getMovies} = require('./api.js');

// fetch("./api.js").then();

getMovies().catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.');
  console.log(error);
});// let movies = getMovies();

getMovie(1)
    .then(movie => {
      console.log(`Title:${movie.title} Rating: ${movie.rating}`);
    })
    .catch(() => console.log('The important thing is you tried...'));

let moviesDiv = document.getElementById("container");
let loadingGIF = document.getElementById("loading");

// moviesDiv.innerHTML = "<img src=" + './public/lookofhope.gif' + " alt='bleh'>";

getMovies().then((result) => {
    console.log(result);
    // loadingGIF.toggleClass("hide", );
    $("#loading").toggleClass("hide");
    moviesDiv.innerHTML = "<p> HELLO </p>";
    generateCards("LOTR", "6");
    // moviesDiv.toggleClass("hide");
    $("#container").toggleClass("hide");
});

function generateCards(title, rating) {
    let card = ``;
    // for(let i = 0;i < 3; i++) {}
    card += `<div class="card">`;
    card += `<img src="..." class="card-img-top" alt="...">`;
    card += `<div class="card-body">`;
    card += `<p class='card-text'>${title}, ${rating}</p>`;
    card += `</div> </div>`;
    moviesDiv.innerHTML = card;
};


// const makeMovie = (title, rating) => {
//   return {
//     "title" : title,
//     "rating" : rating
//   };
// };

// const options = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(movie),
// };

// console.log(makeMovie("LOTR", 6));
//
// fetch("http://localhost:1313/", {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(makeMovie("LOTR", 6)),
// }).then().catch(() => {console.log("FUCC")});

// getMovies().then((movies) => {
//     console.log('Here are all the movies:');
//     movies.forEach(({title, rating}) => {
//         console.log(`id#${id} - ${title} - rating: ${rating}`);
//         let newTitle = `${title}`;
//         let newRating = `${rating}`;
//         makeCard(newTitle, newRating);
//     });
// }).catch((error) => {
//     alert('Oh no! Something went wrong.\nCheck the console for details.');
//     console.log(error);
// });
