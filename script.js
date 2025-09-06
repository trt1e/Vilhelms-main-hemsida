Östra_Löken_utgåvor = [
    "./östra_löken_pdf/Östra Löken upplaga 1.pdf#toolbar=0",
    "./östra_löken_pdf/Östra Löken upplaga 2.pdf#toolbar=0",
    "./östra_löken_pdf/Östra Löken upplaga 3.pdf#toolbar=0",
    "./östra_löken_pdf/Östra Löken upplaga 4.pdf#toolbar=0",
    "./östra_löken_pdf/Östra Löken upplaga 5.pdf#toolbar=0",
    "./östra_löken_pdf/Östra Löken upplaga 6.pdf#toolbar=0",
    "./östra_löken_pdf/Östra Löken upplaga 7.pdf#toolbar=0"
]; // sätter upp så vi kan pulla destinationerna på PDF:erna
Östra_Löken_utgåvor_namn = [
    "Östra Löken upplaga 1",
    "Östra Löken upplaga 2",
    "Östra Löken upplaga 3",
    "Östra Löken upplaga 4",
    "Östra Löken upplaga 5",
    "Östra Löken upplaga 6",
    "Östra Löken upplaga 7"
]; // Här sätter vi upp namnen så att de kan sättas under PDF:en
let mängdÖstraLöken;
mängdÖstraLöken = Östra_Löken_utgåvor.length;
let Östra_Löken_Ticker;
Östra_Löken_Ticker = (mängdÖstraLöken - 1); 

/*alert("test")*/

//gör så man kan bytta vilken ÖL man lässer
function Östra_Löken_Right_Button_Down() {
    Östra_Löken_Ticker = Östra_Löken_Ticker + 1; // öka countern

    if (Östra_Löken_Ticker > (mängdÖstraLöken - 1)) { // vi ser till att om vi är på högsta tickern (högsta upplagan av Löken) så går vi till första
        Östra_Löken_Ticker = 0;
    }

    document.getElementById("Östra_Löken_Titel_Inehål").innerHTML = Östra_Löken_utgåvor_namn[Östra_Löken_Ticker]; //uppdatera titeln
    document.getElementById("Östra_Löken_Artikel_PDF").src = Östra_Löken_utgåvor[Östra_Löken_Ticker];
};
function Östra_Löken_Left_Button_Down() { //här gör vi samma sak bara åt andra hållet
    Östra_Löken_Ticker = Östra_Löken_Ticker - 1;

    if (Östra_Löken_Ticker < 0) { // vi ser till att om vi går under 0 återvänder vi till högsta
        Östra_Löken_Ticker = (mängdÖstraLöken - 1);
    }

    document.getElementById("Östra_Löken_Titel_Inehål").innerHTML = Östra_Löken_utgåvor_namn[Östra_Löken_Ticker]; 
    document.getElementById("Östra_Löken_Artikel_PDF").src = Östra_Löken_utgåvor[Östra_Löken_Ticker];
};