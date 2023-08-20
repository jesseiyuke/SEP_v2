import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Self & Career Awareness");
    }

    async getHtml() {
        return `
            <h1>Self & Career Awareness</h1>
            <div class="center-list">
                <ul>
                    <li>My strongest personal attributes are [Interpersonal, Personality, Academic, Technical] …</li>
                    <li>My education has prepared me for…</li>
                    <li>My studies have been relevant for my career plans in that…</li>
                    <li>My most developed skills are…</li>
                    <li>My weaknesses or areas for growth are…</li>
                    <li>My biggest achievements are… (Indicate why you consider these to be your biggest achievements.)</li>
                    <li><strong>I consider myself a desirable candidate because…</strong></li>
                    <li>My biggest challenges in reaching my goals have been…</li>
                    <li>My strengths in a team are…
                        <ul>
                            <li>Explore Belbin’s Team Roles.</li>
                        </ul>
                    </li>
                    <li>My strongest leadership attributes are…
                        <ul>
                            <li>Think of a couple of leadership attributes that describe you best.</li>
                        </ul>
                    </li>
                    <li>If I were one of two people shortlisted for this position, this position should be offered to me because…</li>
                </ul>

                <p>
                <a href="/SelfDescribeWords" data-link>Back</a>
                <a href="/Questions" data-link>Next</a>
                </p>
            </div>
        `;
    }
}