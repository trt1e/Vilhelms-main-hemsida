const baseLightSpot = convertRemToPixels(0.5) + convertRemToPixels(9 + 9 + 9 + 9 - 0.2 + 0.8) + 2; // in px
const mainOrganizingElement = document.getElementById("main_organizing_large_container")

window.onload = function() {
    currentTheme = localStorage.getItem("data-theme");
    if (currentTheme === "dark") {
        move_selector_dark();
    } else {
        move_selector_light();
    };
    update_giscus();
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

    update_giscus();

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

    update_giscus();

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

function update_giscus() {
    const iframe = document.querySelector('.giscus-frame');
    if (iframe) {
        const current_mode = document.documentElement.getAttribute("data-theme");
        if (current_mode == "dark") {
            const css_url = "https://vgsites.se/css/giscus_colors.css";
        } else {
            const css_url = "https://vgsites.se/css/giscus_colors.css";
        };
        iframe.contentWindow.postMessage( 
            { giscus: { setConfig: { theme: css_url } } }, 
            'https://giscus.app' 
        );
        console.log("Giscus theme change: " + css_url);
    } else {
        return;
    };
};