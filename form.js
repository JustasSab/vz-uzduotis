$(document).ready(function() {
    $("#form").validate({
    rules: {
        firstname : {
            required: true,
            minlength: 4
        },
        email: {
            required: true,
            minlength: 4
        },
    },
    messages: {
        firstname: {
            minlength: "Name should be at least 4 characters"
        },
        email: {
            minlength: "Email should be at least 4 characters"
        },
        }
    });
});



// const id = (id) => document.getElementById(id);

// const classes = (classes) => document.getElementsByClassName(classes);

// let username = id("firstname"),
//     email = id("email"),
//     form = id("form"),
//     errorMsg = classes("error")

//     form.addEventListener("submit", (e) => {
//         e.preventDefault();

//         formValidation(username, 0, "Name cannot be blank");
//         formValidation(email, 2, "Email cannot be blank");
//     });

// let formValidation = (id, serial, message) => {
//     if (id.value.trim() === "") {
//         errorMsg[serial].innerHTML = message;
//     } 
//     else {
//         errorMsg[serial].innerHTML = "";
//     }
// }




// const first_name = document.getElementById('firstname');

// const form = document.getElementById('form');
// const errorMessage = document.getElementById('error');

// form.addEventListener('submit', (e) => {
//     let message = [];
//     if (first_name.value === '' || first_name.value == null) {
//         message.push('Name is req');
//     }
//     if (message.length > 0) {
//         e.preventDefault();
//     }
// })




// $(document).ready (function () {
//     $('#form').submit (function (e) {
//         e.preventDefault();
//         var first_name = $('#firstname').val();
//         var last_name = $('#lastname').val();
//         var email = $('#email').val();
//      $(".error").remove();
//         if (first_name.length <= 4) {
//             $('#firstname').after('<span class="error">This field is required</span>');
//         }
//         if (email.length <= 4) {
//             $('#email').after('<span class="error">This field is required</span>');
//         }
//     });
// })