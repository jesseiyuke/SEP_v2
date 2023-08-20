export default class AbstractView {
    constructor(params) {
        this.params = params;
    }

    setTitle(title) {
        document.title = title;
    }

    async getHtml() {
        return "";
    }

    async render() {
        const content = await this.getHtml();
        const appContainer = document.getElementById("app");
        appContainer.innerHTML = ''; // Clear existing content
        appContainer.appendChild(content);
    }
}
