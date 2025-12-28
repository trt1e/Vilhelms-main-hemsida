window.addEventListener("DOMContentLoaded", set_bg_to_fg_size);
window.addEventListener("resize", set_bg_to_fg_size);

function set_bg_to_fg_size() {
    const bgElement = document.getElementsByClassName("glass_background");
    const fgElement = document.getElementsByClassName("glass_foreground");
    const bodyFiller = document.getElementById("body_filler");
    let listOfLengths = [];

    for (let i = 0; i < bgElement.length; i++) {
        if (bgElement[i] && fgElement[i]) {
            let padding = 0;
            if (fgElement[i].classList.contains("glass_0.5rem_padding")) {
                padding = 0.5; // 0.5 rem
            };
            if (fgElement[i].classList.contains("glass_4rem_padding")) {
                padding = 4; // 4 rem
            };
            bgElement[i].style.height =  "calc(" + fgElement[i].offsetHeight + "px - " + padding + "rem)";
            bodyFiller.style.height = "calc(" + fgElement[i].offsetHeight + "px - " + padding + "rem + 11rem)"; // this is done so we can get the height in px so we can compare them and get the largest height
            listOfLengths.push(bodyFiller.offsetHeight);
        };
    };
    bodyFiller.style.height = Math.max.apply(null, listOfLengths) + "px";
};