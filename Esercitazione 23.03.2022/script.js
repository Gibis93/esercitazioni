/*
Sulla base della lezione odierna:

Creare una chiamata API all'indirizzo https://fakestoreapi.com/products, in modo che:

Vengano catturati tutti gli elementi presenti nell'array
Renderizzare delle cards relative a ogni singolo oggetto
Al click sulla card (quindi il singolo prodotto), questo viene rimosso dalla lista
Fondamentale:

Utilizzare fetch per la chiamata, ma gestire il tutto servendoci di async/await!!
*/

/*
-Creiamo struttura card (oggetti con riferimento all'html)
-fetch per catturare elementi specifici (map/split/etc...)
-con await inserire dati nelle cards
-........

*/

const createCard = (id, title, price, description, category, image, rating) => {
    const divEl = document.createElement("div");
    const IdEl = document.createElement("p");
    const TitEl = document.createElement("h3");
    const PricEl = document.createElement("p");
    const DescEl = document.createElement("p");
    const CategEl = document.createElement("p");
    const imgEl = document.createElement("img");
    const RatEl = document.createElement("p");
  
    divEl.classList.add("card");
    PricEl.classList.add("price");
    DescEl.classList.add("description");
  
    imgEl.setAttribute("src", image);
    imgEl.setAttribute("alt", "img cosi");
    
    IdEl.textContent = id;
    TitEl.textContent = title;
    PricEl.textContent = price;
    DescEl.textContent = description;
    CategEl.textContent = category;
    RatEl.textContent = rating;

  
    divEl.append(IdEl, TitEl, PricEl, DescEl, CategEl, imgEl, RatEl);
    document.querySelector(".cardsWrapper").appendChild(divEl);
  };



const getAPIdata = async (URL, item = "") => {
     const res = await fetch(`${URL}${item}`);
   
     return await res.json();
};

getAPIdata("https://fakestoreapi.com/products").then((data) => {
    data.map((product) => {
      createCard(
        product.title,
        product.image,
        product.price + " $"
      );
  
      const cardEls = document.querySelectorAll(".card");
  
      cardEls.forEach((card) => {
        card.addEventListener(
          "click",
          () =>
            (card.innerHTML = `<p style="padding: 20px">${product.description}</p>`)
        );
      });
    });
  });





/*
  async function getPeopleAPI() {
       const res = await fetch(`https://fakestoreapi.com/products`);
       const data = await res.json();
            
            await console.log(getPeopleAPI());



        
       return data;
     }
     


     getPeopleAPI();
    
    
 
/*
// FUNZIONE PER  stringhificare
const createLiEl = (listaScelta) => {
    const liEl = JSON.parse(listaScelta);

    return liEl;
};

console.log(createLiEl(getPeopleAPI()));
*/


//console.log(lista);




/*
     const getAPIdata = async (URL, item = "") => {
        const res = await fetch(`${URL}${item}`);
      
        return await res.json();
     }

     */
