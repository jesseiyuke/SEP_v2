import Home from "./views/Home.js";
import Profile from "./views/Profile.js";
import PersonalDetails from "./views/PersonalDetails.js";
import Education from "./views/Education.js";
import WorkExperience from "./views/WorkExperience.js";
import Referees from "./views/Referees.js";
import Posts from "./views/Posts.js";
import PostView from "./views/PostView.js";
import InterviewSkills from "./views/InterviewSkills.js";
import JobSearchProcess from "./views/JobSearchProcess.js";
import BeforeInterview from "./views/BeforeInterview.js";
import DuringInterview from "./views/DuringInterview.js";
import TellYourself from "./views/TellYourself.js";
import SelfDescribeWords from "./views/SelfDescribeWords.js";

import { validateForm } from "./validations/validatePersonalDetails.js";

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: Home },
        // { path: "/Profile", view: Profile},
        {path: "/PersonalDetails", view: PersonalDetails},
        { path: "/Education", view: Education},
        { path: "/WorkExperience", view: WorkExperience},
        { path: "/Referees", view: Referees},
        { path: "/posts", view: Posts },
        { path: "/posts/:id", view: PostView },
        { path: "/interview_skills", view: InterviewSkills},
        { path: "/JobSearchProcess", view: JobSearchProcess},
        { path: "/BeforeInterview", view: BeforeInterview},
        { path: "/DuringInterview", view: DuringInterview},
        { path: "/TellYourself", view: TellYourself},
        { path: "/SelfDescribeWords", view: SelfDescribeWords},
        
        
    ];

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));

    document.querySelector('#app').innerHTML = await view.getHtml();

    if (match.route.path === "/PersonalDetails") {
        await fetchStudentProfile();
        validateForms();
        await submitForm();
    }
    
};

window.addEventListener("popstate", router);


// Get the anchor element
/* const anchorElement = document.querySelector('a.nav__link');

// Add a click event listener to the anchor element
anchorElement.addEventListener('click', function(event) {
    // Prevent the default behavior of the anchor (e.g., navigating to the href URL)
    event.preventDefault();

 

    // Check if the actual target of the click event is the anchor itself
    if (event.target === anchorElement) {
        // The click was on the anchor element, and you can handle the click action here
        // For example, you can redirect to the link's URL manually:
        window.location.href = anchorElement.getAttribute('href');
        navigateTo(window.location.href);
    }
}); */

// document.addEventListener("DOMContentLoaded", () => {
//     document.body.addEventListener("click", e => {
//         if ( e.target === anchorElement) {
//             console.log("Clicked element is <i> tag");
//             e.preventDefault();
//             navigateTo(e.target.href);
//         }
//     });

//     router();
// });

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            // console.log(e.target);
            // console.log("Clicked element is <i> tag");
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});

//|| || e.target.matches('#myLink i')
//e.target.matches("[data-link]")

//Arrows
let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
//  console.log(arrowParent);
 arrowParent.classList.toggle("showMenu");
  });
}

//Open-close sidebar
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
// console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
});

document.addEventListener("DOMContentLoaded", () =>{

    let button = document.getElementById("closeformbbbtn");
    var form = document.getElementById("education");
    let openbtn = document.getElementById("openeduc")
    button.addEventListener("click", () => {

            form.style.display = "none";
            console.log("none working");

    });

    document.body.addEventListener("click", e => {
        if (e.target.matches("[open-edu]")) {
            console.log(e.target.id);
            e.preventDefault();
            form.style.display = "block";
            console.log("block working");
        }
    });

    // openbtn.addEventListener("click", () => {

    //         form.style.display = "block";
    //         console.log("block working");
    // });


});

