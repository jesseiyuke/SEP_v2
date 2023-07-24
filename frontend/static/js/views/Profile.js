import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Student Profile");
    }

    async getHtml() {
        return `
            <div class="container-1">
                <a href="/PersonalDetails" data-link class="button">Personal Details</a>
                <a href="/Education" data-link class="button">Education</a>
                <a href="/WorkExperience" data-link class="button">Work Experience</a>
                <a href="/Referees" data-link class="button">Referees</a>
            </div>

            <hr>
        `;
    }
}