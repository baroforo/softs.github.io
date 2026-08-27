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

            const name =
                (card.dataset.name || "").toLowerCase();

            const text =
                card.textContent.toLowerCase();

            const matches =
                query === "" ||
                name.includes(query) ||
                text.includes(query);

            card.style.display =
                matches ? "flex" : "none";

            if (matches) {
                visibleCards++;
            }

        });

        if (noResults) {

            noResults.style.display =
                visibleCards === 0
                    ? "block"
                    : "none";

        }

    });

}


/* ================================
   MODAL
================================ */

const optionsModal =
    document.getElementById("optionsModal");

const modalTitle =
    document.getElementById("modalTitle");

const modalOptions =
    document.getElementById("modalOptions");

const closeModal =
    document.getElementById("closeModal");


/* Open modal */

function openModal(card) {

    const name =
        card.dataset.name || "Software";

    const optionsString =
        card.dataset.options || "";

    const options =
        optionsString
            .split(",")
            .map(option => option.trim())
            .filter(Boolean);


    modalTitle.textContent = name;


    modalOptions.innerHTML = "";


    options.forEach(option => {

        const button =
            document.createElement("button");

        button.type = "button";

        button.className =
            "modal-option";

        button.innerHTML = `
            <span class="modal-option-name">
                ${option}
            </span>

            <span class="modal-option-arrow">
                →
            </span>
        `;


        button.addEventListener("click", function (event) {

            event.stopPropagation();

            addToCart(name, option);

            closeOptionsModal();

        });


        modalOptions.appendChild(button);

    });


    optionsModal.classList.add("show");

    optionsModal.setAttribute(
        "aria-hidden",
        "false"
    );

}


/* Close modal */

function closeOptionsModal() {

    optionsModal.classList.remove("show");

    optionsModal.setAttribute(
        "aria-hidden",
        "true"
    );

}


/* Close button */

if (closeModal) {

    closeModal.addEventListener(
        "click",
        closeOptionsModal
    );

}


/* Click outside modal */

if (optionsModal) {

    optionsModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target === optionsModal
            ) {
                closeOptionsModal();
            }

        }
    );

}


/* Escape key */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            optionsModal.classList.contains("show")
        ) {

            closeOptionsModal();

        }

    }
);


/* ================================
   CARD CLICK
================================ */

/*
   IMPORTANT:

   The entire card is clickable.

   We do NOT add a click event only
   to the "Click for options" text.

   Clicking anywhere inside the card
   opens the options window.
*/

cards.forEach(card => {

    card.addEventListener(
        "click",
        function () {

            openModal(card);

        }
    );

});


/* ================================
   CART
================================ */

const cartButton =
    document.getElementById("cartButton");

const cartMessage =
    document.getElementById("cartMessage");

const cartCount =
    document.getElementById("cartCount");


let cart = [];

let messageTimeout;


/* Show cart notification */

function showMessage(message) {

    if (!cartMessage) {
        return;
    }

    cartMessage.textContent =
        message;

    cartMessage.classList.add(
        "show"
    );

    clearTimeout(
        messageTimeout
    );

    messageTimeout =
        setTimeout(
            () => {

                cartMessage.classList.remove(
                    "show"
                );

            },
            2500
        );

}


/* Add software option to cart */

function addToCart(
    software,
    option
) {

    cart.push({
        software: software,
        option: option
    });


    updateCartCount();


    showMessage(
        `${software} — ${option} added to cart.`
    );

}


/* Update cart number */

function updateCartCount() {

    if (!cartCount) {
        return;
    }

    cartCount.textContent =
        cart.length;

}


/* Cart button */

if (cartButton) {

    cartButton.addEventListener(
        "click",
        function () {

            if (cart.length === 0) {

                showMessage(
                    "Your cart is currently empty."
                );

                return;

            }


            const items =
                cart
                    .map(
                        item =>
                            `${item.software} — ${item.option}`
                    )
                    .join(", ");


            showMessage(
                `Cart: ${items}`
            );

        }
    );

}


/* ================================
   INITIALIZE
================================ */

updateCartCount();
