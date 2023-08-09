import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Work Experience");
    }

    async getHtml() {
        return `
            <nav class="navbar">
                <a href="/PersonalDetails" class="nav_link">Personal Details</a>
                <a href="/Education" class="nav_link">Education</a>
                <a href="/WorkExperience" class="nav_link active">Work Experience</a>
                <a href="/Referees" class="nav_link">Referees</a>
                <a href="/GenerateCV" class="nav_link generate-cv">Generate CV</a>
            </nav>

            <br>

            <div class="exprience__section">
                <table class="exprience__table" id="exprienceTable">
                    <thead>
                        <tr>
                        <th>Employer name</th>
                        <th>Start date</th>
                        <th>End date</th>
                        <th>Job title name</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>

                <a href="#" class="add__exprience" create-exprience> Add exprience </a>

            </div>
            <section class="exprience" id="exprience">
                <div class="form__close">
                    <button id="closeformbbbtn"> X </button>
                </div>
                <form action="" class="exprience__info">
                    <div class="form__mainitems">
                        <div>
                            <label for="employerName">Employer name: </label>
                            <input type="text" id="employerName" name="employerName">
                        </div>
                        <div>
                            <label for="jobTitle">Job title: </label>
                            <input type="text" id="jobTitle" name="jobTitle">
                        </div>
                    </div>
                    
                    <div class="form__mainitems">
                        <div>
                            <label for="startDate">Start date: </label>
                            <input type="date" id="startDate" name="startDate">
                        </div>
                        <div>               
                            <label for="endtDate">End date: </label>
                            <input type="date" id="endtDate" name="endtDate">
                        </div>
                    </div>

                    <div class="form__mainitems">
                        <div>
                            <label for="tasksAndResponsibilities">Tasks and responsibilities: </label>
                            <input type="text" id="tasksAndResponsibilities" name="tasksAndResponsibilities">
                        </div>
                    </div>
                    <div class="formClass__buttons">
                        <button type="submit">Edit</button>
                        <button type="submit">Delete</button>
                        <button type="submit">Save changes</button>
                    </div>
                </form>
            </section>
        `;
    }
}