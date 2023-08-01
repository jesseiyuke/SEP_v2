import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
            <h1>Posts</h1>
            <p>You are viewing the available job posts, that fit your criteria.</p>
            <a href="/Apply" class="nav__link" data-link>Apply</a>
        `;
    }
}