const firstname = document.getElementById("firstname");
const email = document.getElementById("email");
const form = document.getElementById("form");

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
})
const setError = (element, errMessage) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = errMessage;
    inputControl.classList.add('error');
}
const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const validRegex = email => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}
// Validation logic
const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const emailValue = email.value.trim();
    // Name
    if(firstnameValue === '') {
        setError(firstname, 'Name is required!');
    } else if (firstnameValue.length < 4 ) {
        setError(firstname, 'Name must be at least 4 characters!')
    } else {
        setSuccess(firstname);
    }
    // Email
    if(emailValue === '') {
        setError(email, 'Email is required!');
    } else if (emailValue.length < 4 ) {
        setError(email, 'Email must be at least 4 characters!')
    } else if (!validRegex (emailValue)) {
        setError(email, 'Provide a valid email address');
    } else  {
        setSuccess(email);
    }
}

// JQuery Validation Library Rules

// $(document).ready(function() {
//     $("#form").validate({
//     rules: {
//         firstname : {
//             required: true,
//             minlength: 4
//         },
//         email: {
//             required: true,
//             minlength: 4
//         },
//     },
//     messages: {
//         firstname: {
//             minlength: "Name must be at least 4 characters!"
//         },
//         email: {
//             minlength: "Email must be at least 4 characters!"
//         },
//         }
//     });
// });