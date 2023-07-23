import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Key areas for observation");
    }

    async getHtml() {
        return `
            <h1>Key areas for observation</h1>
            <ul>
                <li>Communication</li>
                <li>Intellect</li>
                <li>Problem solving</li>
                <li>Leadership</li>
                <li>Teamwork</li>
                <li>Conflict Management</li>
                <li>Time & Stress Management</li>
            </ul>

            <br>

            <ul style="list-style-type:none">
                <li><em>S</em> - Describe the situation</li>
                <li><em>T</em> - Outline the tasks to be performed</li>
                <li><em>A</em> - Talk the Panel through the action steps</li>
                <li><em>R</em> - Summarise with a result</li>
            </ul>

            <h1>Have two examples for each key area</h1>

            <p>
            <a href="/Questions" data-link>Back</a>
            <a href="/AfterTheInterview" data-link>Next</a>
            </p>
        `;
    }
}