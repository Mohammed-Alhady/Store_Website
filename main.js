let menuBar = document.querySelector(".menu-icon");
let linksHolder = document.querySelector(".links");

// menuBar.addEventListener("onclick", printOnConsole());

if (window.innerWidth > 768) {
    linksHolder.style.display === "block"
}

menuBar.onclick = function () {
    if(window.innerWidth < 768) {
        if(linksHolder.style.display === "block") {
            linksHolder.style.display = "none";
        }else {
            linksHolder.style.display = "block";
        }
    }
};