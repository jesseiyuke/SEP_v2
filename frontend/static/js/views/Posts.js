import AbstractView from "./AbstractView.js";
  let jobPosts;
  let documents;

  export default class extends AbstractView {
    constructor(params) {
      super(params);
      this.setTitle("Posts");
    }
    uploadFile() {
      var fileInput = document.getElementById('fileInput');
      var file = fileInput.files[0];
      documents.push(file);
      let fileName= file.name;
      console.log(file.type)
      const docsDiv = document.getElementById('uploaded_files');
      const fileItem = document.createElement('div');
      fileItem.classList.add('file-item');
      fileItem.innerHTML = `
        <p>${fileName}</p>
        <button class="delete-file-btn">Delete</button>
      `;
      docsDiv.appendChild(fileItem);
      fileInput.value = "";
      const deleteButtons = fileItem.querySelectorAll('.delete-file-btn');
      deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
        this.deleteFile(fileName);
        fileItem.remove();
        });
      });
    }
    Apply(){
      var formData = new FormData();
      for(const document in documents){
        formData.append("docs",document);
      }
      fetch("http://localhost:3000/post",{
        method:"post",
        body: formData
      }).catch(console.error);
    }
    saveFile(){

      var formData = new FormData();
      for(const document in documents){
        formData.append("docs",document);
      }
      fetch("http://localhost:3000/post",{
        method:"post",
        body: formData
      }).catch(console.error);
      
    }
    deleteFile(fileName) {
      documents = documents.filter(file => file.name !== fileName);
      console.log(documents);
    }
    async getHtml() {
      try {
        jobPosts=await this.fetchAndRenderPosts();
        const jobPostsHTML = jobPosts
        .map((post, index) => this.getJobCardHtml(post, index))
        .join("");
      return ` 
        <div class="custom-head">
          <h1>Available Job Posts</h1>
          <hr>
        </div>
        <div class="popup" id="savePopup">
          <button id="saveCloseButton" class="popup-button">Close</button>
          <div class="popup-header">Saving</div>
          <div class="popup-content">Your applicatin was saved for later update</div>
        </div>
        <div class="popup" id="applyPopup">
          <button id="applyCloseButton" class="popup-button">Close</button>
          <div class="popup-header">Applying</div>
          <div class="popup-content">Your applicatin was sent to the employer</div>
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
    } catch (error) {
      console.error("Error fetching and rendering posts:", error);
      return "Error fetching and rendering posts.";
    }
      
    }
    async fetchAndRenderPosts() {
      let jobPosts;
      try {
        const response = await fetch("http://localhost:3000/posts");
        const data = await response.json();
        jobPosts=data;
      } catch (error) {
        console.error("Error fetching JSON:", error);
      }
      return jobPosts;
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