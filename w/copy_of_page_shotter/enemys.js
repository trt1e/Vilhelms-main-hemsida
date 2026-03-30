/*
Att göra här:

[x] ta en random bild från lista
[x] skapa ett child och lägg bilden i den
[x] gör så att den rör på sig mot spelaren
[x] gör så att de spawnas slumpmässigt i utkanten av skärmen
[x] gör så att de har HP och förlorar det när de nuddas av kullor
    - gör så de dör när de har mindre än 1 hp   
[x] gör så att spelaren dör om den nuddar 3 st
    - fienden ska också dö om spelaren nuddas
[x] gör en score
[] gör en helth bar som är "Webbutveckling - Vad är HTML?"
*/
const baseDir = "./Content/";
const imgsToInhairit = [
    "ASM.png",
    "bf.png",
    "c.png",
    "c_sharp.png",
    "c++.png",
    "dart.png",
    "go.png",
    "holy_c.png",
    "java.png",
    "kotlin.png",
    "lua.png",
    "matlab.png",
    "OBJ_c.png",
    "perl.png",
    "PHP.png",
    "python.png",
    "r.png",
    "ruby.png",
    "rust.png",
    "scratch.png",
    "shell.png",
    "SQL.png",
    "swift.png",
    "typescript.png",
];
imagesInMovment = [];
enemysThatKilledThePlayer = [];
idTicker = 0;
let counterTicker = 0;
let enemysTicker = 0;
let scoreTicker = 0;
let gameHasEnded = false;
const enemySpeed = 1.5;

// delay between spawn (in seconds)
let spawnDelay = 2.3 * 100;

// the players helth
let playerHp = 4;
let playerHit = false;

// make sure you only get damaged once on impact and then not again until it isnt tuching anymore
let loseHealth = false;

window.setInterval(moveImages, 10);

function endGame() {
    if (!gameHasEnded) {
        alert("YOU ARE DEAD! YOUR SCORE WAS: " + scoreTicker + "! These programing languages are now officialy better than HTML5:" + enemysThatKilledThePlayer);
        window.location.reload();
        gameHasEnded = true;
    };
};

function updateScore() {
    scoreTicker = scoreTicker + 1;
    document.getElementById("scoreer").innerHTML = "SCORE: " + scoreTicker;
}

function loadNewImage(dir, x, y) {
    let imageId = "image_in_movement_" + idTicker;
    let imageElement = document.createElement('img'); 
    imageElement.id = imageId; 
    imageElement.src = baseDir + dir;
    imageElement.draggable = false;
    imageElement.style = "width: 7rem; height: 7rem; object-fit: contain; position: absolute;";
    document.body.appendChild(imageElement);

    imagePackage = {
        id: imageId,
        x: x,
        y: y,
        hp: 6,
        imageName: dir,
    };
    imagesInMovment.push(imagePackage);
    idTicker = idTicker + 1
};