/* fetch data from API endpoint and populate the dropdowns*/
async function populateDropdowns() {

    //Populate Gender dropdown
    const genderRes = await fetch('https://localhost:7013/api/Lookup/Genders');
    const gender = await genderRes.json();

    const genderSelect = document.querySelector("#gender");
    gender.forEach(g => {
        const option = document.createElement("option");
        option.value = g.id;
        option.textContent = g.name;
        genderSelect.appendChild(option);
    });

    //Populate Race dropdown
    const raceRes = await fetch('https://localhost:7013/api/Lookup/Races');
    const race = await raceRes.json();

    const raceSelect = document.querySelector("#race");
    race.forEach(r => {
        const option = document.createElement("option");
        option.value = r.id;
        option.textContent = r.name;
        raceSelect.appendChild(option);
    });

    //Populate License dropdown
    const licenseRes = await fetch('https://localhost:7013/api/Lookup/DriversLicense');
    const license = await licenseRes.json();

    const licenseSelect = document.querySelector("#license");
    license.forEach(l => {
        const option = document.createElement("option");
        option.value = l.id;
        option.textContent = l.type;
        licenseSelect.appendChild(option);
    });

    //Populate YOS dropdown
    const yosRes = await fetch('https://localhost:7013/api/Lookup/YearOfStudy');
    const YOS = await yosRes.json();

    const yosSelect = document.querySelector("#yos");
    YOS.forEach(y => {
        const option = document.createElement("option");
        option.value = y.id;
        option.textContent = y.name;
        yosSelect.appendChild(option);
    });

    // Populate Faculty and Department dropdowns (add cascading dropdown effect)
    const departmentRes = await fetch('https://localhost:7013/api/Lookup/Departments');
    const department = await departmentRes.json();

    const depSelect = document.querySelector("#department");
    const facultySelect = document.querySelector("#faculty");

    const faculties = {};

    department.forEach(d => {
        
        if (!faculties[d.facultyId])
        {
            const option = document.createElement("option");
            option.value = d.faculty.id;
            option.textContent = d.faculty.name;
            facultySelect.appendChild(option);
            faculties[d.facultyId] = true;
        }
    });

    facultySelect.addEventListener("change", () => {
        const selectedFacultyId = parseInt(facultySelect.value);
        depSelect.innerHTML = "";
        resetDepartments(depSelect);
        populateDepartments(selectedFacultyId, depSelect, department);
    });
};

// Populate departments based on the selected faculty
async function populateDepartments(facultyId, depSelect)
{
    // Populate departements dropdown by faculty
    const departmentRes = await fetch('https://localhost:7013/api/Lookup/Departments');
    const department = await departmentRes.json();

    // const depSelect = document.querySelector("#department");

    const selectedFacultyId = parseInt(facultyId);

    const departments = department.filter(
        dep => dep.facultyId === selectedFacultyId
    );
    console.log(departments);

    departments.forEach(d => {
        const option = document.createElement("option");
        option.value = d.id; // Set the value to the ID, you can use a different property if needed.
        option.textContent = d.name; // Display the course name in the dropdown.
        depSelect.appendChild(option);    
    });
}

function resetDepartments(depSelect)
{
    const def = document.createElement("option");
    def.id = "";
    def.name = "";

    depSelect.appendChild(def);
}

function autoAdjustTextarea()
{
    // auto-adjust the text area, based on input
    const textareas = document.querySelectorAll("textarea");
    
    function adjustTextareaHeight(textarea) {
        textarea.style.height = "auto";
        textarea.style.height = (textarea.scrollHeight) + "px";
    }
    
    textareas.forEach(function(textarea) {
        textarea.setAttribute("style", "height:" + (textarea.scrollHeight) + "px;overflow-y:hidden;");
        textarea.addEventListener("input", function() {
            adjustTextareaHeight(this);
        });
    });
}
// Function to fetch the student's details from the API endpoint
async function fetchStudentProfile()
{
    // disclaimer: will have to use id of current logged in user
    // for now, using the seeded data for testing purposes
    const studentRes = await fetch("https://localhost:7013/api/CV/Get Student profile?StudentId=851b1523-dc11-4d55-8878-2afc78a94d3c");
    const student = await studentRes.json();
    console.log(student);

    const facultyId = student.department.faculty.id;
    const departmentId = student.department.id
    
    await populateDropdowns();

    await populateDepartments(facultyId, document.querySelector("#department"));

    document.getElementById("fname").value = student.user.firstName;
    document.getElementById("lname").value = student.user.lastName;
    // document.getElementById("cell");
    document.getElementById("email").value = student.user.email;

    if (student.nationality.name === "South African"){
        document.getElementById("citizenYes").checked = true;
        document.getElementById("citizenNo").checked = false;
    } else {
        document.getElementById("citizenYes").checked = false;
        document.getElementById("citizenNo").checked = true;
    }
    
    document.getElementById("idNumber").value = student.idNumber;
    document.getElementById("gender").value = student.gender.id;
    document.getElementById("race").value = student.race.id;
    document.getElementById("license").value = student.driversLicense.id;
    document.getElementById("yos").value = student.yearOfStudy.id;

    document.getElementById("department").value = departmentId;
    document.getElementById("faculty").value = facultyId;
    
    document.getElementById("objective").value = student.careerObjective;

    const skills = student.skills.split(", ");
    const skillsContainer = document.querySelector("#skills");

    const skillsList = [];

    skills.forEach(item => {
        skillsList.push(item)
    });

    skillsContainer.value = skillsList.join("\n");

    document.getElementById("achievements").value = student.achivements;
    
    autoAdjustTextarea();

}

