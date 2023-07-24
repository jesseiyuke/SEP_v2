import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Education");
    }

    async getHtml() {
        return `
            <nav class="navbar">
                <a href="/PersonalDetails" class="nav__link">Personal Details</a>
                <a href="/Education" class="nav__link active">Education</a>
                <a href="/WorkExperience" class="nav__link">Work Experience</a>
                <a href="/Referees" class="nav__link">Referees</a>
                <a href="/GenerateCV" class="nav__link generate-cv">Generate CV</a>
            </nav>
        `;
    }
}