window.addEventListener("load", () => {
    placeBlobRandom();

    window.setTimeout(() => {
        // show the user the page
        document.getElementById("load_cover").style.display = "none";
        
        // place the user at the top of the screen
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
    }, 1)
});
window.addEventListener("resize", placeBlobRandomInViewport);
window.setInterval(placeBlobRandom, 5000)

function placeBlobRandom() {

    let screenWidth = document.documentElement.scrollWidth;
    let screenHeight = document.documentElement.scrollHeight;
    let backgroundColorBlob = document.getElementsByClassName("background_colorblob"); 
    for (let element = 0; element < backgroundColorBlob.length; element++) {
        let elementBlob = backgroundColorBlob[element];
        let elementWidth = elementBlob.offsetWidth;
        let elementHeight = elementBlob.offsetHeight;
        let randomX = Math.random();
        let randomY = Math.random();
        
        let xPositionPx = randomX * (screenWidth - elementWidth);
        let yPositionPx = randomY * (screenHeight - elementHeight);

        elementBlob.style.left = xPositionPx + "px";
        elementBlob.style.top = yPositionPx + "px";
    };
};

function placeBlobRandomInViewport() {
    let screenWidth = document.documentElement.clientWidth;
    let screenHeight = document.documentElement.clientHeight;
    let backgroundColorBlob = document.getElementsByClassName("background_colorblob"); 
    for (let element = 0; element < backgroundColorBlob.length; element++) {
        let elementBlob = backgroundColorBlob[element];
        let elementWidth = elementBlob.offsetWidth;
        let elementHeight = elementBlob.offsetHeight;
        let randomX = Math.random();
        let randomY = Math.random();
        
        let xPositionPx = randomX * (screenWidth - elementWidth);
        let yPositionPx = randomY * (screenHeight - elementHeight);

        elementBlob.style.left = xPositionPx + "px";
        elementBlob.style.top = yPositionPx + "px";

    };
};