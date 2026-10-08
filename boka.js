const grid = document.getElementById("grid");

// Veckans dagar
const dagar = [
    { id: "man", kort: "Mån", dag: "Måndag" },
    { id: "tis", kort: "Tis", dag: "Tisdag" },
    { id: "ons", kort: "Ons", dag: "Onsdag" },
    { id: "tor", kort: "Tors", dag: "Torsdag" },
    { id: "fre", kort: "Fre", dag: "Fredag" },
];

// Tider som går att boka
const tider = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00"
];

function ritaSchema() {
    grid.innerHTML = "";

    // Tom ruta längst upp till vänster
    grid.append(document.createElement("div"));

    // Skapar dagarna högst upp (Mån, Tis, Ons ...)
    dagar.forEach(dag => {
        const rubrik = document.createElement("div");

        rubrik.className = "head";
        rubrik.textContent = dag.kort; // texten som syns

        grid.append(rubrik);  
    });

    // Skapar tiderna
    tider.forEach(tid => {

        // Tid till vänster
        const tidRuta = document.createElement("div");

        tidRuta.className = "time"; // ger rutan klassen "time" så att CSS kan styla den
        tidRuta.textContent = tid;

        grid.append(tidRuta);

        // Skapar ledig knapp för varje dag
        dagar.forEach(d => {

            const knapp = document.createElement("button");

            knapp.type = "button";
            knapp.id = `${d.id}-${tid}`; // eget namn för knappen, t.ex. "man-10:00"
            knapp.className = "slot";
            knapp.textContent = "Ledig"; // alla börjar som lediga

            // Sparar dag och tid på knappen så vi kan läsa dem senare
            knapp.dataset.d = d.dag;
            knapp.dataset.tid = tid;

            grid.append(knapp); // lägger knappen i schemat
        });
    });
}

// Visa schemat
ritaSchema();

