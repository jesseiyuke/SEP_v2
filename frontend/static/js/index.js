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

import SelfCareerAwareness from "./views/SelfCareerAwareness.js";
import Questions from "./views/Questions.js";
import KeyAreas from "./views/KeyAreas.js";
import AfterTheInterview from "./views/AfterTheInterview.js";

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
        { path: "/SelfCareerAwareness", view: SelfCareerAwareness},
        { path: "/Questions", view: Questions},
        { path: "/KeyAreas", view: KeyAreas},
        { path: "/AfterTheInterview", view: AfterTheInterview},
        
        
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
    document.body.addEventListener("click", e => {
        
        if (e.target.matches("[data-link]")) {
            // console.log(e.target);
            // console.log("Clicked element is <i> tag");
            e.preventDefault();
            navigateTo(e.target.href);
        }

        if(e.target.tagName=="I" || e.target.tagName=="SPAN"){
            let anchorElement=e.target.closest("a");
            if(anchorElement){
                e.preventDefault();
                navigateTo(anchorElement.getAttribute("href"));
            } 
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