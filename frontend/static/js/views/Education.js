import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Education");
  }

  async getHtml() {
    return `
            <nav class="navbar">
                <a href="/PersonalDetails" class="nav__link">Personal Details</a>
                <a href="/Education" class="nav__link active">Education</a>
                <a href="/WorkExperience" class="nav__link">Work Experience</a>
                <a href="/Referees" class="nav__link">Referees</a>
                <a href="/GenerateCV" class="nav__link generate-cv">Generate CV</a>
            </nav>

            <br>

            <div class="education__section">

                <table class="education__table">
                    <thead>
                        <tr>
                        <th>Institution</th>
                        <th>Start date</th>
                        <th>End date</th>
                        <th>Qualification name</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>University of witwatersrand</td>
                            <td>20/12/2019</td>
                            <td>20/12/2022</td>
                            <td>BSc - Computer Science</td>
                            <td><a id="1" href="#" open-edu>View details</a></td>
                        </tr>

                        <tr>
                            <td>University of johannesburg</td>
                            <td>20/12/2019</td>
                            <td>20/12/2022</td>
                            <td>Eng - Electrical eng</td>
                            <td><a id="2" href="#" open-edu>View details</a></td>
                        </tr>

                    </tbody>
                </table>


                <a href="#education" class="add__education"> <p id="add__sign"> + </p> <p>Add education</p> </a>
            </div>
            <section class="education" id="education">
                <form action="" class="education__info">
                    <label for="institutionName">Institution: </label>
                    <input type="text" id="institutionName" name="institutionName">

                    <label for="qualificationName">Qualification name: </label>
                    <input type="text" id="qualificationName" name="qualificationName">
            
                    <label for="startDate">Start date: </label>
                    <input type="date" id="startDate" name="startDate">
            
                    <label for="endtDate">End date: </label>
                    <input type="date" id="endtDate" name="endtDate">
            
                    <label for="subjects">Subjects: </label>
                    <input type="text" id="subjects" name="subjects">
            
                    <label for="majors">Majors: </label>
                    <input type="text" id="majors" name="majors">
            
                    <label for="subMajors">Sub majors: </label>
                    <input type="text" id="subMajors" name="subMajors">
            
                    <label for="research">Research: </label>
                    <input type="text" id="research" name="research">
            
                    <button type="submit">Save changes</button>
                    <button type="submit">Edit</button>
                    <button type="submit">Delete</button>
                </form>

                <button id="closeformbbbtn">Close Form</button>
                <script src="/frontend/static/js/validations/validatePersonalDetails.js"></script>
            </section>

            
        `;
  }
}
