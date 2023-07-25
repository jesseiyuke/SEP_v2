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
                <a href="/PersonalDetails" class="nav__link active">Personal Details</a>
                <a href="/Education" class="nav__link">Education</a>
                <a href="/WorkExperience" class="nav__link">Work Experience</a>
                <a href="/Referees" class="nav__link">Referees</a>
                <a href="/GenerateCV" class="nav__link generate-cv">Generate CV</a>
            </nav>

            <br>
            <div class="center-container">
                <form id="personalDetailsForm">
                    <fieldset>
                        <legend>
                            <h3>PERSONAL DETAILS</h3>
                        </legend>
                        <div class="personal-details">
                            <label for="fname">First Name:</label>
                            <input type="text" id="fname" name="fname">
                            <span id="fnameValidation" class="validation-error"></span>
                            <br>
    
                            <label for="lname">Last Name:</label>
                            <input type="text" id="lname" name="lname">
                            <span id="lnameValidation" class="validation-error"></span>
                            <br/>

                            <label for="tel">Telephone Number:</label>
                            <input type="text" id="tel" name="tel">
                            <span id="telValidation" class="validation-error"></span>
                            <br>

                            <label for="cell">Cellphone:</label>
                            <input type="text" id="cell" name="cell">
                            <span id="cellValidation" class="validation-error"></span>
                            <br>

                            <label for="email">Email:</label>
                            <input type="text" id="email" name="email">
                            <span id="emailValidation" class="validation-error"></span>
                            <br/>

                            <div id="citizenContainer">
                                <label for="citizen">Are you a South African Citizen?</label>
                                <input type="radio" value="true" id="citizenYes" name="citizen"/>Yes
                                <input type="radio" value="false" id="citizenNo" name="citizen"/>No
                                <span id="citizenValidation" class="validation-error"></span>
                            </div>

                            <label for="idNumber">ID/Passport Number:</label>
                            <input type="text" id="idNumber" name="idNumber">
                            <span id="idNumberValidation" class="validation-error"></span>
                            <br>

                            <label for="license">Driving License:</label>
                            <select id="license" name="license">
                                <option value="">Select Driver's License</option>
                            </select>
                            <br/>

                            <label for="yos">Year of Study:</label>
                            <select id="yos" name="yos">
                                <option value="">Select Year of Study</option>
                            </select>
                            <br>

                            <label for="faculty">Faculty:</label>
                            <select id="faculty" name="faculty">
                                <option value="">Select Faculty</option>
                            </select>
                            <br>

                            <label for="department">Department:</label>
                            <select id="department" name="department">
                                <option value="">Select Department</option>
                            </select>
                            <br/>

                            <label for="objective">Career Objective:</label>
                            <textarea id="objective" name="objective"></textarea>
                            <span id="objectiveValidation" class="validation-error"></span>
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
                    </fieldset>
                    <button>Save</button>
                </form>
            </div>
           
        `;
    }

    async afterRender() {

        const form = document.getElementById("personalDetailsForm");

        form.addEventListener("submit", (e) => {
            if (!validateForm()){
                e.preventDefault();
            }
        })
    }


}