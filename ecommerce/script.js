const cartCount = document.getElementById("cartCount");
const cartMessage = document.getElementById("cartMessage");
const cartLink = document.querySelector(".cart-link");
const clearCartButton = document.getElementById("clearCart");
let itemCount = 0;

function updateCart(message) {
    cartCount.textContent = String(itemCount);
    cartLink.setAttribute("aria-label", `Demo cart, ${itemCount} ${itemCount === 1 ? "item" : "items"}`);
    cartMessage.textContent = message;
}

document.querySelectorAll(".add-button").forEach((button) => {
    button.addEventListener("click", () => {
        itemCount += 1;
        updateCart(`${button.dataset.product} added. Your demo bag has ${itemCount} ${itemCount === 1 ? "item" : "items"}.`);
    });
});

clearCartButton.addEventListener("click", () => {
    itemCount = 0;
    updateCart("Your demo bag is empty.");
});
