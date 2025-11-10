const form = document.getElementById('signup-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (form.checkValidity() === true) {
        location.href="../login/login.html";
    }
    else{

    }
})