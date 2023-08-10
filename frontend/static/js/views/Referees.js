import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Referees");
    }

    async getHtml() {
        return `
            <nav class="navbar">
                <a href="/PersonalDetails" class="nav_link" data-link>Personal Details</a>
                <a href="/Education" class="nav_link" data-link>Education</a>
                <a href="/WorkExperience" class="nav_link" data-link>Work Experience</a>
                <a href="/Referees" class="nav_link active" data-link>Referees</a>
                <a href="/GenerateCV" class="nav_link generate-cv" data-link>Generate CV</a>
            </nav>
            
        `;
    }
}