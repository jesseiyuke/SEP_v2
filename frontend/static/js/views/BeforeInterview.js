import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Before the Interview");
    }

    async getHtml() {
        return `
        
        <h1>Before the Interview</h1>

        <div class="center-list">
        <p>
        <ul>
        <li>Ensure that your diary is clear so that you can focus on the upcoming interview</li>

        <li>Organise documents in a neat folder
          <ul>
            <li>CV, Cover Letter, Transcripts</li>
          </ul>
        </li>

        <li>Confirm venue, arrange transport /parking & ample time to get there</li>
        <li>Have an interview suit/outfit ready</li>
        <li>Arrive at least 15-20 Min early and inform the receptionist of your arrival</li>
        <li><strong>Ensure that your mobile phone is switched off"</strong></li>

      </ul> 
        </p>

        <p>
        <a href="/JobSearchProcess" data-link>Back</a>
        <a href="/DuringInterview" data-link>Next</a>
        </p>
        </div>


        `;
    }
}