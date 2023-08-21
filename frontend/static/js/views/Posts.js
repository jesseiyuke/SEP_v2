import AbstractView from "./AbstractView.js";

async function getJobPostsFromAPI() {
  try {
    const response = await fetch("https://localhost:44362/api/JobPosts", {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjU4MzEwNzI0LTBmYzYtNGUzMC05YjZiLTc3NzFiOGIyZTE0YyIsImp0aSI6IjljODkyNmY4LWYzOTItNDI2OS04YTU4LWRhMGQwMmQ1MDYzOSIsImV4cCI6MTY5MjYxNDE5NiwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzAxMyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjcwMTMifQ.BrIr8niWiuLAxLr0UgB2ICzaXW6favyxLqcGgNN_Sk4'
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
          documents=[];
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
            <h2>Document Upload</h2>
            <div id="uploaded_files"></div>
            <input type="file" id="fileInput">
            <br>
            <button class="apply-btn" id="saveButton">Save</button>
            <button class="apply-btn" id="applyButton">Apply</button>
          
          `;
  
          // Check if the card is already compressed
          if (card.classList.contains("compressed")) {
            jobDetailsSection.innerHTML = "";
            jobDetailsSection.classList.add("hidden");
            card.classList.remove("compressed");
          } else {
            const allJobCards = document.querySelectorAll(".job-card");
            allJobCards.forEach((c) => c.classList.remove("compressed"));
            jobDetailsSection.innerHTML = "";
            jobDetailsSection.classList.add("hidden");
  
            jobDetailsSection.innerHTML = jobDetailsHTML;
            jobDetailsSection.classList.remove("hidden");
            card.classList.add("compressed");
          }
          const uploadButton = document.querySelector("#fileInput");
          const saveButton = document.querySelector("#saveButton");
          const applyButton =document.querySelector("#applyButton");
          const savePopup = document.getElementById('savePopup');
          const saveCloseButton = document.getElementById('saveCloseButton');
          const applyCloseButton = document.getElementById('applyCloseButton');
          const applyPopup = document.getElementById('applyPopup');

          saveCloseButton.addEventListener('click', () => {
            savePopup.style.display = 'none';
          });
          applyCloseButton.addEventListener('click', () => {
            applyPopup.style.display = 'none';
          });
          uploadButton.addEventListener("change", () => {
            this.uploadFile();
          });
          saveButton.addEventListener("click", () => {
            this.saveFile();
            savePopup.style.display = 'block';
          });
          applyButton.addEventListener("click", ()=>{
            this.Apply();
            applyPopup.style.display = 'block';
          });
        });
      });
    }
  
  }