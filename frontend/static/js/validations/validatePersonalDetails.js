function isValidEmail(email) {
    // Basic email format validation using regular expression
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function isValidSANumber(number) {

    const numPattern = /^((\+27|0)[1-9]\d{8})$/;
    return numPattern.test(number);
}

function LuhnAlgorithm(text) {

    var arr = [...text];
    var sum = 0;
    var n = arr.length;

    for (var i = 0; i < n; i++)
    {
        arr[i] = parseInt(arr[i]);
    }

    for (var i = 1; i < n; i = i + 2)
    {
        var v = arr[n-1-i]*2;

        if (v > 9){
            arr[n-1-i] = v - 9;
        }
        else{
            arr[n-1-i] = v;
        }
    }

    for (var i = 0; i < n; i++)
    {
        sum = sum + arr[i];
    }

    if (sum % 10 === 0){
        console.log(sum);
        return true;
    }
    else{
        console.log(sum);
        return false;
    }
}

export function validateForm() {
    let isValid = true;

    const validationErrorElements = document.querySelectorAll('.validation-error');

    validationErrorElements.forEach(element => {
    element.textContent = ''; // Empty the content of the element
    element.classList.remove('text-danger'); // Remove the 'text-danger' class
    });

    // Get form field values
    // const firstNameInput = document.getElementById('fname').value;
    // const firstNameError = document.getElementById('fnameValidation');
    // if (firstNameInput.trim() === "" || firstNameInput === null)
    // {
    //     firstNameError.textContent = "Please enter your first name.";
    //     isValid = false;
    // }

    // const lastNameInput = document.getElementById('lname').value;
    // const lastNameError = document.getElementById('lnameValidation');
    // if (lastNameInput.trim() === "" || lastNameInput === null)
    // {
    //     lastNameError.textContent = "Please enter your last name.";
    //     isValid = false;
    // }

    // const celllInput = document.getElementById('cell').value;
    // const cellError = document.getElementById('cellValidation');
    // if (celllInput.trim() === "" || celllInput === null)
    // {
    //     cellError.textContent = "Please enter a cellphone number.";
    //     isValid = false;
    // } else {
    //     if(!isValidSANumber(celllInput)) {
    //         cellError.textContent = "Please enter a valid South African number.";
    //         isValid = false;
    //     } else {
    //         cellError.textContent = "";
    //     }
    // }

    // const emailInput = document.getElementById('email').value;
    // const emailError = document.getElementById('emailValidation');
    // if (emailInput.trim() === "" || emailInput === null)
    // {
    //     emailError.textContent = "Please enter an email.";
    //     isValid = false;
    // } else {
    //     if (!isValidEmail(emailInput)) {
    //         emailError.textContent = "Please enter a valid email.";
    //         isValid = false;
    //     } else {
    //         emailError.textContent = "";
    //     }
    // }

    // const addressInput = document.getElementById('address').value;
    // const addressError = document.getElementById('addressValidation');
    // if (addressInput.trim() === "" || addressInput === null)
    // {
    //     addressError.textContent = "Please enter an address.";
    // }

    const citizenInputs = document.querySelectorAll('#citizenContainer input[name="citizen"]');
    const citizenError = document.getElementById('citizenValidation');
    let isCitizenSelected = false;

    citizenInputs.forEach(input => {
    if (input.checked) {
        isCitizenSelected = true;
    }
    });

    if (!isCitizenSelected)
    {
        citizenError.textContent = "Please select an option.";
        isValid = false;
    }
    
    const idNumberInput = document.getElementById('idNumber').value;
    const idNumberError = document.getElementById('idNumberValidation');
    if (idNumberInput.trim() === "" || idNumberInput === null)
    {
        idNumberError.textContent = "Please enter an ID number.";
        isValid = false;
    } else{

        if(!LuhnAlgorithm(idNumberInput))
        {
            idNumberError.textContent = "Please enter a valid ID number.";
            isValid = false;
        }
    }

    const genderValue = document.getElementById('gender').value;
    const genderError = document.getElementById('genderValidation');
    if (genderValue === "" || genderValue === null)
    {
        genderError.textContent = "Please select a gender.";
        isValid = false;
    }

    const raceValue = document.getElementById('race').value;
    const raceError = document.getElementById('raceValidation');
    if (raceValue === "" || raceValue === null)
    {
        raceError.textContent = "Please select a race.";
        isValid = false;
    }

    const licenseValue = document.getElementById('license').value;
    const licenseError = document.getElementById('licenseValidation');
    if (licenseValue === "" || licenseValue === null)
    {
        licenseError.textContent = "Please select a driver's license.";
        isValid = false;
    }

    const yosValue = document.getElementById('yos').value;
    const yosError = document.getElementById('yosValidation');
    if (yosValue === "" || yosValue === null)
    {
        yosError.textContent = "Please select a year of study.";
        isValid = false;
    }

    const facultyValue = document.getElementById('faculty').value;
    const facultyError = document.getElementById('facultyValidation');
    if (facultyValue === "" || facultyValue === null)
    {
        facultyError.textContent = "Please select a faculty.";
        isValid = false;
    }

    const departmentValue = document.getElementById('department').value;
    const departmentError = document.getElementById('departmentValidation');
    if (departmentValue === "" || departmentValue === null)
    {
        departmentError.textContent = "Please select a department.";
        isValid = false;
    }

    return isValid;
}

