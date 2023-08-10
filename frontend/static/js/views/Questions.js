import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Questions for the Interviewer/s");
    }

    async getHtml() {
        return `
            <h1>Questions for the Interviewer/s</h1>
            <div class="center-list">
                <ul>
                    <li>What is the company’s policies regarding training & development of employees?</li>
                    <li>What is the management structure of the department in which I will be working?</li>
                    <li>What would you describe as the company’s strongest values?</li>
                    <li>What characteristics do you look for in employees in order to represent those values?</li>
                    <li>What do you value about working for this company?</li>
                </ul>

                <p>
                <a href="/SelfCareerAwareness" data-link>Back</a>
                <a href="/KeyAreas" data-link>Next</a>
                </p>
            </div>
        `;
    }
}