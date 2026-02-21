
const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
    event.preventDefault();
    
    const login = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if (!login || !password) {
        alert('All form fields must be filled in');
        return;
    }

    const userInfo = {};
    userInfo[form.elements.email.name] = login;
    userInfo[form.elements.password.name] = password;

    console.log(userInfo);

    form.reset();
});





