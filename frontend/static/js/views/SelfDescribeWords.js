import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Self Describing Words");
    }

    async getHtml() {
        return `
            <h1>Self Describing Words</h1>
            <p>Analytical
            Calculated Committed Conscientious Dedicated
            Diligent
            Disciplined Eager Engaged Entrepreneurial
            Focused Hardworking Industrious Initiator Insightful
            Inventive
            Entrepreneurial Focused Hardworking Industrious
            Initiator
            Insightful Inventive Persistent Persuasive
            Practiced Proactive Reliable Resourceful Skillful
            Tenacious
            Thorough Attentive Collaborative Compassionate
            Cooperative Diplomatic Direct Empathetic Flexible
            Helpful
            Patient Respectful Responsive Sincere
            Supportive
            Tolerant Creative Adaptable Proactive</p>

            <p>
            <a href="/TellYourself" data-link>Back</a>
            </p>
        `;
    }
}