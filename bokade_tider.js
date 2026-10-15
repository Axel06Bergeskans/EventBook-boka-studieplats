const behallare = document.querySelector("#bokningar");
const bokaNyTid = document.querySelector(".Boka-ny-tid");

// Samma nyckel som i boka.js
const NYCKEL = "bokningar";

let bokningar = laddaBokningar();

// Läser bokningar från localStorage (tom lista om inget finns)
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

// Gör ett kort för en bokning (samma klasser som din CSS)
function skapaKort(bokning) {
    const kort = document.createElement("article");
    kort.className = "Boknings-kort";

    const rubrik = document.createElement("h2");
    rubrik.textContent = "Tandläkarundersökning";

    const namn = document.createElement("p");
    namn.textContent = `Namn: ${bokning.namn}`;

    const dag = document.createElement("p");
    dag.textContent = `Dag: ${bokning.dag}`;

    const tid = document.createElement("p");
    tid.textContent = `Tid: ${bokning.tid}`;

    const tandlakare = document.createElement("p");
    tandlakare.textContent = "Tandläkare: Hans Svensson";

    const avboka = document.createElement("button");
    avboka.className = "Avboka-Tiden";
    avboka.innerHTML = "<strong>Avboka</strong>";

    // Avboka: ta bort bokningen, spara och rita om
    avboka.addEventListener("click", () => {
        bokningar = bokningar.filter(b => b.slotId !== bokning.slotId);
        sparaBokningar();
        ritaBokningar();
    });

    kort.append(rubrik, namn, dag, tid, tandlakare, avboka);
    return kort;
}

// Ritar alla bokningar
function ritaBokningar() {
    behallare.textContent = "";

    if (bokningar.length === 0) {
        const tomt = document.createElement("p");
        tomt.textContent = "Du har inga bokade tider.";
        behallare.append(tomt);
        return;
    }

    bokningar.forEach(bokning => behallare.append(skapaKort(bokning)));
}

// "Boka ny tid" går till bokningssidan
bokaNyTid.addEventListener("click", () => {
    window.location.href = "boka.html";
});

ritaBokningar();
