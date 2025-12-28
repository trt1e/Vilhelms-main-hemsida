let currentTheme = localStorage.getItem("color-theme");

if (currentTheme) {
    document.documentElement.setAttribute("color-theme", currentTheme);
} else {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.body.style.backgroundColor = "red";
        document.documentElement.setAttribute("color-theme", "dark");
        localStorage.setItem("color-theme", "dark");
    } else {
        document.body.style.backgroundColor = "red";
        document.documentElement.setAttribute("color-theme", "light");
        localStorage.setItem("color-theme", "light");
    };
};