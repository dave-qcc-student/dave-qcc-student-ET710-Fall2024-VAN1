const form = document.forms["surveyForm"];

const modal = document.getElementById("resultModal");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (!form.checkValidity()) {
        event.stopPropagation();
        form.classList.add('was-validated');
        return;
    }

    document.getElementById("name").textContent = form['name'].value;

    document.getElementById("email").textContent = form['email'].value;

    document.getElementById("age").textContent = form['age'].value;

    document.getElementById("satisfaction").textContent = form['satisfaction'].value;

    document.getElementById("contactMethod").textContent = form['contactMethod'].value;

    document.getElementById("comments").textContent = form['comments'].value;

    new bootstrap.Modal(modal).show();
    form.reset();
    form.classList.remove('was-validated');
});
