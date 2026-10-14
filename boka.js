const grid = document.querySelector("#grid");
const fel = document.getElementById("fel");
const bekraftelse = document.getElementById("bekraftelse");

// Veckans dagar
const dagar = [
    { id: "man", kort: "Mån", dag: "Måndag" },
    { id: "tis", kort: "Tis", dag: "Tisdag" },
    { id: "ons", kort: "Ons", dag: "Onsdag" },
    { id: "tor", kort: "Tors", dag: "Torsdag" },
    { id: "fre", kort: "Fre", dag: "Fredag" },
];

// Tider som går att boka
const tider = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];

const NYCKEL = "bokningar";

let bokningar = laddaBokningar();

let valdSlot = "null";

function laddaBokningar() {
    try {
        const data = JSON.parse(localStorage.getItem(NYCKEL));
        return Array.isArray(data) ? data : [];
    } catch {
        return [];
    }
}

function sparaBokningar() {
    localStorage.setItem(NYCKEL, JSON.stringify(bokningar));
}

function hittaBokning(slotId) {
    return bokningar.find(b => b.slotId === slotId);
}

function ritaSchema() {
    grid.textContent = "";
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

            if (hittaBokning(knapp.id)) {
                knapp.disabled = true;
                knapp.textContent = "Upptagen";
            } else {
                knapp.textContent = "Ledig";
            }
            // Sparar dag och tid på knappen så vi kan läsa dem senare
            knapp.dataset.dag = d.dag;
            knapp.dataset.tid = tid;
            grid.append(knapp); // lägger knappen i schemat
        });
    });
}


const form = document.getElementById("form");
const valdTid = document.getElementById("vald-tid");
const namnInput = document.getElementById("namn");

// Klick på en slot i schemat
grid.addEventListener("click", e => {
    const knapp = e.target.closest(".slot");
    if (!knapp || knapp.disabled) return;

    valdSlot = { slotId: knapp.id, dag: knapp.dataset.dag, tid: knapp.dataset.tid };

    // Visar formuläret och sätter markören i namnfältet
    form.hidden = false;
    namnInput.focus();
});

// När man trycker på Boka
form.addEventListener("submit", e => {
    e.preventDefault(); // stoppar att sidan laddas om

    const namn = namnInput.value.trim();

    // Tomt namn
    if (!namn) {
        fel.textContent = "Skriv ditt namn för att boka.";
        namnInput.focus();
        return;
    }

    // Ingen tid vald
    if (!valdSlot) {
        fel.textContent = "Välj en tid i schemat först.";
        return;
    }

    // Tiden är redan bokad
    if (hittaBokning(valdSlot.slotId)) {
        fel.textContent = "Tiden är redan bokad. Välj en annan tid.";
        return;
    }

    // Spara bokningen
    bokningar.push({
        slotId: valdSlot.slotId,
        dag: valdSlot.dag,
        tid: valdSlot.tid,
        namn: namn
    });
    sparaBokningar();

    // Visa bekräftelsen och rensa formuläret
    bekraftelse.textContent = `Tack ${namn}! Du har bokat ${valdSlot.dag} ${valdSlot.tid}.`;
    fel.textContent = "";
    valdSlot = null;
    valdTid.textContent = "";
    namnInput.value = "";
    ritaSchema();
});

// Visa schemat
ritaSchema();