function validateForms() {
    const form = document.getElementById("personalDetailsForm");

    form.addEventListener("submit", (e) => {
        if (!validateForm()){
            e.preventDefault();
        }
    })
}

async function submitForm() {
    
    const saveButton = document.querySelector("#submitButton");

    saveButton.addEventListener("click", async () => {
        
        // Collect updated data from form fields
        const updatedData = {
            user: {
                firstName: document.querySelector("#fname").value,
                lastName: document.querySelector("#lname").value,
                email: document.querySelector("#email").value
            },
            idNumber: document.querySelector("#idNumber").value,
            driversLicense: {
                id: document.querySelector("#license").value,
                type: document.querySelector("#license").textContent
            },
            careerObjective: document.querySelector("#objective").value,
            gender: {
                id: document.querySelector("#gender").value,
                name: document.querySelector("#gender").textContent
            },
            race: {
                id: document.querySelector("#race").value,
                name: document.querySelector("#race").textContent
            },
            yearOfStudy: {
                id: document.querySelector("#yos").value,
                name: document.querySelector("#yos").textContent,
            },
            department: {
                id: document.querySelector("#department").value,
                name: document.querySelector("#department").textContent,
                faculty: {
                    id: document.querySelector("#faculty").value,
                    name: document.querySelector("#faculty").textContent
                }
            },
            skills: document.querySelector("#skills").value,
            achivements: document.querySelector("#achievements").value
        };

        // Send the updated data to the API endpoint
        try {
            const response = await fetch('https://localhost:7013/api/CV/UpdateStudent/e97bf092-5e39-40b6-a718-25fca73cfe5d', {
                method: 'PUT', // Use the appropriate HTTP method (PUT, POST, etc.)
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData),
            });

            if (response.ok) {
                // Data updated successfully
                console.log('Data updated successfully');
            } else {
                // Handle error cases
                console.error('Error updating data:', response.statusText);
            }
        } catch (error) {
            console.error('Error updating data:', error);
        }
    });
}
// document.addEventListener("DOMContentLoaded", async () => {

//     // await populateDropdowns();

//     const depSelect = document.querySelector("#department");
//     const facultySelect = document.querySelector("#faculty");

//     facultySelect.addEventListener("change", () => {
//         const selectedFacultyId = parseInt(facultySelect.value);
//         depSelect.innerHTML = "";
//         resetDepartments(depSelect);
//         populateDepartments(selectedFacultyId, depSelect);
//     });

//     const form = document.getElementById("personalDetailsForm");

//     form.addEventListener("submit", (e) => {
//         if (!validateForm()){
//             e.preventDefault();
//         }
//     })

//     const textareas = document.querySelectorAll("textarea");
        
//     function adjustTextareaHeight(textarea) {
//         textarea.style.height = "auto";
//         textarea.style.height = (textarea.scrollHeight) + "px";
//     }
    
//     textareas.forEach(function(textarea) {
//         textarea.setAttribute("style", "height:" + (textarea.scrollHeight) + "px;overflow-y:hidden;");
//         textarea.addEventListener("input", function() {
//             adjustTextareaHeight(this);
//         });
//     });

// });