/** @format */

async function movieFetch() {
  let movieName = document.getElementById("movieNameInp").value;
  try {
    let res = await fetch(
      `http://www.omdbapi.com/?t=${movieName}&apikey=68f37983`
    );
    let data = await res.json();
    if (data.Response !== "False") {
      showMovies(data);
      console.log(data);
    } else {
      openunsearch();
    }
  } catch (err) {
    console.log(err);
  }
}

function showMovies(el) {
  let image = document.getElementById("mainMovieimg");
  image.src = el.Poster;
  let tileH1 = document.getElementById("tileH1");
  tileH1.innerText = el.Title;
  let director = document.getElementById("director");
  director.innerText = `Director : ${el.Director}`;
  let language = document.getElementById("language");
  language.innerText = `Language : ${el.Language}`;
  let released = document.getElementById("released");
  released.innerText = `Released : ${el.Released}`;
  let actor1 = document.getElementById("actor1");
  actor1.innerText = `Actors : ${el.Actors}`;
  let awards = document.getElementById("awards");
  awards.innerText = `Awards : ${el.Awards}`;
  let country = document.getElementById("country");
  country.innerText = `Country : ${el.Country}`;
  document.getElementById("movieDiv").style.display = "block";
}

function openunsearch() {
  document.getElementById("newOps").style.display = "block";
}

function searchAMovie() {
  document.getElementById("movieDiv").style.display = "none";
  document.getElementById("movieNameInp").value = null;
  document.getElementById("movieNameInp").focus();
}
function searchAMovie2() {
  document.getElementById("newOps").style.display = "none";
  document.getElementById("movieNameInp").value = null;
  document.getElementById("movieNameInp").focus();
}
