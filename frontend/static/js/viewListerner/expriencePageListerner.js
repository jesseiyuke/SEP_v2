// listening for the education page to load

console.log("exprience Loading page is working");

export function experienceListener() {
  let button = document.getElementById("closeformbbbtn");
  var form = document.getElementById("exprience");

  function addEducationTable(edu) {
    var tbodyRef = document
      .getElementById("exprienceTable")
      .getElementsByTagName("tbody")[0];
    var smallExpBody = document.getElementById("exprience__card");
    for (var i = 0; i < edu.length; i++) {
      var exprience = edu[i];

      var newRow = tbodyRef.insertRow();

      var newCell0 = newRow.insertCell();
      var newCell1 = newRow.insertCell();
      var newCell2 = newRow.insertCell();
      var newCell3 = newRow.insertCell();
      var newCell4 = newRow.insertCell();

      newCell0.innerHTML = exprience.employerName;
      newCell1.innerHTML = exprience.startDate.split("T")[0];
      newCell2.innerHTML = exprience.endDate.split("T")[0];
      newCell3.innerHTML = exprience.jobTitle;
      newCell4.innerHTML =
        "<a id=" + exprience.id + ' href="#" open-exp>View details</a>';
    }

    const newText = `
        <div>
          <h4>${exprience.employerName}</h4> 
          <h5>${exprience.jobTitle}</h5> 
          <h5>${exprience.startDate.split("T")[0]} - ${
      exprience.endDate.split("T")[0]
    }</h5>
          <a id="${exprience.id}" href="#" open-exp>View details</a>
        </div>
      `;

    const newElement = document.createElement("div");
    newElement.className = "smallExprienceTable";
    newElement.innerHTML = newText;

    smallExpBody.appendChild(newElement);
  }

  function removeFormValue() {
    var employerName = document.getElementById("employerName");
    var jobTitle = document.getElementById("jobTitle");
    var startdate = document.getElementById("startDate");
    var endtdate = document.getElementById("endtDate");
    var tasksAndResponsibilities = document.getElementById(
      "tasksAndResponsibilities"
    );

    employerName.value = "";
    jobTitle.value = "";
    startdate.value = "";
    endtdate.value = "";
    tasksAndResponsibilities = "";
  }

  async function getExperience(experienceIdId) {
    const exp = await fetch(
      "https://localhost:7013/api/Student/Get Experience?ExperienceId=" +
        experienceIdId
    );
    const exps = await exp.json();

    return exps;
  }

  // fetching json from local server
  async function getStudent(myCallback) {
    const response = await fetch(
      "https://localhost:7013/api/Student/Get Experiences?StudentId=b9e65457-679e-4d90-b1cd-c4cdad9c66c8"
    ).then((res) => res.json());
    myCallback(response);

    document.body.addEventListener("click", async (e) => {
      if (e.target.matches("[open-exp]")) {
        e.preventDefault();

        const id = e.target.id;
        const selectedEducation = await getExperience(id);
        var employerName = document.getElementById("employerName");
        var jobTitle = document.getElementById("jobTitle");
        var startdate = document.getElementById("startDate");
        var endtdate = document.getElementById("endtDate");
        var tasksAndResponsibilities = document.getElementById(
          "tasksAndResponsibilities"
        );

        employerName.value = selectedEducation.employerName;
        jobTitle.value = selectedEducation.jobTitle;
        startdate.value = selectedEducation.startDate.split("T")[0];
        endtdate.value = selectedEducation.endDate.split("T")[0];
        tasksAndResponsibilities.value =
          selectedEducation.tasksAndResponsibilities;

        form.style.display = "block";

        const eduForm = document.getElementById("exprienceform");

        eduForm.addEventListener("submit", async (e) => {
          await updateEducation(id);
        });

        const deleteEdu = document.getElementById("deleteButton");
        deleteEdu.addEventListener("click", async (e) => {
          await removeEducation(id);
        });
      }
    });
  }

  getStudent(addEducationTable);

  async function updateExprience(experienceId) {
    // Collect updated data from form fields
    const updatedData = {
      id: experienceId,
      employerName: document.getElementById("employerName").value,
      jobTitle: document.getElementById("jobTitle").value,
      startdate: document.getElementById("startDate").value,
      endtdate: document.getElementById("endtDate").value,
      tasksAndResponsibilities: document.getElementById(
        "tasksAndResponsibilities"
      ).value,
    };
    const jsonData = JSON.stringify(updatedData);

    // Send the updated data to the API endpoint
    const response = await fetch(
      "https://localhost:7013/api/Student/UpdateQualification",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonData,
      }
    );

    if (response.ok) {
      // Data updated successfully
      console.log("Data updated successfully");
    } else {
      // Handle error cases
      console.error("Error updating data:", response.statusText);
    }
  }

  button.addEventListener("click", () => {
    form.style.display = "none";
  });

  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[create-exprience]")) {
      //   console.log("edu id :", e.target.id);
      e.preventDefault();
      removeFormValue();
      form.style.display = "block";
    }
  });
}
