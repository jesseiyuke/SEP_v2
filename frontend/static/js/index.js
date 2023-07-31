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

console.log(student);

const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1]
  );

  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values[i]];
    })
  );
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: "/", view: Home },
    // { path: "/Profile", view: Profile},
    { path: "/PersonalDetails", view: PersonalDetails },
    { path: "/Education", view: Education },
    { path: "/WorkExperience", view: WorkExperience },
    { path: "/Referees", view: Referees },
    { path: "/posts", view: Posts },
    { path: "/posts/:id", view: PostView },
    { path: "/interview_skills", view: InterviewSkills },
    { path: "/JobSearchProcess", view: JobSearchProcess },
    { path: "/BeforeInterview", view: BeforeInterview },
    { path: "/DuringInterview", view: DuringInterview },
    { path: "/TellYourself", view: TellYourself },
    { path: "/SelfDescribeWords", view: SelfDescribeWords },
  ];

  // Test each route for potential match
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null
  );

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }

  const view = new match.route.view(getParams(match));

  document.querySelector("#app").innerHTML = await view.getHtml();
  await view.afterRender();

  // console.log(match.route.view());
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
  document.body.addEventListener("click", (e) => {
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
  arrow[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
    //  console.log(arrowParent);
    arrowParent.classList.toggle("showMenu");
  });
}

//Open-close sidebar
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
// console.log(sidebarBtn);
sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

document.addEventListener("DOMContentLoaded", () => {
  let button = document.getElementById("closeformbbbtn");
  var form = document.getElementById("education");
  let addneeeducationsign = document.getElementById("add__sign");
  let addneeeducationword = document.getElementById("add__word");

  var tbodyRef = document
    .getElementById("educationTable")
    .getElementsByTagName("tbody")[0];
  const educationList = `
  { "qualifications": [
    {
        "id": 1,
        "institution": "XYZ University",
        "startDate": "2020-09-01T00:00:00",
        "endDate": "2023-06-30T00:00:00",
        "qualificationTitle": "Bachelor of Computer Science",
        "subjects": "Programming, Algorithms",
        "majors": "Software Engineering",
        "subMajors": "Data Science",
        "research": "Machine Learning"
    },
    {
        "id": 2,
        "institution": "University wits",
        "startDate": "2020-09-01T00:00:00",
        "endDate": "2023-06-30T00:00:00",
        "qualificationTitle": "Programming, Algorithms",
        "subjects": "Programming, Algorithms",
        "majors": "Software Engineering",
        "subMajors": "Data Science",
        "research": "Machine Learning"
        }
    ]
  }
 
    `;

  const edu = JSON.parse(educationList);
  for (var i = 0; i < edu.qualifications.length; i++) {
    var education = edu.qualifications[i];

    var newRow = tbodyRef.insertRow();
    var newCell0 = newRow.insertCell();
    var newCell1 = newRow.insertCell();
    var newCell2 = newRow.insertCell();
    var newCell3 = newRow.insertCell();
    var newCell4 = newRow.insertCell();

    newCell0.innerHTML = education.institution;
    newCell1.innerHTML = education.startDate.split("T")[0];
    newCell2.innerHTML = education.endDate.split("T")[0];
    newCell3.innerHTML = education.qualificationTitle;
    newCell4.innerHTML =
      "<a id=" + education.id + ' href="#" open-edu>View details</a>';
  }

  button.addEventListener("click", () => {
    form.style.display = "none";
    console.log("none working");
  });

  addneeeducationsign.addEventListener("click", (e) => {
    form.style.display = "block";
    console.log("plus sign working working");
  });

  addneeeducationword.addEventListener("click", (e) => {
    form.style.display = "block";
    console.log("add word working working");
  });

  document.body.addEventListener("click", (e) => {
    if (
      e.target.matches("[open-edu]") ||
      e.target.matches("[create-education]")
    ) {
      //console.log("edu id :", e.target.id);

      e.preventDefault();

      const selectedEducation = edu.qualifications.filter(
        (qual) => qual.id == e.target.id
      );
      var institutionname = document.getElementById("institutionName");
      institutionname.value = selectedEducation[0].institution;

      // console.log(selectedEducation[0].institution);

      form.style.display = "block";
      console.log("block working");
    }
  });

  // openbtn.addEventListener("click", () => {
  //         form.style.display = "block";
  //         console.log("block working");
  // });
});
