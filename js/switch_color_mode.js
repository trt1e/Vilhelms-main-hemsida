const baseLightSpot = convertRemToPixels(0.5) + convertRemToPixels(9 + 9 + 9 + 9 - 0.2 + 0.8) + 2; // in px
const mainOrganizingElement = document.getElementById("main_organizing_large_container")

window.onload = function() {
    currentTheme = localStorage.getItem("data-theme");
    if (currentTheme === "dark") {
        move_selector_dark();
    } else {
        move_selector_light();
    };
};

function switch_light() {
    if (mainOrganizingElement) { 
        mainOrganizingElement.classList.add("resize-animation-stopper");
    };

    move_selector_light();
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("data-theme", "light");

    // set the UI of the browser and the device (in some cases) to the right color
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) {
        themeMeta.setAttribute("content", "#E5E5E7");
    };

    if (mainOrganizingElement) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout( () => {
            mainOrganizingElement.classList.remove("resize-animation-stopper");
        }, 400);
    };
};

function move_selector_light() {
    let sliderUiObject = document.getElementById("header_UI_switch_selector");
    
    sliderUiObject.style.left = baseLightSpot + "px";
    sliderUiObject.style.top = convertRemToPixels(0.5) + "px";
};


function switch_dark() {
    if (mainOrganizingElement) {
        mainOrganizingElement.classList.add("resize-animation-stopper");
    };

    move_selector_dark();
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("data-theme", "dark");
    
    // set the UI of the browser and the device (in some cases) to the right color
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) {
        themeMeta.setAttribute("content", "#121418");
    };

    if (mainOrganizingElement) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout( () => {
            mainOrganizingElement.classList.remove("resize-animation-stopper");
        }, 400);
    };
};

function move_selector_dark() {
    let sliderUiObject = document.getElementById("header_UI_switch_selector");

    sliderUiObject.style.left = baseLightSpot + convertRemToPixels(3) + "px";
    sliderUiObject.style.top = convertRemToPixels(0.5) + "px";
};