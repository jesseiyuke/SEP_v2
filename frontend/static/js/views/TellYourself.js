import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
            <h1>Tell me about yourself</h1>
            <p>
            <ul>
            <li>Personal background</li>
            <li>Hobbies and interests</li>
            <li>Biggest achievements</li>
            <liCareer plans</li>
    
            <li>Your strongest personal attributes
              <ul>
                <li>At least one thing that you excel at</li>
              </ul>
            </li>

            <li>Not more than 2 min</li>  
          </ul> 
            </p>

            <p>
            <a href="/DuringInterview" data-link>Back</a>
            <a href="/SelfDescribeWords" data-link>Next</a>
            </p>
        `;
    }
}