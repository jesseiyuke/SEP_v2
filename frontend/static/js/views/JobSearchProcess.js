import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Job Search Process");
    }

    async getHtml() {
        return `
        <h1>Job Search Process</h1>
        <p>
        <ul>
            <li>Application [CV & CL; Application form; Online Application]</li>
            <li>Assessments</li>
            <li>Job Interview/s</li>
            <li>Job Offer</li>
        </ul> 
        </p>
        <p>
        <a href="/BeforeInterview" data-link>Next</a>
        </p>
        `;
    }
}