import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Referees");
    }

    async getHtml() {
        return `
            <nav class="navbar">
                <a href="/PersonalDetails" class="nav__link">Personal Details</a>
                <a href="/Education" class="nav__link">Education</a>
                <a href="/WorkExperience" class="nav__link">Work Experience</a>
                <a href="/Referees" class="nav__link active">Referees</a>
                <a href="/GenerateCV" class="nav__link generate-cv">Generate CV</a>
            </nav>

            <br>

            <div class="referee__section">

                <table class="referee__table" id="refereeTable">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Institution</th>
                        <th>Position</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>

                <a href="#" class="add__referee" create-referee> Add referee </a>

            </div>
            <section class="referee" id="referee">
                <div class="form__close">
                    <button id="closeformbbbtn"> X </button>
                </div>
                <form action="" class="referee__info">
                    <div class="form__mainitems">
                        <div>
                            <label for="name">Refree name: </label>
                            <input type="text" id="name" name="name">
                        </div>
                        <div>
                            <label for="jobTitle">Job title: </label>
                            <input type="text" id="jobTitle" name="jobTitle">
                        </div>
                    </div>
                    
                    <div class="form__mainitems">
                        <div>
                            <label for="insitution">Insitution: </label>
                            <input type="text" id="insitution" name="insitution">
                        </div>
                    </div>

                    <div class="form__mainitems">
                        <div>
                            <label for="email">Email: </label>
                            <input type="email" id="email" name="email">
                        </div>
                        <div>               
                            <label for="cell">Contact number: </label>
                            <input type="tel" id="cell" name="cell">
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