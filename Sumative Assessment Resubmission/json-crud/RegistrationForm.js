var users = localStorage.getItem("users"); 
$(function () {
    users = JSON.parse(users); // Convert String as an Object
    if (users === null) // If there is nothing intialize
        users = [];
    });

function formValidation() {
    // Get the HTML elements
    var userName    = document.registration.user_name;
    var gender      = document.registration.gender;
    var email       = document.registration.email;
    var password    = document.registration.pwd;
    var contact     = document.registration.contact;
    var address     = document.registration.address;
    var course      = document.registration.country;
    var comments    = document.registration.comments;


    if (isValidUserName(userName, 8, 20))
        if (isValidEmail(email))
            if (isValidContact(contact, 8))
            if (isValidAddress(address, 20, 50)){


               
                var user = JSON.stringify({
                    user_name   : $("#user_name").val(),
                    gender      : gender.value,
                    email       : $("#email").val(),
                    password    : $("#pwd").val(),
                    contact     : $("#contact").val(),
                    address     : $("#address").val(),
                    country     : $("#course").val(),
                    comments    : $("#comments").val()
                  });

                 users.push(user);
                 localStorage.setItem("users", JSON.stringify(users)); 
                return true;
            }

                
    return false;
}
function isValidUserName(userName, minLen, maxLen) {
    var userNameLength = userName.value.length;
    if (userNameLength == 0 || userNameLength > maxLen || userNameLength < minLen) { // || - Or operator
        alert("User Name should not be empty / length must be between " + minLen + " to " + maxLen);
        userName.focus();
        return false;
    } else if (!isAlpha(userName)) {        //! - Not operator
        alert("Enter alphabets only");
        userName.focus();
        return false;
    }
    return true;
}

function isValidEmail(email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailformat)) {
        return true;
    }
    else {
        alert("Enter valid email address!");
        email.focus();
        return false;
    }
}


function isValidContact(contact, len) {
    var contactLength = contact.value.length;
    if (contactLength == 0 || contactLength != len) {
        alert("Contact should not be empty / length must be " + len);
        contact.focus();
        return false;
    } else if (!isNumber(contact)) {
        alert("Enter Numbers only");
        contact.focus();
        return false;
    }
    return true;
}

function isValidAddress(address, minLen, maxLen) {
    var addressLength = address.value.length;
    if (addressLength == 0 || addressLength > maxLen || addressLength < minLen) {
        alert("Address should not be empty / length be between " + minLen + " to " + maxLen);
        address.focus();
        return false;
    } else if (!isAddress(address)) {
        alert('Enter alphabets and numbers only');
        address.focus();
        return false;
    }
    return true;
}

function isAlpha(input) {
    var characters = /^[A-Za-z]+$/; // Regular Expression [ ] - Options , A-Z - A,B, C ... Z, ^ - Any 
    if (input.value.match(characters)) {
        return true;
    }
    return false;
}

function isNumber(input) {
    var characters = /^[0-9{8}]+$/;
    if (input.value.match(characters)) {
        return true;
    }
    return false;
}

function isAlphaNumeric(input) {
    var characters = /^[0-9A-Za-z]+$/;
    if (input.value.match(characters)) {
        return true;
    }
    return false;
}

function isAddress(input) {
    var characters = /^[#.0-9a-zA-Z\s,-]+$/;
    if (input.value.match(characters)) {
        return true;
    }
    return false;
}


