let mouseX = 0;
let mouseY = 0;

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("bg_canvas");
    const ctx = canvas.getContext("2d");

    document.getElementById("main_canvas").width = window.innerWidth;
    document.getElementById("main_canvas").height = window.innerHeight;
});