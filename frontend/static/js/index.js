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
        // { path: "/profile", view: Profile},
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

    document.querySelector('main').innerHTML = await view.getHtml();
    await view.afterRender();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});

//Arrows
let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
 console.log(arrowParent);
 arrowParent.classList.toggle("showMenu");
  });
}

//Open-close sidebar
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
});