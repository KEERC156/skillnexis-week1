
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const navigation = document.getElementById("primary-navigation");
const navigationToggle = document.querySelector(".nav-toggle");
const currentYear = document.getElementById("currentYear");

navigationToggle.addEventListener("click", function () {
    const isExpanded = navigationToggle.getAttribute("aria-expanded") === "true";
    navigationToggle.setAttribute("aria-expanded", String(!isExpanded));
    navigation.classList.toggle("is-open", !isExpanded);
});

navigation.addEventListener("click", function (event) {
    if (event.target.closest("a")) {
        navigation.classList.remove("is-open");
        navigationToggle.setAttribute("aria-expanded", "false");
    }
});

currentYear.textContent = String(new Date().getFullYear());

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "#ff9a9a";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.style.color = "#ff9a9a";
        return;
    }

    formMessage.textContent =
        "Thanks, " + name + ". Your message details are valid (demo only; nothing was sent).";
    formMessage.style.color = "#b8f36b";
    contactForm.reset();
});
