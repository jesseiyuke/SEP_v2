import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Questions for the Interviewer/s");
    }

    async getHtml() {
        return `
            <h1>Questions for the Interviewer/s</h1>
            <ul>
                <li>Thank the panel for the interview</li>
                <li>Debrief the interview with a friend
                    <ul>
                        <li>How you felt</li>
                        <li>What was challenging</li>
                        <li>Where you excelled</li>
                        <li>What you might want to do differently</li>
                    </ul>
                </li>
                <li>Give yourself a treat…You’ve earned it!</li>
            </ul>

            <p>
            <a href="/KeyAreas" data-link>Back</a>
            </p>
        `;
    }
}