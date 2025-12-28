// scroll the header if it can be scrolled to the right place
window.addEventListener("DOMContentLoaded", () => {
    // make so you cant scroll on y when loading page, unrelated to the tab scroll
    document.body.style.overflow = "hidden";

    // scroll the header to the currant tab
    const scrollHeaderPosition = document.querySelector(".currant_tab");
    if (scrollHeaderPosition) {
        scrollHeaderPosition.scrollIntoView({inline: "center"});
    };
});