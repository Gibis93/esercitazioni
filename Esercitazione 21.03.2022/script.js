
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

//---------- VARIABILI ------------//
let nostraLi = {name: "pippo"};
const AddContact = document.getElementById('submit');
const ulEl = document.querySelector("ul");
const nameChosen = document.querySelector("#name");
const surnameChosen = document.querySelector("#surname");
const numberChosen = document.querySelector("#number");

// FUNZIONE PER CREARE ELEMENTI DELLA LISTA e stringhificare
const createLiEl = (listaScelta) => {
    const liEl = document.createElement("li");
    liEl.textContent = JSON.stringify(listaScelta);
    //listItem.split(" - ")[0];
    return liEl;
};



//EVENT LISTENER CLICL DEL BOTTONE
AddContact.addEventListener('click', () =>
{
    
    //FUNZIONE PER CREARE UN ELEMENTO DELLA LISTA TRAMITE INPUT DELL'UTENTE
    const createFromInput = () =>
    {
        listItem = [
            oggetto = {
                name: nameChosen.value,
                surname:surnameChosen.value,
                number: numberChosen.value,
        }]

        
        
        return listItem;
    }
    

    //check per vedere se i campi sono tutti compilati
    if(nameChosen.value !== "" && surnameChosen.value !== "" && numberChosen.value !== "")
    {
        list.push(createFromInput()[0]);
        //RIMUOVERE LA LISTA PRECEDENTE E VISUALIZZARE LA NUOVA LISTA nell'UL
        ulEl.textContent = "";
        ulEl.appendChild(createLiEl(list));
    }
    else
    {
        alert("DEVI COMPILARE TUTTI I CAMPI")
    }
    
})

// FUNZIONE PER AGGIUNGERE UN ELEMENTO ALLA LISTA
/*
const addLi = () => {
    createLiEl();
}
*/


//VISUALIZZARE nell'UL la lista iniziale
ulEl.appendChild(createLiEl(list));

console.log(list);

//Salvare list nel local Storage
localStorage.setItem("Contatti", list);

//qui stavo provando a usare il JSON.parse per ricaricare la lista dal local storage
//ulEl.appendChild(createLiEl(JSON.parse(localStorage.getItem("Contatti"))));






