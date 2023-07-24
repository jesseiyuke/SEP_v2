import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Personal Details");
    }

    async getHtml() {
        return `

            <nav class="navbar">
                <a href="/PersonalDetails" class="nav__link active">Personal Details</a>
                <a href="/Education" class="nav__link">Education</a>
                <a href="/WorkExperience" class="nav__link">Work Experience</a>
                <a href="/Referees" class="nav__link">Referees</a>
                <a href="/GenerateCV" class="nav__link generate-cv">Generate CV</a>
            </nav>

            <br>
            <form id="personalDetailsForm">
                <div class="form-control">

                    <label for="fname" aria-label="required">First Name:</label>
                    <input type="text" id="fname" name="fname" required>
                    <span id="fnameValidation" class="error"></span>

                    <label for="lname">Last Name:</label>
                    <input type="text" id="lname" name="lname" required>
                    <span id="lnameValidation" class="error"></span>
                    <br/>

                    <label for="tel">Telephone Number:</label>
                    <input type="text" id="tel" name="tel">
                    <span id="telValidation" class="error"></span>

                    <label for="cell">Cellphone:</label>
                    <input type="text" id="cell" name="cell" required>
                    <span id="cellValidation" class="error"></span>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                    <span id="emailValidation" class="error"></span>
                    <br/>

                    <label for="citizen">Are you a South African Citizen?</label>
                    <input type="radio" value="true" id="citizenYes" name="citizen" required/>Yes
                    <input type="radio" value="false" id="citizenNo" name="citizen" required/>No

                    <label for="idNumber">ID/Passport Number:</label>
                    <input type="text" id="idNumber" name="idNumber" required>
                    <span id="idNumberValidation" class="text-danger"></span>

                    <label for="license">Driving License:</label>
                    <select id="license" name="license">
                        <option value="">Select Driver's License</option>
                    </select>
                    <br/>

                    <label for="yos">Year of Study:</label>
                    <select id="yos" name="yos">
                        <option value="">Select Year of Study</option>
                    </select>

                    <label for="faculty">Faculty:</label>
                    <select id="faculty" name="faculty">
                        <option value="">Select Faculty</option>
                    </select>

                    <label for="department">Department:</label>
                    <select id="department" name="department">
                        <option value="">Select Department</option>
                    </select>
                    <br/>

                    <label for="objective">Career Objective:</label>
                    <textarea id="objective" name="objective"></textarea>
                    <span id="objectiveValidation" class="error"></span>
                    <br/>

                    <label for="skills">Skills (please enter every skill on a new line):</label>
                    <textarea id="skills" name="skills"></textarea>
                    <br/>

                    <label for="achievements">Achievements:</label>
                    <textarea id="achievements" name="achievements"></textarea>
                    <br/>

                    <label for="interests">Career Objective:</label>
                    <textarea id="interests" name="interests"></textarea>
                    <br/>
                </div>

                <button type="submit">Save</button>
            </form>

            <script src="./static/js/validations/validatePersonalDetails.js"></script>
        `;
    }

    async afterRender() {
        // const email = document.getElementById("email");

        //     email.addEventListener("input", (event) => {
        //     if (email.validity.typeMismatch) {
        //         email.setCustomValidity("I am expecting an email address!");
        //     } else {
        //         email.setCustomValidity("");
        //     }
        // });

        document.addEventListener("DOMContentLoaded", function () {
            // Function to validate the ID number
            function validateIdNumber() {
                var idNumber = document.getElementById("idNumber").value;
                var isCitizen = document.querySelector('input[name="citizen"]:checked').value;

                var digitRegex = /^[0-9]+$/;

                var month = idNumber.substr(2, 2);
                var mm = parseInt(month, 10);
                var day = idNumber.substr(4, 2);
                var dd = parseInt(day, 10);

                var idNumberValidation = document.getElementById("idNumberValidation");

                if (idNumber.length === 0 && (isCitizen === "true" || isCitizen === "false")) {
                    idNumberValidation.textContent = "Please enter ID/Passport number.";
                    idNumberValidation.classList.add("text-danger");
                    return false;
                } else if (isCitizen === "true") {
                    if (!digitRegex.test(idNumber)) {
                        idNumberValidation.textContent = "ID number should contain only digits.";
                        idNumberValidation.classList.add("text-danger");
                        return false;
                    }
                    if (idNumber.length !== 13) {
                        idNumberValidation.textContent = "ID number must be 13 digits long.";
                        idNumberValidation.classList.add("text-danger");
                        return false;
                    }
                    var validMonth = mm >= 1 && mm <= 12;
                    var validDay = dd >= 1 && dd <= 31;

                    if (!validMonth || !validDay) {
                        idNumberValidation.textContent = "Please enter a valid ID number.";
                        idNumberValidation.classList.add("text-danger");
                        return false;
                    }

                    if ((mm == 4 || mm == 6 || mm == 9 || mm == 11) && dd > 30) {
                        idNumberValidation.textContent = "Please enter a valid ID number.";
                        idNumberValidation.classList.add("text-danger");
                        return false;
                    } else if (mm == 2) {
                        if (dd > 28) {
                            idNumberValidation.textContent = "Please enter a valid ID number.";
                            idNumberValidation.classList.add("text-danger");
                            return false;
                        }
                    }

                    idNumberValidation.textContent = "";
                    idNumberValidation.classList.remove("text-danger");
                    return true;
                } else if (isCitizen === "false" && idNumber.length < 6) {
                    idNumberValidation.textContent = "Passport number must be at least 6 digits long.";
                    idNumberValidation.classList.add("text-danger");
                    return false;
                } else {
                    idNumberValidation.textContent = "";
                    idNumberValidation.classList.remove("text-danger");
                    return true;
                }
            }

            // Add event listener to the element with ID "studentIdNumber"
            var studentIdNumber = document.getElementById("idNumber");
            if (studentIdNumber) {
                studentIdNumber.addEventListener("input", function () {
                    validateIdNumber();
                });
            }

            // Add event listener to the radio buttons with name "Citizen"
            var citizenRadios = document.querySelectorAll('input[name="citizen"]');
            for (var i = 0; i < citizenRadios.length; i++) {
                citizenRadios[i].addEventListener("change", function () {
                    validateIdNumber();
                });
            }
        });         
    }

}