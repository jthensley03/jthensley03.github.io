function showContactPopup() {
    document.getElementById("contact-popup").style.display = "block";
    console.log("contact popup shown");
}

function hideContactPopup() {
    document.getElementById("contact-popup").style.display = "none";
    console.log("contact popup hidden");
}

function showFormErrorPopup() {
    document.getElementById("formErrorPopup").style.display = "block";
    console.log("contact error popup shown");
}

function hideFormErrorPopup() {
    document.getElementById("formErrorPopup").style.display = "none";
    console.log("contact error popup hidden");
}

function setErrorMessage(errorMessage) {
    document.getElementById("formError").innerHTML = errorMessage;
}

function validateContactForm() {
    var passed = false;
    let user_fname = document.getElementById("user_fname").value;
    let user_lname = document.getElementById("user_lname").value;
    let user_email = document.getElementById("user_email").value;
    let user_phone = document.getElementById("user_phone").value;
    let user_message = document.getElementById("user_message").value;
    var phoneRegex = /^([0-9]{3})-([0-9]{3})-([0-9]{4})$/;
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (user_fname == "") {
        let errorMessage = "Please enter your first name";
        setErrorMessage(errorMessage);
    } else if (user_lname == "") {
        let errorMessage = "Please enter your last name";
        setErrorMessage(errorMessage);
    } else if (user_email == "") {
        let errorMessage = "Please enter your email";
        setErrorMessage(errorMessage);
    } else if (user_phone == "") {
        let errorMessage = "Please enter your phone";
        setErrorMessage(errorMessage);
    } else if (user_message == "") {
        let errorMessage = "Please enter a message";
        setErrorMessage(errorMessage);
    } else if (user_email == "") {
        let errorMessage = "Please enter your email";
        setErrorMessage(errorMessage);
    } else if (!(user_email.includes("@")) || !(user_email.includes("."))) {
        let errorMessage = "Invalid email (no @ or .)";
        setErrorMessage(errorMessage);
    } else if (user_email.substring(0, user_email.indexOf("@")) == "") {
        let errorMessage = "Invalid email";
        console.log(user_email.substring(0, user_email.indexOf("@")));
        console.log(user_email);
        setErrorMessage(errorMessage);
    } else if (phoneRegex.test(user_phone) == false) {
        let errorMessage = "Invalid phone number";
        setErrorMessage(errorMessage);
    } else if (!(emailRegex.test(user_email))) {
        let errorMessage = "Invalid email";
        setErrorMessage(errorMessage);
    } else {
        setErrorMessage("");
        passed = true;
    }
    console.log("passed " + passed);
    console.log("validate user_email: " + user_email);
    return passed;
}

emailjs.init('oI9cSzYQi-CbJD0OE');

window.onload = function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        if(validateContactForm()) {
            event.preventDefault();
            emailjs.sendForm('service_o0joyin', 'template_3pgmocg', this)
                .then(function() {
                        console.log('SUCCESS!');
                    }, function(error) {
                        console.log('FAILED...', error);
                    });
            document.getElementById("user_message").value = "";
            console.log(document.getElementById("user_email").value);
            hideContactPopup();
        }
    });
}
