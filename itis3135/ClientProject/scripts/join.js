document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("joinForm");
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default form submission

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const studentId = document.getElementById("studentId").value.trim();
        const grade = document.getElementById("grade").value;

        if (!name || !email || !studentId || !grade) {
            alert("Please fill out all fields.");
            return;
        }

        document.getElementById("confirmation").textContent =
            `Thanks for joining, ${name} (ID: ${studentId})! We'll reach out to you at ${email}.`;
        form.reset();
    });
});
