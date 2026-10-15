const nyTidKnapp = document.querySelector(".Boka-ny-tid");

nyTidKnapp.addEventListener("click", () => {
    console.log("click")
    window.location.href = "boka.html";
});   

const lista = document.querySelector("#Boknings-lista");

const kort = document.createElement("article");
kort.classList.add("Boknings-kort")

const rubrik = document.createElement("h2");
rubrik.textContent = Boknings-titel; 

const pNamn = document.createElement("p");
pNamn.textContent = "namn", + Boknings.namn;

const pDatum = document.createElement("p");
pDatum.textContent = "Datum", + Boknings.Datum;

const pTid = document.createElement("p");
pTid.textContent = "Tid", + Boknings.Tid;

const pTandläkare = document.createElement("p")
pTandläkare.textContent = "Hans Svensson", + Boknings.Tandläkare;



const knapp = document.createElement(".Avboka-Tiden");

knapp.addEventListener("click", () => {
    console.log("click")
    document.querySelector(".Boknings-kort");
    addEventListener.remove(".Boknings-kort");
});
  

kort.appendChild(rubrik);
kort.appendChild(pNamn);
kort.appendChild(pDatum);
kort.appendChild(pTid);
kort.appendChild(pTandläkare);
kort.appendChild(.Avboka-Tiden);

lista.appendChild(kort);


const form = document.querySelector("#form");
    form.addEventListener ("submit", (Event) => {
        Event.preventDefault();
        const namn = document.querySelector("namn").ariaValueMax.trim();
        console.log(namn);
    });



    
  