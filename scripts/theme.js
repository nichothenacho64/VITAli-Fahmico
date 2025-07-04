const themes = {
    earlyModern: "early-modern.css",
    twentiethCenturyFirstHalf: "twentieth-century-1.css",
    twentiethCenturySecondHalf: "twentieth-century-2.css",
    futuristic: "futuristic.css"
};

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "futuristic";
    console.log(`Theme reloaded: ${savedTheme}`)
    setTheme(savedTheme);
});

function setTheme(themeName) {
    const themeLink = document.getElementById("theme-link");
    console.log(themeName)
    console.log(themes[themeName])

    if (themes[themeName]) {
        themePath = stylesheetsDirectory + "/" + themes[themeName];
        themeLink.href = themePath;
        localStorage.setItem("theme", themeName); // change the theme, store the name not the path!!!
    } else {
        console.warn(`Theme "${themeName}" does not exist.`);
    }
}