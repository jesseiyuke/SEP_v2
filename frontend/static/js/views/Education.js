import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Education");
  }
  async addEventListener(){
        const add=document.querySelector(".add__education");
        add.addEventListener("click",()=>{
            console.log("Add clicked");
        });
  }

  async getHtml() {
    return `
            <nav class="navbar">
                <a href="/PersonalDetails" class="nav_link">Personal Details</a>
                <a href="/Education" class="nav_link active">Education</a>
                <a href="/WorkExperience" class="nav_link">Work Experience</a>
                <a href="/Referees" class="nav_link">Referees</a>
                <a href="/GenerateCV" class="nav_link generate-cv">Generate CV</a>
            </nav>

            <br>

            <div class="education__section">

                <table class="education__table" id="educationTable">
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
                        
                    </tbody>
                </table>
                <div class="education__card">
                    <div>
                        <h4>Bsc - Computer Science </h4> 
                    </div>
                </div>

                <a href="#" class="add__education" create-education> Add education </a>

            </div>
            <section class="education" id="education">
                <div class="form__close">
                    <button id="closeformbbbtn"> X </button>
                </div>
                <form action="" class="education__info">
                    <div class="form__mainitems">
                        <div>
                            <label for="institutionName">Institution: </label>
                            <input type="text" id="institutionName" name="institutionName">
                        </div>
                        <div>
                            <label for="qualificationName">Qualification name: </label>
                            <input type="text" id="qualificationName" name="qualificationName">
                        </div>
                    </div>
                    
                    <div class="form__mainitems">
                        <div>
                            <label for="startDate">Start date: </label>
                            <input type="date" id="startDate" name="startDate">
                        </div>
                        <div>               
                            <label for="endtDate">End date: </label>
                            <input type="date" id="endtDate" name="endtDate">
                        </div>
                    </div>

                    <div class="form__mainitems">
                        <div>
                            <label for="subjects">Subjects: </label>
                            <input type="text" id="subjects" name="subjects">
                        </div>
                        <div>  
                            <label for="majors">Majors: </label>
                            <input type="text" id="majors" name="majors">
                        </div>
                    </div>
                    <div class="form__mainitems">
                        <div>
                            <label for="subMajors">Sub majors: </label>
                            <input type="text" id="subMajors" name="subMajors">
                        </div>
                        <div>  
                            <label for="research">Research: </label>
                            <input type="text" id="research" name="research">
                        </div>
                    </div>
                    <div class="formClass__buttons">
                        <button type="submit">Edit</button>
                        <button type="submit">Delete</button>
                        <button type="submit">Save changes</button>
                    </div>

                </form>
                
            </section>
            
            
        `;
  }
}
// <tr>
//     <td>University of witwatersrand</td>
//     <td>20/12/2019</td>
//     <td>20/12/2022</td>
//     <td>BSc - Computer Science</td>
//     <td><a id="1" href="#" open-edu>View details</a></td>
// </tr>

// <tr>
//     <td>University of johannesburg</td>
//     <td>20/12/2019</td>
//     <td>20/12/2022</td>
//     <td>Eng - Electrical eng</td>
//     <td><a id="2" href="#" open-edu>View details</a></td>
// </tr>
//<p id="add__sign"> + </p> <p id="add__word"> </p>
