let currentTheme = localStorage.getItem("data-theme");

if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
} else {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("data-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("data-theme", "light");
    };
};