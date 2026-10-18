
# EventBook – Boka studieplats

## Om projektet

EventBook är en webbapplikation som gör det enkelt för studenter att se lediga tider och boka en studieplats. Användaren kan välja en ledig tid, ange sitt namn och få en bekräftelse på bokningen.

Målet är att skapa en tydlig och användarvänlig webbplats där det enkelt går att se vilka tider som är lediga respektive bokade.

## Gruppmedlemmar

- Axel
- Furkan
- Sam
- Mikael

## Tekniker

Projektet är byggt med:

- HTML5
- CSS3
- JavaScript
- localStorage

## Kom igång

Det finns två sätt att starta projektet.

### Alternativ 1: Ladda ner projektet

1. Ladda ner projektet till din dator.
2. Packa upp ZIP-filen om det behövs.
3. Öppna projektmappen i Visual Studio Code.
4. Öppna `index.html` med Live Server.

### Alternativ 2: Klona projektet från GitHub

1. Öppna projektets repository på GitHub.
2. Kopiera repositoryts URL.
3. Öppna Visual Studio Code.
4. Öppna terminalen och kör följande kommando:

```bash
git clone [repository-URL]
```

5. Öppna den klonade projektmappen i Visual Studio Code.
6. Högerklicka på `index.html` och välj **Open with Live Server**.

Live Server behöver vara installerat i Visual Studio Code för att använda detta alternativ.

## Så använder du EventBook

1. Använd menyn högst upp på sidan för att navigera.
2. Följ instruktionerna som visas på sidan.
3. Välj en ledig tid i schemat.
4. Ange ditt namn för att boka tiden.
5. Läs bekräftelsen som visas efter bokningen.

En bokad tid markeras som upptagen och kan inte bokas igen. Bokningarna sparas i webbläsarens localStorage och finns kvar när sidan laddas om.

## Agil reflektion

### Arbetsfördelning

Gruppen har arbetat tillsammans med att planera och utveckla EventBook. Arbetet har delats upp i mindre uppgifter för att göra utvecklingen tydligare och enklare att följa upp.

### Prioriteringar

Vi prioriterade de viktigaste funktionerna först:

- Visa lediga och bokade tider.
- Boka en tid med namn.
- Visa en bekräftelse efter bokningen.
- Förhindra dubbelbokningar.
- Spara bokningar med localStorage.

Därefter arbetade vi med design, responsivitet och tillgänglighet.

### Utmaningar och lösningar

En viktig del av projektet var att se till att bokningarna sparas korrekt och finns kvar efter att sidan laddas om. Vi använder localStorage för att lagra bokningarna och läsa in dem när sidan startar.

## AI-användning

AI användes flertalet gånger under utvecklingen av sidan, allt för att förstå strukturen och hur vi skulle få ihop de olika skripten. De skript vi gjort är alltså inte kopierade rakt av. AI är använt som et verktyg.
