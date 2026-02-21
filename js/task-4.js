
const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
    event.preventDefault();
    
    const login = form.elements.email.value;
    const password = form.elements.password.value;

    if (!login || !password) {
        alert('All form fields must be filled in');
        return;
    }

    const userInfo = {};
    userInfo[form.elements.email.name] = login.trim();
    userInfo[form.elements.password.name] = password.trim();

    console.log(userInfo);

    form.reset();
});





