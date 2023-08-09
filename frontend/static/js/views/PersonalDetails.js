import AbstractView from "./AbstractView.js";
import { validateForm } from "../validations/validatePersonalDetails.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Personal Details");
        const name = "PersonalDetails";
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
            <div class="details-container">
                <form id="personalDetailsForm">
                    <fieldset disabled>
                        <br>
                        <div>
                            <div class="floating-label-content">
                                <label for="fname">First Name</label>
                                <input type="text" class="floating-input disable" id="fname" name="fname" readonly>
                                <span id="fnameValidation" class="validation-error"></span>
                            </div>
                            <div class="floating-label-content">
                                <label for="lname">Last Name</label>
                                <input type="text" class="floating-input disable" id="lname" name="lname" readonly>
                                <span id="lnameValidation" class="validation-error"></span>
                            </div>
                            <div class="floating-label-content">
                                <label for="email">Email</label>
                                <input type="text" class="floating-input disable" id="email" name="email" readonly>
                                <span id="emailValidation" class="validation-error"></span>
                            </div>
                        </div>
                    </fieldset>
                    <div class="div-border"></div>
                    <fieldset>
                        <br/>
                        <div>
                            <div class="floating-label-content">
                                <input type="text" class="floating-input" id="address" name="address" placeholder=" ">
                                <label for="address" class="floating-label">Address</label>
                                <span id="addressValidation" class="validation-error"></span>
                            </div>
                        </div>
                        <div>
                            <div id="citizenContainer" class="floating-label-content radio-group">
                                <label for="citizen">Are you a South African Citizen?</label>
                                <div>
                                    <input type="radio" value="true" id="citizenYes" name="citizen"/>Yes
                                    <input type="radio" value="false" id="citizenNo" name="citizen"/>No
                                </div>
                                <span id="citizenValidation" class="validation-error"></span>
                            </div>
                            <div class="floating-label-content">
                                <select id="nationality" name="nationality" class="floating-select"
                                onclick="this.setAttribute('value', this.value);" onchange="this.setAttribute('value', this.value);" value="">
                                    <option value=""></option>
                                </select>
                                <label for="nationality" class="floating-label">Nationality</label>
                                <span id="nationalityValidation" class="validation-error"></span>
                            </div>
                            <div class="floating-label-content">
                                <input type="text" class="floating-input" id="idNumber" name="idNumber" placeholder=" ">
                                <label for="idNumber" class="floating-label">ID/Passport Number</label>
                                <span id="idNumberValidation" class="validation-error"></span>
                            </div>
                        </div>
                        <div>
                            <div class="floating-label-content">
                                <select id="gender" name="gender" class="floating-select"
                                onclick="this.setAttribute('value', this.value);" onchange="this.setAttribute('value', this.value);" value="">
                                    <option value=""></option>
                                </select>
                                <label for="gender" class="floating-label">Gender</label>
                                <span id="genderValidation" class="validation-error"></span>
                            </div>
                            <div class="floating-label-content">
                                <select id="race" name="race" class="floating-select"
                                onclick="this.setAttribute('value', this.value);" onchange="this.setAttribute('value', this.value);" value="">
                                    <option value=""></option>
                                </select>
                                <label for="race" class="floating-label">Race</label>
                                <span id="raceValidation" class="validation-error"></span>
                            </div>
                            <div class="floating-label-content">
                                <select class="floating-select" id="license" name="license" 
                                onclick="this.setAttribute('value', this.value);" onchange="this.setAttribute('value', this.value);" value="">
                                    <option value=""></option>
                                </select>
                                <label for="license" class="floating-label">Driver's License</label>
                                <span id="licenseValidation" class="validation-error"></span>
                            </div>
                        </div>
                    </fieldset>
                    <div class="div-border"></div>
                    <fieldset>
                        <br/>
                        <div>
                            <div class="floating-label-content">
                                <select id="yos" name="yos" class="floating-select"
                                onclick="this.setAttribute('value', this.value);" onchange="this.setAttribute('value', this.value);" value="">
                                    <option value=""></option>
                                </select>
                                <label for="yos" class="floating-label">Year of Study</label>
                                <span id="yosValidation" class="validation-error"></span>
                            </div>
                            <div class="floating-label-content">
                                <select id="faculty" name="faculty" class="floating-select"
                                onclick="this.setAttribute('value', this.value);" onchange="this.setAttribute('value', this.value);" value="">
                                    <option value=""></option>
                                </select>
                                <label for="faculty" class="floating-label">Faculty</label>
                                <span id="facultyValidation" class="validation-error"></span>
                            </div>
                            <div class="floating-label-content">
                                <select id="department" name="department" class="floating-select"
                                onclick="this.setAttribute('value', this.value);" onchange="this.setAttribute('value', this.value);" value="">
                                    <option value=""></option>
                                </select>
                                <label for="department" class="floating-label">Department</label>
                                <span id="departmentValidation" class="validation-error"></span>
                            </div>
                        </div>
                    </fieldset>
                    <div class="div-border"></div>
                    <fieldset>
                        <br/>
                        <div class="floating-label-content">
                            <label for="objective">Career Objective</label>
                            <textarea id="objective" name="objective" class="floating-input" placeholder=" "></textarea>
                            <span id="objectiveValidation" class="validation-error"></span>
                        </div>
                        <div class="floating-label-content">
                            <label for="skills">Skills (please enter every skill on a new line)</label>
                            <textarea id="skills" name="skills" class="floating-input"></textarea>
                            <span id="skillsValidation" class="validation-error"></span>
                        </div>
                        <div class="floating-label-content">
                            <label for="achievements">Achievements (please enter every achievement on a new line)</label>
                            <textarea id="achievements" name="achievements" class="floating-input"></textarea>
                            <span id="achievementsValidation" class="validation-error"></span>
                        </div>
                    </fieldset>
                    <div class="button-container">
                        <button class="button-discard">Discard</button>
                        <button id="submitButton" class="button-save">Save</button>
                    </div>
                </form>
            </div>
           
        `;
    }


}

/* <div class="floating-label-content column">
        <input type="text" class="floating-input" id="cell" name="cell" placeholder="Please enter your cellphone number.">
        <label for="cell" class="floating-label">Cellphone Number</label>
        <span id="cellValidation" class="validation-error"></span>
    </div> */

