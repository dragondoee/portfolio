"use strict"


const projets = document.querySelectorAll(".projet-div")
const popup = document.querySelector(".popup")
const fermer = document.querySelector(".fermer")
const content = document.querySelector(".content-popup")

fetch('projets/projet.json').then(function (response) {
    response.json().then(function (data) {

        function popupProjet(dataProjet){
            let technologiesHTML = dataProjet.technologies.map(tech => `<p class="dev-lang">${tech}</p>`).join('');

            content.innerHTML = `
                <h2>${dataProjet.title}</h2>
                <div class="popup-bandeau">
                    <p class="tag">${dataProjet.end_date}</p>
                    <p class="tag">${dataProjet.team_size}</p>
                    <p class="tag">${dataProjet.type}</p>
                    ${technologiesHTML}
                </div>
                <div class="detail">
                    <img class="img-album" src="${dataProjet.image}" alt="">
                    <p>${dataProjet.description}</p>
                </div>
                <a href="${dataProjet.link}" class="button-style small-button center-elem" target="_blank"> Voir le site <a>
            `
        }
         
        
        projets.forEach(function (projet, index) {
            projet.addEventListener("click", function () {
                const dataProjet = data[index]
                popupProjet(dataProjet)
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
