//etablera variablar
const root = document.documentElement;
let count;
let i;
count = 0;
i = 0;

colors_names = [ //namnen på färgerna så vi kan pulla dem
    "--bg-color", 
    "--primary-color", 
    "--light-bg-color",
    "--acent-color", 
    "--second-color", 
    "--head-text-color", 
    "--text-color"
];

colors_light = { //vanliga/light färg pallet
    "--bg-color": "#f0dccb", 
    "--primary-color": "#f08080",
    "--light-bg-color": "#cbb7a6",
    "--second-color": "#87ecb5", 
    "--acent-color": "#27a9b0",
    "--head-text-color": "#dbe6e6",
    "--text-color": "#0a0908" 
};

colors_dark = { //dark_mode färg pallet
    "--bg-color": "#48413cff",
    "--primary-color": "#ce8e56ff",
    "--light-bg-color": "#615346ff",
    "--second-color": "#1d864c",
    "--acent-color": "#4fd2d8",
    "--head-text-color": "#0e3d3d",
    "--text-color": "#f6f5f4"
};

function dark_mode() {
    count = count + 1; //öka count när knappen trycks för att ändra läge
    for (i in colors_names) { //om det är ett udda numer dvs dark_mode
        if (count % 2) { // när count var:en är ojämn
            root.style.setProperty(colors_names[i], colors_dark[colors_names[i]]); //bytter ut desegnerade colorn i style.css till dark versionen
            document.getElementById("jag-bild").src = "PXL_20250828_093704457 black and white.jpg"; // byter till svartvit jag bild
        }
        else {
            root.style.setProperty(colors_names[i], colors_light[colors_names[i]]); //gör samma sak fast tillbacka till ljust
            document.getElementById("jag-bild").src = ("PXL_20250828_093704457.jpg"); //bytter till vanlig bild
        }
    }
}