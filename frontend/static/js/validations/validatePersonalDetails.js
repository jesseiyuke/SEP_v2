function validateForm() {
    // Get form field values
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const cellPhone = document.getElementById('cell').value;
    const email = document.getElementById('email').value;
    const citizenYes = document.getElementById('citizenYes').checked;
    const citizenNo = document.getElementById('citizenNo').checked;

    // Perform form validation
    if (firstName.trim() === '') {
        alert('Please enter your First Name.');
        return false;
    }

    if (lastName.trim() === '') {
        alert('Please enter your Last Name.');
        return false;
    }

    if (cellPhone.trim() === '') {
        alert('Please enter your Cellphone number.');
        return false;
    }

    if (email.trim() === '') {
        alert('Please enter your Email.');
        return false;
    } else if (!isValidEmail(email)) {
        alert('Please enter a valid Email address.');
        return false;
    }

    if (!citizenYes && !citizenNo) {
        alert('Please select whether you are a South African Citizen.');
        return false;
    }

    // Add more validations for other fields as needed

    // If all validations pass, return true to submit the form
    return true;
}

function isValidEmail(email) {
    // Basic email format validation using regular expression
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// let sectionform = document.getElementById("education");
// let closeform = document.getElementById("closeformbbbtn");

// closeform.addEventListener("click", ()=>{
//     console.log("Listener working");
//     sectionform.style.display = "none";
// });