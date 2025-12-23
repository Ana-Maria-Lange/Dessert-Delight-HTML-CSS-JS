/* Controle do menu mobile */
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let iconImg = document.querySelector('.icon');
    
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        iconImg.src = "img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        iconImg.src = "img/close_white_36dp.svg";
    }
}

/* Lógica da barra de pesquisa e funções de página */
document.addEventListener("DOMContentLoaded", () => {
    
    // Filtro do Cardápio
    const searchInput = document.getElementById("searchInput");
    const cards = document.querySelectorAll(".card");

    if (searchInput) {
        searchInput.addEventListener("input", () => {
            const query = searchInput.value.toLowerCase().trim();

            cards.forEach((card) => {
                // Procura o nome dentro do h5 de cada card
                const h5 = card.querySelector('h5');
                const itemName = h5 ? h5.innerText.toLowerCase() : "";

                if (itemName.includes(query)) {
                    card.style.display = "flex"; // Alinhado com o CSS
                } else {
                    card.style.display = "none";
                }
            });
        });
    }

   
});