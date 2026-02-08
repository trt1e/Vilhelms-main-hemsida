const pdfContent = document.getElementById("main_pdf");
const pdfNumber = document.getElementById("pdf_upplaga_number");
const amoutPDfs = 26; // Change this when adding new upplagor
let counter = amoutPDfs;

window.addEventListener("load", () => {
    PDFHandle();
});

function previousPDF() {
    counter -= 1;
    if (counter < 1) {
        counter = amoutPDfs;
    };
    PDFHandle();
};

function nextPDF() {
    counter += 1;
    if (counter > amoutPDfs) {
        counter = 1;
    };
    PDFHandle();
};

function PDFHandle() {
    console.log(pdfContent);
    console.log(counter);
    pdfNumber.innerText = `Upplaga ${counter} / ${amoutPDfs}`;
    pdfContent.src = `./pdfs/Östra_Löken_upplaga_${counter}.pdf`;
}