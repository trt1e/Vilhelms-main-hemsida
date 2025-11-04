window.setInterval(updatePlayerPosition, 10); // update the players position every 10ms

const windowWidth = window.screen.availWidth;
const windowHeight = window.screen.availHeight;
let xMomentum;
let yMomentum;
xMomentum = 0;
yMomentum = 0;
const movmentChange = 0.8 // how much movement is added on keypress
const keyState = { // create a list keeping track of if the keys are pressed down or not
  w: false,
  a: false,
  s: false,
  d: false,
};

window.addEventListener("keydown", handleKeyDown);
window.addEventListener("keyup", handleKeyUp);

function handleKeyDown(event) { // update the list to see if any key is pressed down
    if (event.key === "w") {
        keyState.w = true;
    };
    if (event.key === "a") {
        keyState.a = true;
    };
    if (event.key === "s") {
        keyState.s = true;
    };
    if (event.key === "d") {
        keyState.d = true;
    };
};

function handleKeyUp(event) { // update the list to see if any key is no longer pressed down
    if (event.key === "w") {
        keyState.w = false;
    };
    if (event.key === "a") {
        keyState.a = false;
    };
    if (event.key === "s") {
        keyState.s = false;
    };
    if (event.key === "d") {
        keyState.d = false;
    };
};

function updatePlayerPosition() {
    // add the momentum correctly based on what keys are pressed down
    if (keyState.w) {
        yMomentum = yMomentum - movmentChange
    };
    if (keyState.s) {
        yMomentum = yMomentum + movmentChange
    };
    if (keyState.a) {
        xMomentum = xMomentum - movmentChange
    };
    if (keyState.d) {
        xMomentum = xMomentum + movmentChange
    };

    // uppdate the upp/down and left/right position based on the new momentum
    let mainPlayerObject = document.getElementById("main_player_object");
    let mainPlayerObjectStyle = window.getComputedStyle(mainPlayerObject);
    let leftValue = mainPlayerObjectStyle.getPropertyValue("left").replace("px", "");
    let topValue = mainPlayerObjectStyle.getPropertyValue("top").replace("px", "");
    let moveX = Number(leftValue) + xMomentum;
    let moveY = Number(topValue) + yMomentum;
    
    if (!((moveX + mainPlayerObject.clientWidth) > windowWidth || moveX < 0 || (moveY + mainPlayerObject.clientHeight) > windowHeight || moveY < 0)) {
        mainPlayerObject.style.left = moveX + "px";
        mainPlayerObject.style.top = moveY + "px";

        // add a bit of drag
        xMomentum = xMomentum * 0.9;
        yMomentum = yMomentum * 0.9;
    }
    else {
        xMomentum = 0
        yMomentum = 0
    }

    
};