import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Self Describing Words");
    }

    async getHtml() {
        return `
            <h1>Self Describing Words</h1>

            <div class="center-list">
                <div class="word-list">
                    <span class="word">Analytical</span>
                    <span class="word">Calculated</span>
                    <span class="word">Committed</span>
                    <span class="word">Conscientious</span>
                    <span class="word">Dedicated</span>
                    <span class="word">Diligent</span>
                    <span class="word">Disciplined</span>
                    <span class="word">Eager</span>
                    <span class="word">Engaged</span>
                    <span class="word">Entrepreneurial</span>
                    <span class="word">Focused</span>
                    <span class="word">Hardworking</span>
                    <span class="word">Industrious</span>
                    <span class="word">Initiator</span>
                    <span class="word">Insightful</span>
                    <span class="word">Inventive</span>
                    <span class="word">Persistent</span>
                    <span class="word">Persuasive</span>
                    <span class="word">Practiced</span>
                    <span class="word">Proactive</span>
                    <span class="word">Reliable</span>
                    <span class="word">Resourceful</span>
                    <span class="word">Skillful</span>
                    <span class="word">Tenacious</span>
                    <span class="word">Thorough</span>
                    <span class="word">Attentive</span>
                    <span class="word">Collaborative</span>
                    <span class="word">Compassionate</span>
                    <span class="word">Cooperative</span>
                    <span class="word">Diplomatic</span>
                    <span class="word">Direct</span>
                    <span class="word">Empathetic</span>
                    <span class="word">Flexible</span>
                    <span class="word">Helpful</span>
                    <span class="word">Patient</span>
                    <span class="word">Respectful</span>
                    <span class="word">Responsive</span>
                    <span class="word">Sincere</span>
                    <span class="word">Supportive</span>
                    <span class="word">Tolerant</span>
                    <span class="word">Creative</span>
                    <span class="word">Adaptable</span>
                    <span class="word">Proactive</span>
                </div>

            

            <p>
            <a href="/TellYourself" data-link>Back</a>
            <a href="/SelfCareerAwareness" data-link>Next</a>
            </p>
            </div>



        `;
    }
}