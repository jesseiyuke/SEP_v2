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

// // listening for the education page to load
// document.addEventListener("DOMContentLoaded", () => {
//   let button = document.getElementById("closeformbbbtn");
//   var form = document.getElementById("education");

//   function addEducationTable(edu) {
//     var tbodyRef = document
//       .getElementById("educationTable")
//       .getElementsByTagName("tbody")[0];
//     for (var i = 0; i < edu.student.qualifications.length; i++) {
//       var education = edu.student.qualifications[i];

//       var newRow = tbodyRef.insertRow();
//       var newCell0 = newRow.insertCell();
//       var newCell1 = newRow.insertCell();
//       var newCell2 = newRow.insertCell();
//       var newCell3 = newRow.insertCell();
//       var newCell4 = newRow.insertCell();

//       newCell0.innerHTML = education.institution;
//       newCell1.innerHTML = education.startDate.split("T")[0];
//       newCell2.innerHTML = education.endDate.split("T")[0];
//       newCell3.innerHTML = education.qualificationTitle;
//       newCell4.innerHTML =
//         "<a id=" + education.id + ' href="#" open-edu>View details</a>';
//     }
//   }

//   function removeFormValue() {
//     var institutionname = document.getElementById("institutionName");
//     var qualificationname = document.getElementById("qualificationName");
//     var startdate = document.getElementById("startDate");
//     var endtdate = document.getElementById("endtDate");
//     var subjects = document.getElementById("subjects");
//     var majors = document.getElementById("majors");
//     var submajors = document.getElementById("subMajors");
//     var research = document.getElementById("research");

//     institutionname.value = "";
//     qualificationname.value = "";
//     startdate.value = "";
//     endtdate.value = "";
//     subjects.value = "";
//     majors.value = "";
//     submajors.value = "";
//     research.value = "";
//   }

//   // fetching json from local server
//   async function getStudent(myCallback) {
//     const response = await fetch(
//       "http://127.0.0.1:5500/data/userdata.json"
//     ).then((res) => res.json());
//     myCallback(response);

//     document.body.addEventListener("click", (e) => {
//       if (e.target.matches("[open-edu]")) {
//         e.preventDefault();

//         const selectedEducation = response.student.qualifications.filter(
//           (qual) => qual.id == e.target.id
//         );
//         var institutionname = document.getElementById("institutionName");
//         var qualificationname = document.getElementById("qualificationName");
//         var startdate = document.getElementById("startDate");
//         var endtdate = document.getElementById("endtDate");
//         var subjects = document.getElementById("subjects");
//         var majors = document.getElementById("majors");
//         var submajors = document.getElementById("subMajors");
//         var research = document.getElementById("research");

//         institutionname.value = selectedEducation[0].institution;
//         qualificationname.value = selectedEducation[0].qualificationTitle;
//         startdate.value = selectedEducation[0].startDate.split('T')[0];
//         endtdate.value = selectedEducation[0].endDate.split('T')[0];
//         subjects.value = selectedEducation[0].subjects;
//         majors.value = selectedEducation[0].majors;
//         submajors.value = selectedEducation[0].subMajors;
//         research.value = selectedEducation[0].research;

//         form.style.display = "block";
//       }
//     });
//   }

//   getStudent(addEducationTable);

//   button.addEventListener("click", () => {
//     form.style.display = "none";
//   });

//   // addneeeducationsign.addEventListener("click", (e) => {
//   //   form.style.display = "block";
//   //   console.log("plus sign working working");
//   // });

//   // addneeeducationword.addEventListener("click", (e) => {
//   //   form.style.display = "block";
//   //   console.log("add word working working");
//   // });

//   document.body.addEventListener("click", (e) => {
//     if (e.target.matches("[create-education]")) {
//       //   console.log("edu id :", e.target.id);
//       e.preventDefault();
//       removeFormValue();
//       form.style.display = "block";
//     }
//   });

//   // openbtn.addEventListener("click", () => {
//   //         form.style.display = "block";
//   //         console.log("block working");
//   // });
// });
