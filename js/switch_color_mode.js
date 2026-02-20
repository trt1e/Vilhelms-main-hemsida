const baseLightSpot = convertRemToPixels(0.5) + convertRemToPixels(9 + 9 + 9 + 9 - 0.2 + 0.8) + 2; // in px
const mainOrganizingElement = document.getElementById("main_organizing_large_container")

window.onload = function() {
    currentTheme = localStorage.getItem("color-theme");
    if (currentTheme === "dark") {
        move_selector_dark();
    } else {
        move_selector_light();
    };
};

function switch_light() {
    mainOrganizingElement.add("resize-animation-stopper");

    move_selector_light();
    document.documentElement.setAttribute("color-theme", "light");
    localStorage.setItem("color-theme", "light");

    // set the UI of the browser and the device (in some cases) to the right color
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) {
        themeMeta.setAttribute("content", "#E5E5E7");
    };

    clearTimeout(resizeTimer);
    resizeTimer = setTimeout( () => {
        mainOrganizingElement.remove("resize-animation-stopper");
    }, 400);
};

function move_selector_light() {
    let sliderUiObject = document.getElementById("header_UI_switch_selector");
    
    sliderUiObject.style.left = baseLightSpot + "px";
    sliderUiObject.style.top = convertRemToPixels(0.5) + "px";
};


function switch_dark() {
    mainOrganizingElement.add("resize-animation-stopper");

    move_selector_dark();
    document.documentElement.setAttribute("color-theme", "dark");
    localStorage.setItem("color-theme", "dark");
    
    // set the UI of the browser and the device (in some cases) to the right color
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) {
        themeMeta.setAttribute("content", "#121418");
    };

    clearTimeout(resizeTimer);
    resizeTimer = setTimeout( () => {
        mainOrganizingElement.remove("resize-animation-stopper");
    }, 400);
};

function move_selector_dark() {
    let sliderUiObject = document.getElementById("header_UI_switch_selector");

    sliderUiObject.style.left = baseLightSpot + convertRemToPixels(3) + "px";
    sliderUiObject.style.top = convertRemToPixels(0.5) + "px";
};