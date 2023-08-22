const userId = "b9fa4d80-ebba-42d5-9fb5-b8eaa4f34ef2";

// Start of cutsom client-side validations
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
        return true;
    }
    else{
        return false;
    }
}

function validateForm() {
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
// End of client-side validations

// Start of fetching data, populating and adding listeners

/* fetch data from API endpoint */
async function fetchLookupData()
{
    const lookupRes = await fetch('https://localhost:7013/api/Lookup/LookupData');
    const lookups = await lookupRes.json();

    return lookups;
}

/* fetch data from API endpoint and populate the dropdowns*/
async function populateDropdowns() {

    const lookups = await fetchLookupData();

    // Populate Nationality dropdown
    const nationality = lookups.nationalities;

    const nationalitySelect = document.querySelector("#nationality");
    nationality.forEach(n => {
        const option = document.createElement("option");
        option.value = n.id;
        option.textContent = n.name;
        nationalitySelect.appendChild(option);
    });

    // //Populate Gender dropdown
    const gender = lookups.genders;

    const genderSelect = document.querySelector("#gender");
    gender.forEach(g => {
        const option = document.createElement("option");
        option.value = g.id;
        option.textContent = g.name;
        genderSelect.appendChild(option);
    });

    // //Populate Race dropdown
    const race = lookups.races;

    const raceSelect = document.querySelector("#race");
    race.forEach(r => {
        const option = document.createElement("option");
        option.value = r.id;
        option.textContent = r.name;
        raceSelect.appendChild(option);
    });

    // //Populate License dropdown
    const license = lookups.driversLicenses;

    const licenseSelect = document.querySelector("#license");
    license.forEach(l => {
        const option = document.createElement("option");
        option.value = l.id;
        option.textContent = l.type;
        licenseSelect.appendChild(option);
    });

    // //Populate YOS dropdown
    const YOS = lookups.yearsOfStudy;

    const yosSelect = document.querySelector("#yos");
    YOS.forEach(y => {
        const option = document.createElement("option");
        option.value = y.id;
        option.textContent = y.name;
        yosSelect.appendChild(option);
    });

    // // Populate Faculty and Department dropdowns (add cascading dropdown effect)
    const department = lookups.departments

    const depSelect = document.querySelector("#department");
    const facultySelect = document.querySelector("#faculty");

    const faculties = {};

    department.forEach(d => {
        
        if (!faculties[d.facultyId])
        {
            const option = document.createElement("option");
            option.value = d.faculty.id;
            option.textContent = d.faculty.name;
            facultySelect.appendChild(option);
            faculties[d.facultyId] = true;
        }
    });

    facultySelect.addEventListener("change", () => {
        const selectedFacultyId = parseInt(facultySelect.value);
        depSelect.innerHTML = "";
        resetDepartments(depSelect);
        populateDepartments(selectedFacultyId, depSelect, department);
    });
};

// Populate departments based on the selected faculty
function populateDepartments(facultyId, depSelect, department)
{
    const selectedFacultyId = parseInt(facultyId);

    const departments = department.filter(
        dep => dep.facultyId === selectedFacultyId
    );

    departments.forEach(d => {
        const option = document.createElement("option");
        option.value = d.id;
        option.textContent = d.name;
        depSelect.appendChild(option);    
    });
}

// reset department dropdown when a faculty is changed
function resetDepartments(depSelect)
{
    const def = document.createElement("option");
    def.id = "";
    def.name = "";

    depSelect.appendChild(def);
}

// auto-adjust the text area, based on input
function autoAdjustTextarea()
{
    const textareas = document.querySelectorAll("textarea");
    
    function adjustTextareaHeight(textarea) {
        textarea.style.height = "auto";
        textarea.style.height = (textarea.scrollHeight) + "px";
    }
    
    textareas.forEach(function(textarea) {
        textarea.setAttribute("style", "height:" + (textarea.scrollHeight) + "px;overflow-y:hidden;");
        textarea.addEventListener("input", function() {
            adjustTextareaHeight(this);
        });
    });
}

// Function to fetch the student's details from the API endpoint
export async function fetchStudentProfile()
{
    // // disclaimer: will have to use id of current logged in user
    // // for now, using the seeded data for testing purposes
    const studentRes = await fetch("https://localhost:7013/api/Student/Get Student profile?StudentId=" + userId);
    const student = await studentRes.json();
    
    // Populate the dropdowns and map the data values to the form fields
    await populateDropdowns();
    const data = await fetchLookupData();

    const departmentId = student.departmentId;
    const departments = data.departments;
    const department = departments.find(d => d.id === departmentId);

    const facultyId = department.facultyId;

    await populateDepartments(facultyId, document.querySelector("#department"), departments);

    const firstName = document.getElementById("fname");
    const lastName = document.getElementById("lname");
    const email = document.getElementById("email");

    firstName.value = student.user.firstName;
    lastName.value = student.user.lastName;
    email.value = student.user.email;
    firstName.disabled = true;
    lastName.disabled = true;
    email.disabled = true;

    document.getElementById("address").value = student.address;

    const citizenYes = document.getElementById("citizenYes");
    const citizenNo = document.getElementById("citizenNo");
    const nationality = document.getElementById("nationality");
    
    if (student.nationalityId == 166){
        citizenYes.checked = true;
        citizenNo.checked = false;
        nationality.value = student.nationalityId;
        nationality.disabled = true;
    } else {
        citizenYes.checked = false;
        citizenNo.checked = true;
        nationality.value = student.nationalityId;
        nationality.disabled = false;
    }

    citizenYes.addEventListener("change", () => {
        if (citizenYes.checked) {
            nationality.value = "166";
            nationality.disabled = true;
        }
    });

    citizenNo.addEventListener("change", () => {
        if (citizenNo.checked) {
            nationality.disabled = false;
            nationality.value = "";
        }
    });

        
    document.getElementById("idNumber").value = student.idNumber;
    document.getElementById("gender").value = student.genderId;
    document.getElementById("race").value = student.raceId;
    document.getElementById("license").value = student.driversLicenseId;
    document.getElementById("yos").value = student.yearOfStudyId;

    document.getElementById("department").value = departmentId;
    document.getElementById("faculty").value = facultyId;
    
    document.getElementById("objective").value = student.careerObjective;

    const skills = student.skills.split(", ");
    const skillsContainer = document.querySelector("#skills");

    const skillsList = [];

    skills.forEach(item => {
        skillsList.push(item)
    });

    skillsContainer.value = skillsList.join("\n");

    document.getElementById("achievements").value = student.achivements;
    
    autoAdjustTextarea();

}

export async function validateForms() {
    const form = document.getElementById("personalDetailsForm");

    form.addEventListener("submit", async (e) => {
        if (!validateForm())
        {
            e.preventDefault();
        } else {
            await submitForm();
        }
    });
}

async function submitForm() {
    
    // Collect updated data from form fields
    const updatedData = {
        userId: userId,
        address: document.querySelector("#address").value, 
        idNumber: document.querySelector("#idNumber").value,
        driversLicenseId: document.querySelector("#license").value,
        careerObjective: document.querySelector("#objective").value,
        genderId: document.querySelector("#gender").value,
        nationalityId: document.querySelector("#nationality").value,
        raceId: document.querySelector("#race").value,
        yearOfStudyId: document.querySelector("#yos").value, 
        departmentId: document.querySelector("#department").value,
        skills: document.querySelector("#skills").value,
        achivements: document.querySelector("#achievements").value
    };
    const jsonData = JSON.stringify(updatedData);

    // Send the updated data to the API endpoint
   const response = await fetch('https://localhost:7013/api/Student/UpdateStudent', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: jsonData
    });

    if (response.ok) {
        // Data updated successfully
        console.log('Data updated successfully');
    } else {
        // Handle error cases
        console.error('Error updating data:', response.statusText);
    }
}

// End of fetching, populating and adding event listeners