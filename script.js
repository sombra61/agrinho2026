const imagens = [
    "topico1.png",
    "topico2.png",
    "topico3.png"
];

document.querySelectorAll(".card").forEach(card => {

    let indice = -1;

    card.addEventListener("click", () => {

        const img = card.querySelector(".verso img");

        if(indice === -1){

            indice = 0;
            img.src = imagens[indice];

            card.classList.add("virado");

            return;
        }

        indice++;

        if(indice < imagens.length){

            img.src = imagens[indice];

        }else{

            indice = -1;

            card.classList.remove("virado");
        }

    });

});