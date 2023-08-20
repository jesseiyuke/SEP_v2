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
        `;
    }
}