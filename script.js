"use strict"


const projets = document.querySelectorAll(".projet-div")
const popup = document.querySelector(".popup")
const fermer = document.querySelector(".fermer")
const content = document.querySelector(".content-popup")

fetch('projets/projet.json').then(function (response) {
    response.json().then(function (data) {

        function popupProjet(){
            content.innerHTML = `
                <h2>${data[0].title}</h2>
                <div class="popup-bandeau">
                    <p>${data[0].end_date}</p>
                    <p>${data[0].team_size}</p>
                    <p>${data[0].type}</p>
                </div>
                <div class="detail">
                    <img class="img-album" src="${data[0].image}" alt="">
                    <p>${data[0].description}</p>
                </div>
                <a href="${data[0].link}" class="button-style small-button center-elem" target="_blank"> Voir le site <a>
            `
        }
            
        
        
        
        
        projets.forEach(function (projet) {
            projet.addEventListener("click", function () {
                popupProjet()
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
