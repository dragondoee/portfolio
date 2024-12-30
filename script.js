"use strict"


const projets = document.querySelectorAll(".projet-div")
const popup = document.querySelector(".popup")
const fermer = document.querySelector(".fermer")
const content = document.querySelector(".content-popup")

fetch('projets/projet.json').then(function (response) {
    response.json().then(function (data) {

        function popupProjet(projet){
            let technologiesHTML = projet.technologies.map(tech => `<p class="dev-lang">${tech}</p>`).join('');

            content.innerHTML = `
                <h2>${projet.title}</h2>
                <div class="popup-bandeau">
                    <p class="tag">${projet.end_date}</p>
                    <p class="tag">${projet.team_size}</p>
                    <p class="tag">${projet.type}</p>
                    ${technologiesHTML}
                </div>
                <div class="detail">
                    <img class="img-album" src="${projet.image}" alt="">
                    <p>${projet.description}</p>
                </div>
                <a href="${projet.link}" class="button-style small-button center-elem" target="_blank"> Voir le site <a>
            `
        }
            
        
        
        projets.forEach(function (projet) {
            projet.addEventListener("click", function () {
                projet = data[1]
                popupProjet(projet)
                popup.style.display = "block"             
            });
        });
        

        fermer.addEventListener("click", function () {
            popup.style.display = "none";
        });
        
        popup.addEventListener("click", function (e) {
            if (!content.contains(e.target)) {
                popup.style.display = "none";
            }
        });


    });
});
