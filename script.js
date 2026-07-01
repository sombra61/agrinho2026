const imagens = [
    "topico1.png",
    "topico2.png",
    "topico3.png"
];

document.querySelectorAll(".card").forEach(card => {

    let indice = -1;

    card.addEventListener("click", () => {

        const img = card.querySelector(".verso img");

        if (indice === -1) {

            indice = 0;
            img.src = imagens[indice];
            card.classList.add("virado");
            return;

        }

        indice++;

        if (indice < imagens.length) {

            img.src = imagens[indice];

        } else {

            indice = -1;
            card.classList.remove("virado");

        }

    });

});

const tooltip = document.createElement("div");
tooltip.className = "tooltip";
document.body.appendChild(tooltip);

document.querySelectorAll(".links a").forEach(link => {

    link.addEventListener("mousemove", e => {

    const margem = 20;

    let x = e.clientX + margem;
    let y = e.clientY + margem;

    const largura = tooltip.offsetWidth;
    const altura = tooltip.offsetHeight;

    if (x + largura > window.innerWidth) {
        x = e.clientX - largura - margem;
    }

    if (y + altura > window.innerHeight) {
        y = e.clientY - altura - margem;
    }

    if (x < margem) x = margem;
    if (y < margem) y = margem;

    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;

});
    link.addEventListener("mousemove", e => {
        tooltip.style.left = `${e.pageX + 15}px`;
        tooltip.style.top = `${e.pageY + 15}px`;
    });

    link.addEventListener("mouseleave", () => {
        tooltip.classList.remove("mostrar");
    });

});