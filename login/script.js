const form = document.getElementById('loginForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (form.checkValidity() === true) {
        location.href="../EME_webapp/home_page.html";
    }
    else{

    }
})