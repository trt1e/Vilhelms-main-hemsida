const baseLightSpot = convertRemToPixels(0.5) + convertRemToPixels(9 + 9 + 9 + 9 - 0.2 + 0.8) + 2; // in px

window.onload = function() {
    currentTheme = localStorage.getItem("color-theme");
    if (currentTheme === "dark") {
        move_selector_dark();
    } else {
        move_selector_light();
    };
};

function switch_light() {
    move_selector_light();
    document.documentElement.setAttribute("color-theme", "light");
    localStorage.setItem("color-theme", "light");

    // set the UI of the browser and the device (in some cases) to the right color
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    themeMeta.setAttribute("content", "#ffffffff");
};

function move_selector_light() {
    let sliderUiObject = document.getElementById("header_UI_switch_selector");
    
    sliderUiObject.style.left = baseLightSpot + "px";
    sliderUiObject.style.top = convertRemToPixels(0.5) + "px";
};


function switch_dark() {
    move_selector_dark();
    document.documentElement.setAttribute("color-theme", "dark");
    localStorage.setItem("color-theme", "dark");
    
    // set the UI of the browser and the device (in some cases) to the right color
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    themeMeta.setAttribute("content", "#121418");
};

function move_selector_dark() {
    let sliderUiObject = document.getElementById("header_UI_switch_selector");

    sliderUiObject.style.left = baseLightSpot + convertRemToPixels(3) + "px";
    sliderUiObject.style.top = convertRemToPixels(0.5) + "px";
};