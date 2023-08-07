import AbstractView from "./AbstractView.js";

async function getJobPostsFromAPI() {
  try {
    const response = await fetch("https://localhost:7013/api/JobPosts", {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImJiYjBiMGZkLTk4ZDAtNDFkNy1hZmIyLTdjYWFmZTFkMzVlYiIsImp0aSI6ImYyYmQyZmRiLWNmZWUtNDY5MS05NzRjLTEyNzk2ZWRjYmQ5NiIsImV4cCI6MTY5MTQxNzA2NCwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzAxMyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjcwMTMifQ.oScblb46P77txDtcB21ph98ITBwRaFISikC4VBeZoKA'
      }
    });

    if (!response.ok) {
      throw new Error("Failed to fetch job posts.");
    }

    const jobPosts = await response.json();
    console.log(JSON.stringify(jobPosts));

    return jobPosts;
  } catch (error) {
    console.error("Error fetching job posts:", error);
    return [];
  }
}

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Posts");
  }

  async getHtml() {
    const jobPosts = await getJobPostsFromAPI();
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
    const jobPosts = await getJobPostsFromAPI(); // Fetch job posts again here, if needed
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
