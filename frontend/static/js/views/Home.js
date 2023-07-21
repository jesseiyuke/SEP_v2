import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home");
    }

    async getHtml() {
        return `
            <h1>Welcome to the Student Employment Portal</h1>
            <p>
                You can search and apply for jobs, and also update your profile details.
            </p>
            
        `;
    }
}