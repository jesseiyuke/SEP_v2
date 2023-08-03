import AbstractView from "./AbstractView.js";
import { validateForm } from "../validations/validatePersonalDetails.js";



export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Personal Details");
    }

    async getHtml() {
        return `

            <nav class="navbar">
                <a href="/PersonalDetails" class="nav_link active">Personal Details</a>
                <a href="/Education" class="nav_link">Education</a>
                <a href="/WorkExperience" class="nav_link">Work Experience</a>
                <a href="/Referees" class="nav_link">Referees</a>
                <a href="/GenerateCV" class="nav_link generate-cv">Generate CV</a>
            </nav>

            <br>
            <div class="center-container">
                <form id="personalDetailsForm">
                    <div class="row">
                        <div class="floating-label-content column">
                            <input type="text" class="floating-input" id="fname" name="fname" placeholder="Please enter your first name.">
                            <label for="fname" class="floating-label">First Name</label>
                            <span id="fnameValidation" class="validation-error"></span>
                        </div>
                        <div class="floating-label-content column">
                            <input type="text" class="floating-input" id="lname" name="lname" placeholder="Please enter your last name.">
                            <label for="lname" class="floating-label">Last Name</label>
                            <span id="lnameValidation" class="validation-error"></span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="floating-label-content column">
                            <input type="text" class="floating-input" id="cell" name="cell" placeholder="Please enter your cellphone number.">
                            <label for="cell" class="floating-label">Cellphone Number</label>
                            <span id="cellValidation" class="validation-error"></span>
                        </div>
                        
                        <div class="floating-label-content column">
                            <input type="text" class="floating-input" id="email" name="email" placeholder="Please enter your email address.">
                            <label for="email" class="floating-label">Email</label>
                            <span id="emailValidation" class="validation-error"></span>
                        </div>
                    </div>
                    <div class="row">
                        <div id="citizenContainer" class="floating-label-content column">
                            <label for="citizen">Are you a South African Citizen?</label>
                            <input type="radio" value="true" id="citizenYes" name="citizen"/>Yes
                            <input type="radio" value="false" id="citizenNo" name="citizen"/>No
                            <span id="citizenValidation" class="validation-error"></span>
                        </div>
                        <div class="floating-label-content column">
                            <input type="text" class="floating-input" id="idNumber" name="idNumber" placeholder=" ">
                            <label for="idNumber" class="floating-label">ID/Passport Number (optional)</label>
                            <span id="idNumberValidation" class="validation-error"></span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="floating-label-content column">
                            <select id="gender" name="gender" class="floating-select"
                            onclick="this.setAttribute('value', this.value);" onchange="this.setAttribute('value', this.value);" value="">
                                <option value=""></option>
                            </select>
                            <label for="gender" class="floating-label">Gender</label>
                        </div>
                        <div class="floating-label-content column">
                            <select id="race" name="race" class="floating-select"
                            onclick="this.setAttribute('value', this.value);" onchange="this.setAttribute('value', this.value);" value="">
                                <option value=""></option>
                            </select>
                            <label for="race" class="floating-label">Race</label>
                        </div>
                        <div class="floating-label-content column">
                            <select class="floating-select" id="license" name="license" 
                            onclick="this.setAttribute('value', this.value);" onchange="this.setAttribute('value', this.value);" value="">
                                <option value=""></option>
                            </select>
                            <label for="license" class="floating-label">Driver's License</label>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="floating-label-content column">
                            <select id="yos" name="yos" class="floating-select"
                            onclick="this.setAttribute('value', this.value);" onchange="this.setAttribute('value', this.value);" value="">
                                <option value=""></option>
                            </select>
                            <label for="yos" class="floating-label">Year of Study</label>
                        </div>
                        <div class="floating-label-content column">
                            <select id="faculty" name="faculty" class="floating-select"
                            onclick="this.setAttribute('value', this.value);" onchange="this.setAttribute('value', this.value);" value="">
                                <option value=""></option>
                            </select>
                            <label for="faculty" class="floating-label">Faculty</label>
                        </div>
                        <div class="floating-label-content column">
                            <select id="department" name="department" class="floating-select"
                            onclick="this.setAttribute('value', this.value);" onchange="this.setAttribute('value', this.value);" value="">
                                <option value=""></option>
                            </select>
                            <label for="department" class="floating-label">Department</label>
                        </div>
                    </div>
                    <div class="floating-label-content">
                        <label for="objective" class="floating-label">Career Objective:</label>
                        <textarea id="objective" name="objective" class="floating-input" placeholder=" "></textarea>
                        <span id="objectiveValidation" class="validation-error"></span>
                    </div>
                    <div class="floating-label-content">
                        <textarea id="skills" name="skills" class="floating-input"></textarea>
                        <label for="skills" class="floating-label">Skills (please enter every skill on a new line):</label>
                    </div>
                    <div class="floating-label-content">
                        <textarea id="achievements" name="achievements" class="floating-input"></textarea>
                        <label for="achievements" class="floating-label">Achievements:</label>
                        <br/>
                    </div>
                    <div>
                        <button>Save</button>
                        <button>Discard</button>
                    </div>
                </form>
            </div>
           
        `;
    }

    async afterRender() {

        /* fetch data from API endpoint and populate the dropdowns*/

        //Populate Gender dropdown
        const genderRes = await fetch('https://localhost:7013/api/Lookup/Genders');
        const gender = await genderRes.json();

        const genderSelect = document.querySelector("#gender");
        gender.forEach(g => {
            const option = document.createElement("option");
            option.value = g.id;
            option.textContent = g.name;
            genderSelect.appendChild(option);
        });

        //Populate Race dropdown
        const raceRes = await fetch('https://localhost:7013/api/Lookup/Races');
        const race = await raceRes.json();

        const raceSelect = document.querySelector("#race");
        race.forEach(r => {
            const option = document.createElement("option");
            option.value = r.id;
            option.textContent = r.name;
            raceSelect.appendChild(option);
        });

        //Populate License dropdown
        const licenseRes = await fetch('https://localhost:7013/api/Lookup/DriversLicense');
        const license = await licenseRes.json();

        const licenseSelect = document.querySelector("#license");
        license.forEach(l => {
            const option = document.createElement("option");
            option.value = l.id;
            option.textContent = l.type;
            licenseSelect.appendChild(option);
        });

        //Populate YOS dropdown
        const yosRes = await fetch('https://localhost:7013/api/Lookup/YearOfStudy');
        const YOS = await yosRes.json();

        const yosSelect = document.querySelector("#yos");
        YOS.forEach(y => {
            const option = document.createElement("option");
            option.value = y.id;
            option.textContent = y.name;
            yosSelect.appendChild(option);
        });

        // Populate Faculty and Department
        const departmentRes = await fetch('https://localhost:7013/api/Lookup/Departments');
        const department = await departmentRes.json();

        const depSelect = document.querySelector("#department");
        
        department.forEach(course => {
            const option = document.createElement("option");
            option.value = course.id; // Set the value to the ID, you can use a different property if needed.
            option.textContent = course.name; // Display the course name in the dropdown.
            depSelect.appendChild(option);
        });

        const res_1 = await fetch('https://localhost:7013/api/CV/Get Student profile?StudentId=2d058062-0f32-4e62-abfc-3c05eaf60a7e');
        const student = await res_1.json();
       

        document.getElementById("fname").value = student.user.firstName;
        document.getElementById("lname").value = student.user.lastName;
        document.getElementById("email").value = student.user.email;
        

        

        const form = document.getElementById("personalDetailsForm");

        form.addEventListener("submit", (e) => {
            if (!validateForm()){
                e.preventDefault();
            }
        })

        var textareas = document.querySelectorAll("textarea");
            
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


}

