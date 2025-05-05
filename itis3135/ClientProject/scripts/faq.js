document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll(".faq-question");
    questions.forEach((btn) => {
        btn.addEventListener("click", () => {
            const item = btn.parentElement;
            const icon = btn.querySelector(".icon");

            item.classList.toggle("active");

            // Toggle the icon
            if (item.classList.contains("active")) {
                icon.textContent = "➖";
            } else {
                icon.textContent = "➕";
            }
        });
    });
});