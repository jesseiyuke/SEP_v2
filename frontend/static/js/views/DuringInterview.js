import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("During the interview");
    }

    async getHtml() {
        return `
            <h1>During the interview</h1>

            <div class="center-list">
            <p>
            <ul>
            <li>Anxiety…Always remind yourself to breathe!!!</li>
            <li>Allow the interviewer to take the lead and direct you to your seat</li>

            <li>Maintain a good upright position and good eye contact</li>
            <li>Allow the interviewer to finish the question before answering</li>
            <li>Ask for clarity if necessary</li>
            <li>Distribute eye contact amongst all the interviewers</li>
    
          </ul> 
            </p>

            <p>
            <a href="/BeforeInterview" data-link>Back</a>
            <a href="/TellYourself" data-link>Next</a>
            </p>
            </div>



        `;
    }
}