function moveImages() { // move the images towords the player
    if (counterTicker === Math.round(spawnDelay)) {
        loadInRandomEnemy();
        spawnDelay = spawnDelay * 0.99;
        counterTicker = 0;
    };
    counterTicker = counterTicker + 1;
    for (let imageNumber = 0; imageNumber < imagesInMovment.length; imageNumber++) {
        let imageInfo = imagesInMovment[imageNumber];
        let imageToMove = document.getElementById(imageInfo.id);
        // let imageInfoRect = imagesInMovment.getBoundingClientRect();
        let playerInfo = document.getElementById("main_player_object");
        let playerX = playerInfo.offsetLeft;
        let playerY = playerInfo.offsetTop;
        let enemyX = imageInfo.x;
        let enemyY = imageInfo.y;
        let deltaX = playerX - enemyX;
        let deltaY = playerY - enemyY;
        // to center the targeting towords the center of the player from the center of the image
        let centerDataX = (playerInfo.clientHeight / 2) - (imageToMove.clientHeight / 2);
        let centerDataY = (playerInfo.clientWidth / 2) - (imageToMove.clientWidth / 2); 

        // calculate the angle towords the player
        let angle = Math.atan2(deltaY + centerDataX, deltaX + centerDataY);

        // calculate the vectors for the x and y
        let moveX = Math.cos(angle) * enemySpeed;
        let moveY = Math.sin(angle) * enemySpeed;

        // add the vectors to its currant position
        let finalX = moveX + enemyX;
        let finalY = moveY + enemyY;

        // move the image
        imageToMove.style.left = finalX + "px";
        imageToMove.style.top = finalY + "px";

        // save the new position
        imageInfo.x = finalX;
        imageInfo.y = finalY;

        
        // LOGIC FOR FOCKING REGESTERING AND KILLING THE PLAYER IF HIT
        /*
        x1 = player x
        y1 = player y

        x2 = player x + length player
        y2 = player y

        x3 = player x
        y3 = player y + height player

        x4 = player x + length player
        y4 = player y + height player

        */
        let x1 = finalX;
        let y1 = finalY;
        let x2 = finalX + imageToMove.clientWidth;
        let y2 = finalY;
        let x3 = finalX;
        let y3 = finalY + imageToMove.clientHeight;
        let x4 = finalX + imageToMove.clientWidth;
        let y4 = finalY + imageToMove.clientHeight;

        // detect if on of the point on the player is within the enemys boundry box
        if ((playerX < x1) && (x1 < (playerX + parseFloat(playerInfo.clientWidth))) && (playerY < y1) && (y1 < (playerY + parseFloat(playerInfo.clientHeight)))) {
            loseHealth = true;
        }
        else if ((playerX < x2) && (x2 < (playerX + parseFloat(playerInfo.clientWidth))) && (playerY < y2) && (y2 < (playerY + parseFloat(playerInfo.clientHeight)))) {
            loseHealth = true;
        }
        else if ((playerX < x3) && (x3 < (playerX + parseFloat(playerInfo.clientWidth))) && (playerY < y3) && (y3 < (playerY + parseFloat(playerInfo.clientHeight)))) {
            loseHealth = true;
        }
        else if ((playerX < x4) && (x4 < (playerX + parseFloat(playerInfo.clientWidth))) && (playerY < y4) && (y4 < (playerY + parseFloat(playerInfo.clientHeight)))) {
            loseHealth = true;
        }
        else if (playerHit) {
            playerHit = false;
        };

        if (loseHealth) {
            playerHp = playerHp - 1; // reduce the helth
            playerHit = true;
            loseHealth = false;
            // remove the enemy
            let enemyChildId = document.getElementById(imageInfo.id);
            document.body.removeChild(enemyChildId);
            imagesInMovment.splice(imageNumber, 1);
            // add the enemy that killed the player to a list to keep track of it
            enemysThatKilledThePlayer.push(" " + imageInfo.imageName.replace(".png", ""))
        };

        // update helth number
        document.getElementById("lives_counter").innerHTML = "LIVES: <b>" + playerHp + "</b>"

        // logic for the death of the player
        if (playerHp <= 0) {
            endGame()
        }

        // LOGIC FOR TAKING DAMAGE IF HIT BY WORDBULLET
        // copy some code from the shooting script to get all the projectile cordinets
        for (let wordNumber = 0; wordNumber < listOfWordsInMovment.length; wordNumber++) { // go throught every projectile
            // initialize wordBullet
            wordBullet = listOfWordsInMovment[wordNumber]

            // establish the projectiles x and y
            let projectileX = wordBullet.x;
            let projectileY = wordBullet.y;

            // establish the projectiles condition, if true: it is inside the boudry box, if false: it is not
            let colitionStatus = wordBullet.hasHit

            // check if the cordinet is within the boundry box of the enemy
            if ((finalX < projectileX) && (projectileX < (finalX + parseFloat(imageToMove.clientWidth))) && (finalY < projectileY) && (projectileY < (finalY + parseFloat(imageToMove.clientHeight)))) {
                if (!colitionStatus) {
                    imageInfo.hp = imageInfo.hp - 1;
                    colitionStatus = true; // trigger to keep track so that the bullet only dose 1 damage
                    // remove the bullet on impact
                    let childId = document.getElementById(wordBullet.id);
                    document.body.removeChild(childId);
                    listOfWordsInMovment.splice(wordNumber, 1);
                    if (imageInfo.hp <= 0) { // if hp is less than 1
                        // remove the enemy
                        let enemyChildId = document.getElementById(imageInfo.id);
                        document.body.removeChild(enemyChildId);
                        imagesInMovment.splice(imageNumber, 1);
                    };
                };
                updateScore();
            }
            if (!((finalX < projectileX) && (projectileX < (finalX + parseFloat(imageToMove.clientWidth))) && (finalY < projectileY) && (projectileY < (finalY + parseFloat(imageToMove.clientHeight))))) {
                if (colitionStatus) {
                    colitionStatus = false;
                };
            };
            // alert((finalY < projectileY) + ", " + finalY + ", " + projectileY + ", " + imageToMove.style.top + "; " + enemyY + ", " + imageNumber + ", " + listOfWordsInMovment)
            wordBullet.hasHit = colitionStatus;
        };
    };
};

function loadInRandomEnemy() {
    // get a random image
    let randomImage = imgsToInhairit[Math.floor(Math.random() * imgsToInhairit.length)];

    // get the width and height of the screen so we can put the enemy outside it
    let screenWidth =  window.screen.width;
    let screenHeight =  window.screen.height;

    // how much farther it will be placed
    const extraWidth = 50;
    const extraHeight = 50;

    // generate a random place on the other cordinet where the image will be placed
    let randomLeft = Math.floor(Math.random() * screenWidth);
    let randomTop = Math.floor(Math.random() * screenHeight);

    // get the random number
    let randomNumber = Math.random() * 100;

    if ((randomNumber < 25) && (randomNumber >= 0)) { // if the image will be placed on the top side
        loadNewImage(randomImage, randomLeft, extraHeight * -1);
    }
    else if ((randomNumber < 50) && (randomNumber >= 25)) { // if the image will be placed on the left side
        loadNewImage(randomImage, extraWidth * -1, randomTop);
    }
    else if ((randomNumber < 75) && (randomNumber >= 50)) { // if the image will be placed on the bottom side
        loadNewImage(randomImage, randomLeft, extraHeight + screenHeight);
    }
    else { // if the image will be placed on the right side
        loadNewImage(randomImage, extraWidth + screenWidth, randomTop);
    };

    // get the distance between the player and the spawned enemy
};