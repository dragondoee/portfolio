"use strict"


const projets = document.querySelectorAll(".projet-div")
const popup = document.querySelector(".popup")
const fermer = document.querySelector(".fermer")
const content = document.querySelector(".content-popup")




projets.forEach(function (projet) {
    projet.addEventListener("click", function () { 
        popup.style.display="block"
    });
});

popup.addEventListener("click", function () { 
    popup.style.display="none"
});