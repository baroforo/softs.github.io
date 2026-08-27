/* ================================
   SEARCH
================================ */

const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".soft-card");
const noResults = document.getElementById("noResults");

if (searchInput) {
    searchInput.addEventListener("input", function () {
        const query = this.value.trim().toLowerCase();
        let visibleCards = 0;

        cards.forEach(card => {
            const name = (card.dataset.name || "").toLowerCase();
            const text = card.textContent.toLowerCase();
            const matches = query === "" || name.includes(query) || text.includes(query);

            card.style.display = matches ? "flex" : "none";

            if (matches) {
                visibleCards++;
            }
        });

        if (noResults) {
            noResults.style.display = visibleCards === 0 ? "block" : "none";
        }
    });
}

/* ================================
   CART MESSAGE & SOFTWARE CARDS
================================ */

const cartButton = document.getElementById("cartButton");
const cartMessage = document.getElementById("cartMessage");
let messageTimeout;

function showMessage(message) {
    if (!cartMessage) return;

    cartMessage.textContent = message;
    cartMessage.classList.add("show");

    clearTimeout(messageTimeout);
    messageTimeout = setTimeout(() => {
        cartMessage.classList.remove("show");
    }, 2500);
}

if (cartButton) {
    cartButton.addEventListener("click", () => {
        showMessage("Your cart is currently empty.");
    });
}

cards.forEach(card => {
    card.addEventListener("click", () => {
        const name = card.dataset.name || "Item";
        showMessage(`${name} selected. Download options coming soon.`);
    });
});