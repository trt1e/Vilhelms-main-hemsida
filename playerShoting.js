const wholeText = " \
Vad är HTML? \
\
HTML står för Hypertext Markup Language och är kodspråket som används för att strukturera upp innehåll på en webbsida. \
Med HTML-taggar markerar man vad som är rubrik, stycketext, underrubrik etc på sin webbsida. De används också för att lägga in bilder och skapa länkar. \
HTML anger inte hur saker och ting på sidan ska se ut (färger, stil på text osv). För att ange utseendet på sidan använder man istället CSS-kod. \
Den senaste versionen av HTML är HTML5. För att kunna använda de nya funktionerna i HTML5 och de senaste CSS-funktionerna krävs uppdaterad webbläsare. \
\
Allmänt om html-taggar \
HTML-taggar används för att markera upp olika delar av ett dokument. \
HTML-taggar används (oftast) i par. En starttagg och en sluttagg. \
Ett HTML-dokument är indelat i två huvuddelar: huvudet (head) och kroppen (body). \
\
Attribut \
Till vissa taggar behöver man skriva in lite mer information, t.ex. vart en länk ska gå eller en beskrivning av vad en bild föreställer. Detta tillägg kallas attribut. \
HTML grundar sig på kodspråket SGML - Standard Generalized Markup Language som utvecklades av IBM i slutet av 60-talet. Det användes som en standard för digitala dokument. \
\
HTML som vi känner till i dag skapades av Tim Berners-Lee 1991 och innehöll då 18 olika taggar. HTML5 har idag 107 olika taggar. \
";
const listOfWords = wholeText.trim().split(/\s+/).filter(wholeText => wholeText.length > 0);
const listOfWordsLength = listOfWords.length;
const widthWindow = window.screen.availWidth;
const heightWindow = window.screen.availHeight;
let listOfWordsInMovment = [];
let listOfWordsSoonToDie = []
const speedWordsTravle = 4; // how fast the word/bullets shoot
let currantWord = -1;
let idTicker = 0;

window.setInterval(updateShootingTextPosition, 10);
window.addEventListener("click", shootWord);

function shootWord(event) {
    // get the right word
    currantWord = currantWord + 1
    if (currantWord === listOfWords.length - 1) {
        currantWord = 0
    }
    let word = listOfWords[currantWord]
    let wordElement = document.createElement('span'); 
    const wordId = "shooting_word_" + idTicker
    wordElement.textContent = word;
    wordElement.id = wordId; 
    document.body.appendChild(wordElement);


    // get the mouse x and y
    let mouseX = event.clientX;
    let mouseY = event.clientY;

    // get the player x and y
    let mainPlayerObject = document.getElementById("main_player_object");
    let mainPlayerObjectStyle = window.getComputedStyle(mainPlayerObject);
    let playerX = mainPlayerObjectStyle.getPropertyValue("left").replace("px", "");
    let playerY = mainPlayerObjectStyle.getPropertyValue("top").replace("px", "");

    // set the position correct
    let elementToTransform = document.getElementById("shooting_word_" + idTicker);
    elementToTransform.style.zIndex = -1 // so it is behind the player
    elementToTransform.style.position = "absolute";
    elementToTransform.style.left = "calc(" + playerX + "px + 3rem)";
    elementToTransform.style.top = "calc(" + playerY + "px + 4rem)";

    // get the new centerd cordinets
    let elementToCenterRect = elementToTransform.getBoundingClientRect();
    let centerdPlayerX = elementToCenterRect.x
    let centerdPlayerY = elementToCenterRect.y

    // get the diferance of the two
    let differenceX = centerdPlayerX - mouseX;
    let differenceY = centerdPlayerY - mouseY;

    // calculate the angle
    let atanAngle = Math.atan2(differenceY, differenceX); 
    let angle = atanAngle * (180 / Math.PI); // we convert the angle into deg
    elementToTransform.style.transform = "rotate(" + angle + "deg)"; // rotate the object

    // save the position of the element
    let elementToSaveRect = elementToTransform.getBoundingClientRect();
    let elementX = elementToSaveRect.x;
    let elementY = elementToSaveRect.y;

    // add all the elements to the variabel
    let newWordBullet = {
        x: elementX,
        y: elementY,
        dir: atanAngle,
        id: wordId,
        ticker: 0,
        hasHit: false, // this is for the enemy to know if we alredy have taken damage from this bullet
    };
    // push the variabel to the list
    listOfWordsInMovment.push(newWordBullet);

    // update ticker
    idTicker = idTicker + 1;
};

function updateShootingTextPosition() {
    for (let wordNumber = 0; wordNumber < listOfWordsInMovment.length; wordNumber++) {
        // initialize wordBullet
        wordBullet = listOfWordsInMovment[wordNumber]
        let elementToMove = document.getElementById(wordBullet.id);
        if (!elementToMove) {
            // if element does not exist, remove it and reduce wordNumber
            listOfWordsInMovment.splice(wordNumber, 1);
            listOfWordsSoonToDie.splice(wordNumber, 1);
            wordNumber--; // reduce wordNumber
            continue; // go to next iteration
        }

        // get the angle
        let newAngle = wordBullet.dir;

        // get the x and y vectors based on the desierd movment
        let moveX = Math.cos(newAngle) * speedWordsTravle * -1; // times -1 to invert
        let moveY = Math.sin(newAngle) * speedWordsTravle * -1;
        let newX = wordBullet.x + moveX
        let newY = wordBullet.y + moveY
        
        // move the element
        elementToMove.style.left = newX + "px";
        elementToMove.style.top = newY + "px";

        // save the position of the element
        wordBullet.x = newX;
        wordBullet.y = newY;
        
        // add a countdown of doom until the element is deleted, initiated once tuching one of the edges of the screen
        let hasHitEdge = newX > widthWindow || newX < 0 || newY > heightWindow || newY < 0;
        if (hasHitEdge) {
            if (!listOfWordsSoonToDie.includes(wordNumber)) {
                listOfWordsSoonToDie.push(wordNumber);
            };
        };
        // if the bullet has been alive for more than 6 seconds or has tuched the edge of the screen within 1 seconds
        if (wordBullet.ticker > 500 || listOfWordsSoonToDie > 100) {
            let childId = document.getElementById(wordBullet.id);
            document.body.removeChild(childId);
            listOfWordsInMovment.splice(wordNumber, 1);
        };
        
        wordBullet.ticker = wordBullet.ticker + 1
        listOfWordsSoonToDie[wordNumber] = listOfWordsSoonToDie[wordNumber] + 1;
    };
};