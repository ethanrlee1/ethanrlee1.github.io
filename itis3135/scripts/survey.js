

function addCourse() {
    const container = document.getElementById("coursesContainer");
    const courseDiv = document.createElement("div");

    const input = document.createElement("input");
    input.type = "text";
    input.name = "course";
    input.placeholder = "Course Name";
    input.required = true;

    const delButton = document.createElement("button");
    delButton.type = "button";
    delButton.textContent = "Delete";
    delButton.onclick = () => courseDiv.remove();

    courseDiv.appendChild(input);
    courseDiv.appendChild(delButton);
    container.appendChild(courseDiv);
}

function handleFormSubmit(event) {
    event.preventDefault(); // stop default form submission

    const name = document.getElementById("name").value;
    const mascot = document.getElementById("mascot").value;
    const img = document.getElementById("image").files[0];
    const caption = document.getElementById("imgCaption").value;
    const personalBg = document.getElementById("personalBg").value;
    const professionalBg = document.getElementById("professionalBg").value;
    const academicBg = document.getElementById("academicBg").value;
    const webDevBg = document.getElementById("webDevBg").value;
    const platform = document.getElementById("platform").value;
    const funnyThing = document.getElementById("funnyThing").value;
    const anythingElse = document.getElementById("anythingElse").value;

    const courses = Array.from(document.querySelectorAll("input[name='course']")).map((input) => input.value);

    const output = document.getElementById("output");
    const reader = new FileReader();

    reader.onload = () => {
        output.innerHTML = `
            <h2>${name}'s Intro Page</h2>
            <h3>Meet ${mascot}!</h3>
            <figure>
                <img src="${reader.result}" alt="Uploaded Image" width="200">
                <figcaption>${caption}</figcaption>
            </figure>
            <p><strong>Personal Background:</strong> ${personalBg}</p>
            <p><strong>Professional Background:</strong> ${professionalBg}</p>
            <p><strong>Academic Background:</strong> ${academicBg}</p>
            <p><strong>Web Dev Background:</strong> ${webDevBg}</p>
            <p><strong>Primary Platform:</strong> ${platform}</p>
            <p><strong>Courses:</strong> <ul>${courses.map((course) => `<li>${course}</li>`).join('')}</ul></p>
            <p><strong>Funny Thing:</strong> ${funnyThing}</p>
            <p><strong>Anything Else:</strong> ${anythingElse}</p>
            <br><button onclick="window.location.reload()">Reset Form</button>
        `;
        document.getElementById("introForm").style.display = "none";
    };

    if (img) {
        const validTypes = ["image/png", "image/jpeg"];
        if (!validTypes.includes(img.type)) {
            alert("Image must be PNG or JPG.");
            return;
        }
        reader.readAsDataURL(img);
    } else {
        alert("Please upload an image.");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("introForm").addEventListener("submit", handleFormSubmit);
});

function resetForm() {
    document.getElementById("coursesContainer").innerHTML = "";
    document.getElementById("output").innerHTML = "";
    document.getElementById("introForm").style.display = "block";
}
