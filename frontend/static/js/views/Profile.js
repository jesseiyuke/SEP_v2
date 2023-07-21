import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Student Profile");
    }

    async getHtml() {
        return `
            <h1>Student Profile</h1>
            <p>You are viewing your profile.</p>
            <form class="form-control">
                <label for="fname">First Name:</label>
                <input type="text" id="fname" name="fname" required>
                <br/>

                <label for="fname">Last Name:</label>
                <input type="text" id="lname" name="lname" required>
                <br/>

                <label for="cell">Cellphone:</label>
                <input type="text" id="cell" name="cell" required>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                <br/>

                <label for="citizen">Are you a South African Citizen?</label>
                <input type="radio" value="true" id="citizenYes" name="citizen"/>Yes
                <input type="radio" value="false" id="citizenNo" name="citizen"/>No

                <label for="idNumber">ID/Passport Number:</label>
                <input type="text" id="idNumber" name="idNumber" required>
                <br/>

                <button type="submit">Save</button>
            </form>
        `;
    }
}