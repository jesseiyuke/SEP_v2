import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Questions for the Interviewer/s");
    }

    async getHtml() {
        return new Promise(resolve => {
            const container = document.createElement("div");
            container.classList.add("center-list");

            const heading = document.createElement("h1");
            heading.textContent = "Questions for the Interviewer/s";

            const ul = document.createElement("ul");
            const questions = [
                "What is the company’s policies regarding training & development of employees?",
                "What is the management structure of the department in which I will be working?",
                "What would you describe as the company’s strongest values?",
                "What characteristics do you look for in employees in order to represent those values?",
                "What do you value about working for this company?"
            ];

            questions.forEach(questionText => {
                const li = document.createElement("li");
                li.textContent = questionText;
                ul.appendChild(li);
            });

            const backButton = document.createElement("a");
            backButton.href = "/SelfCareerAwareness";
            backButton.dataset.link = true;
            backButton.textContent = "Back";

            const nextButton = document.createElement("a");
            nextButton.href = "/KeyAreas";
            nextButton.dataset.link = true;
            nextButton.textContent = "Next";

            const paragraph = document.createElement("p");
            paragraph.appendChild(backButton);
            paragraph.appendChild(nextButton);

            container.appendChild(heading);
            container.appendChild(ul);
            container.appendChild(paragraph);

            resolve(container);
        });
    }
}
