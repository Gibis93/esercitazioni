
const quotes = [
    "Io sono tuo padre!",
    "guerra nessuno fatto grande",
    "fare o non fare... non c'è provare",
    "L'imperatore non condivide affatto le vostre ottimistiche previsioni!",
    "Sto più in alto di te!",
    ".... (cit. Darth Maul)",
    "Eri come un fratello per me! (pianto)",
  ];


  /*
const items = document.querySelectorAll("ul li");

const cb = (element, index)  => {
const testo = element.innerHTML;
console.log(testo);

// items.style.color = "red";
*/



const selQuotes = (arr1) => {

  const rammom = () => {
    min = Math.ceil(0);
    max = Math.floor(7);
    randNum = Math.floor(Math.random() * (max - min) + min);
  
    return(randNum);
  }

return(arr1[rammom()]);
  
}

const cits = document.querySelector("ul");



// INVOCAZIONI //

document.querySelector("button").addEventListener("click", () => {

selQuotes(quotes);

cits.innerHTML = selQuotes(quotes).split("");

});

//// PRIMA SCOPERTA IMPORTANTE /////
/*


cits.innerHTML = quotes.join("");
*/
