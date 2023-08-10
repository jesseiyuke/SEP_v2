// Transition betwee login and regristration

var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");


function login() {
    x.style.left = "4px";
    y.style.right = "-520px";
    a.className += " white-btn";
    b.className = "btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
}

function register() {
    x.style.left = "-510px";
    y.style.right = "5px";
    a.className = "btn";
    b.className += " white-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
}

//form
const formlogin = document.getElementById('login');
const formregister= document.getElementById('register');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const cellphone = document.getElementById('cellphone');
const telephone = document.getElementById('telephone');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const type = document.getElementById('type');

const email1 = document.getElementById('email1');
const password1= document.getElementById('password1');

formlogin.addEventListener('submit', e => {
    e.preventDefault();

    validateLoginInputs();
});

formregister.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isValidNumber= number => {
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return re.test(number);
}

const validateLoginInputs=() => {
    const emailValue = email1.value.trim();
    const passwordValue = password1.value.trim();

    if(emailValue === '') {
        setError(email1, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email1, 'Provide a valid email address');
    } else {
        setSuccess(email1);
    }

    if(passwordValue === '') {
        setError(password1, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password1, 'Password must be at least 8 character.')
    } else {
        setSuccess(password1);
    }
}

const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const cellphoneValue = cellphone.value.trim();
    const telephoneValue = telephone.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const typeValue = type.value.trim();

    if(firstnameValue === '') {
        setError(firstname, 'First name is required');
    } else if (firstnameValue.length<2) {
        setError(firstname, 'Must be greater than one character');
    }
     else {
        setSuccess(firstname);
    }

    if(lastnameValue === '') {
        setError(lastname, 'Last name is required');
    }else if (lastnameValue.length<2) {
        setError(lastname, 'Must be greater than one character');
    } else {
        setSuccess(lastname);
    }

    if(cellphoneValue === '') {
        setError(cellphone, 'Cellphone number is required');
    }else if (!isValidNumber(cellphoneValue)) {
        setError(cellphone, 'Must be the correct cellphone format');
    } else {
        setSuccess(cellphone);
    }

    if(telephoneValue === '') {
        setError(telephone, 'Telephone number is required');
    }else if (!isValidNumber(telephoneValue)) {
        setError(telephone, 'Must be the correct telephone format');
    } else {
        setSuccess(telephone);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

    if(typeValue === '') {
        setError(type, 'Who are you?');
    }
     else {
        setSuccess(type);
    }

};
