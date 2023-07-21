import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Interview Skills");
    }

    async getHtml() {
        return `
        <h1>The Job Interview</h1>
        <p>
        A guide to preparation
        </p>
        <p>
            <a href="/JobSearchProcess" data-link>Start guide</a>
        </p>
           
        `;
    }
}