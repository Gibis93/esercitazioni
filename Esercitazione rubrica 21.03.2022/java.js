const list = [
    contact1 = {
        name: "Affio",
        surname: "Russo",
        number: "3480000000",
    },
    

    contact2 = {
        name: "Maurizio",
        surname: "Costanzo",
        number: "3290000000",
    },


    contact3 = {
        name: "Mariello",
        surname: "Prapapappo",
        number: "3930000000",
    },


    contact4 = {
        name: "Rupert",
        surname: "Sciamenna",
        number: "3650000000",
    },

    contact5 = {
        name: "Anna",
        surname: "Pannocchia",
        number: "3520000000",
    },
]

// const covertLi = list.join(", ");
let nostraLi = {name: "pippo"};
const ulEl = document.querySelector("ul");
const nameChosen = document.querySelector("#name");
const surnameChosen = document.querySelector("#surname");
const numberChosen = document.querySelector("#number");






// FUNZIONE PER RENDERE ELEMENTI DELLA LISTA DELLE STRINGHE
const createLiEl = (listaScelta) => {
    const liEl = document.createElement("li");
    liEl.textContent = JSON.stringify(listaScelta)
    //listItem.split(" - ")[0];
    return liEl;
};

// CREARE ELEMENTO LISTA SU INPUT UTENTE
createFromInput = () => {


    oggetto = {
        name: " ",
        surnname: " ",
        number: " ",
    };
    return oggetto;
}


// AGGIUNGERE UN ELEMENTO ALLA LISTA
const addLi = () => {
    createLiEl ();



}
// VISUALIZZARE IN UL
ulEl.appendChild(createLiEl(list));

