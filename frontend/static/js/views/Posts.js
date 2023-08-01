// Posts.js (updated)

import AbstractView from "./AbstractView.js";

const jobPosts = [
  {
    jobTitle: "Software Developer Intern 1",
    department: "Wits Innovation Centre",
    location: "Wits Plus Building, Third Floor",
    jobType: "Full-time",
    startDate: "19/07/23",
    endDate: "22/02/24",
    weekHour: "6-8 Hours",
    hourlyRate: 180.27,
    jobDescription: "Develop high-quality software :)",
    minimumRequirements: "Must have experience with MS Word|Must know the difference between left mouse click and right|Be able to hold pen",
    keyResponsibilities: "Write code|Give presentations|Join meetings",
    closingDate: "26/09/23",
    contactPerson: "John Doe",
    email: "JohnDoe@wits.ac.za",
  },
  {
    jobTitle: "Software Developer Intern 2",
    location: "Wits Plus Building, Third Floor",
    department: "Wits Innovation Centre",
    jobType: "Part-time",
    startDate: "19/07/23",
    endDate: "22/02/24",
    weekHour: "10-12 Hours",
    hourlyRate: 150.50,
    jobDescription: "Develop cutting-edge software solutions.",
    minimumRequirements: "Must have experience with MS Word|Must know the difference between left mouse click and right|Be able to hold pen",
    keyResponsibilities: "Design software architecture|Collaborate with teams|Debug and test code",
    closingDate: "30/09/23",
    contactPerson: "Jane Smith",
    email: "JaneSmith@wits.ac.za",
  },
  {
    jobTitle: "Software Developer Intern 3",
    location: "Wits Plus Building, Third Floor",
    department: "Wits Innovation Centre",
    jobType: "Full-time",
    startDate: "19/07/23",
    endDate: "22/02/24",
    weekHour: "6-8 Hours",
    hourlyRate: 180.27,
    jobDescription: "Create innovative software applications.",
    minimumRequirements: "Must have experience with MS Word|Must know the difference between left mouse click and right|Be able to hold pen",
    keyResponsibilities: "Implement new features|Conduct code reviews|Assist in testing",
    closingDate: "28/09/23",
    contactPerson: "Michael Johnson",
    email: "MichaelJohnson@wits.ac.za",
  },
  {
    jobTitle: "Software Developer Intern 4",
    location: "Wits Plus Building, Third Floor",
    department: "Wits Innovation Centre",
    jobType: "Full-time",
    startDate: "19/07/23",
    endDate: "22/02/24",
    weekHour: "6-8 Hours",
    hourlyRate: 180.27,
    jobDescription: "Create innovative software applications.",
    minimumRequirements: "Must have experience with MS Word|Must know the difference between left mouse click and right|Be able to hold pen",
    keyResponsibilities: "Implement new features|Conduct code reviews|Assist in testing",
    closingDate: "28/09/23",
    contactPerson: "Michael Johnson",
    email: "MichaelJohnson@wits.ac.za",
  },
  {
    jobTitle: "Software Developer Intern 5",
    location: "Wits Plus Building, Third Floor",
    department: "Wits Innovation Centre",
    jobType: "Full-time",
    startDate: "19/07/23",
    endDate: "22/02/24",
    weekHour: "6-8 Hours",
    hourlyRate: 180.27,
    jobDescription: "Create innovative software applications.",
    minimumRequirements: "Must have experience with MS Word|Must know the difference between left mouse click and right|Be able to hold pen",
    keyResponsibilities: "Implement new features|Conduct code reviews|Assist in testing",
    closingDate: "28/09/23",
    contactPerson: "Michael Johnson",
    email: "MichaelJohnson@wits.ac.za",
  },
  {
    jobTitle: "Software Developer Intern 6",
    location: "Wits Plus Building, Third Floor",
    department: "Wits Innovation Centre",
    jobType: "Full-time",
    startDate: "19/07/23",
    endDate: "22/02/24",
    weekHour: "6-8 Hours",
    hourlyRate: 180.27,
    jobDescription: "Create innovative software applications.",
    minimumRequirements: "Must have experience with MS Word|Must know the difference between left mouse click and right|Be able to hold pen",
    keyResponsibilities: "Implement new features|Conduct code reviews|Assist in testing",
    closingDate: "28/09/23",
    contactPerson: "Michael Johnson",
    email: "MichaelJohnson@wits.ac.za",
  },
  // Add more sample job posts here if needed
];

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Posts");
  }

  async getHtml() {
    const jobPostsHTML = jobPosts.map((post, index) => this.getJobCardHtml(post, index)).join("");

    // Wrap job cards inside a scrollable container
    return ` 
      <div class="custom-head">
        <h1>Available Job Posts</h1>
        <hr>
      </div>

      <br/>
      
      <div class="custom-search-dropdown">
        <div class="search-input">
          <input type="search" placeholder="Search...">
          <i class='bx bx-search-alt-2 search-icon'></i>
        </div>
        <div class="filter-dropdown">
          <div class="filter-btn">
            <i class='bx bx-filter'></i>
            <span>Filter</span>
          </div>
          <ul class="filter-options">
            <li><i class='bx bx-dollar'></i>Rate</li>
            <li><i class='bx bx-briefcase'></i>Job Type</li>
            <li><i class='bx bx-history'></i>Application History</li>
          </ul>
        </div>
      </div>

      <br/>

      <div class="page-container">

        <div class="job-posts-container">
          <div class="job-posts">
            ${jobPostsHTML}
          </div>
        </div>

        <div class="job-details-container">
          <section class="job-details hidden">
            <!-- Job details will be displayed here -->
          </section>
        </div>
        
      </div>
    `;
  }

  getJobCardHtml(post, index) {
    return `
      <div class="job-card" data-post-id="${index}">
        <h2>${post.jobTitle}</h2>
        <p>Department: ${post.department}</p>
        <p>FT/PT: ${post.jobType}</p>
        <p>Start Date: ${post.startDate}</p>
        <p>End Date: ${post.endDate}</p>
        <p>Week Hour: ${post.weekHour}</p>
        <p>Hourly Rate: ${post.hourlyRate}</p>
      </div>
    `;
  }

  // Update event listener to toggle job details visibility
  async addEventListener() {
    const jobCards = document.querySelectorAll(".job-card");
    const jobDetailsSection = document.querySelector(".job-details");

    jobCards.forEach((card, index) => {
      card.addEventListener("click", () => {
        const selectedJob = jobPosts[index];
        const jobDetailsHTML = `
          <h2>${selectedJob.jobTitle}</h2>
          <p>Department: ${selectedJob.department}</p>
          <p>Location: ${selectedJob.location}</p>
          <p>FT/PT: ${selectedJob.jobType}</p>
          <p>Start Date: ${selectedJob.startDate}</p>
          <p>End Date: ${selectedJob.endDate}</p>
          <p>Week Hour: ${selectedJob.weekHour}</p>
          <p>Hourly Rate: ${selectedJob.hourlyRate}</p>
          <p>Job Description: ${selectedJob.jobDescription}</p>
          <p>Minimum Requirements: ${selectedJob.minimumRequirements}</p>
          <p>Key Responsibilities: ${selectedJob.keyResponsibilities}</p>
          <p>Closing Date: ${selectedJob.closingDate}</p>
          <p>Contact Person: ${selectedJob.contactPerson}</p>
          <p>Email: ${selectedJob.email}</p>
          <button class="apply-btn">Apply</button>
        `;

        // Check if the card is already compressed
        if (card.classList.contains("compressed")) {
          // Hide job details section and remove compression from the card
          jobDetailsSection.innerHTML = "";
          jobDetailsSection.classList.add("hidden");
          card.classList.remove("compressed");
        } else {
          // Clear job details section and remove compression from all cards
          const allJobCards = document.querySelectorAll(".job-card");
          allJobCards.forEach((c) => c.classList.remove("compressed"));
          jobDetailsSection.innerHTML = "";
          jobDetailsSection.classList.add("hidden");

          // Show details of the clicked card and add compression to the card
          jobDetailsSection.innerHTML = jobDetailsHTML;
          jobDetailsSection.classList.remove("hidden");
          card.classList.add("compressed");
        }
      });
    });
  }

}
