import {
    createCard,
    getAPIdata,
    formatMaxText,
    formatMinText,
  } from "./utils.js";
  

  const getMoviesData = async() => {
    const res = await fetch("https://edgemony-backend.herokuapp.com/movies", {
        method:"GET",
        headers: {
            "Content-Type": "application/json",
        }
    });


    if (res.status >= 200 && res.status <= 299) {
        return await res.json();
    }   else {
        const h1El = document.createElement("h1");
        h1El.textContent = "404 pagina non trovata";
        
        document.body.append(h1El);

        throw new Error("la pagina non è stata trovata");
    }
};

getMoviesData().then((resultAPI) => {
resultAPI.map((movie) =>
createCard(movie.title, formatMinText(movie.description), movie.poster, movie.year)
);
});

/* FORM ADD MOVIE/POSTER
const titleInputEl = document.querySelector("#title");
const descInputEl = document.querySelector("#description");
const posterInputEl = document.querySelector("#poster");
const yearInputEl = document.querySelector("#year");
const submitInputEl = document.querySelector("#submit");

submitInputEl.addEventListener("click", (event) => {
    event.preventDefault();

    fetch("https://EDGEMONY-BACKEND.HEROKUAPP.COM/MOVIES", {
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            description: descInputEl.value,
            genres: ["animation"],
            poster: posterInputEl.value,
            title: titleInputEl.value,
            year: yearInputEl.value,
        })
    });
});

console.log(titleInputEl);







/* ADD RICK & MORTY
const rickEMorty = {
    description: "Wubba Lubba Dub Dub",
    genres: ["animation"],
    poster:"https://m.media-amazon.com/images/I/81LBzgzf0iL._AC_SY741_.jpg",
    title: "Rick & Morty",
    year: 2014,
}
fetch ("https://EDGEMONY-BACKEND.HEROKUAPP.COM/MOVIES", {
method: "POST",
headers: {
    "Content-Type": "application/json",
},
body: JSON.stringify(rickEMorty),
});
*/