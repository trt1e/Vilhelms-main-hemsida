// scroll the header if it can be scrolled to the right place
window.addEventListener("DOMContentLoaded", () => {
    // scroll the header to the currant tab
    const scrollHeaderPosition = document.querySelector(".currant_tab");
    if (scrollHeaderPosition) {
        scrollHeaderPosition.scrollIntoView({inline: "center"});
    };
});