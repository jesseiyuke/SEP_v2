// listening for the education page to load

console.log("education Loading page is working");

export function educationListener() {
  let button = document.getElementById("closeformbbbtn");
  var form = document.getElementById("education");

  function addEducationTable(edu) {
    console.log(edu);
    var tbodyRef = document
      .getElementById("educationTable")
      .getElementsByTagName("tbody")[0];
    var smallEduBody = document.getElementById("education__card");
    var newDiv = document.createElement("div");
    for (var i = 0; i < edu.length; i++) {
      var education = edu[i];

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

      const newText = `
        <div>
          <h4>${education.institution}</h4> 
          <h5>${education.qualificationTitle}</h5> 
          <h5>${education.startDate.split("T")[0]} - ${
        education.endDate.split("T")[0]
      }</h5>
          <a id="${education.id}" href="#" open-edu>View details</a>
        </div>
      `;

      const newElement = document.createElement("div");
      newElement.className = "smallEducationTable";
      newElement.innerHTML = newText;

      smallEduBody.appendChild(newElement);
    }
  }

  function removeFormValue() {
    var institutionname = document.getElementById("institutionName");
    var qualificationname = document.getElementById("qualificationName");
    var startdate = document.getElementById("startDate");
    var endtdate = document.getElementById("endtDate");
    var subjects = document.getElementById("subjects");
    var majors = document.getElementById("majors");
    var submajors = document.getElementById("subMajors");
    var research = document.getElementById("research");

    institutionname.value = "";
    qualificationname.value = "";
    startdate.value = "";
    endtdate.value = "";
    subjects.value = "";
    majors.value = "";
    submajors.value = "";
    research.value = "";
  }
  async function getQualification(qualificationId) {
    const qual = await fetch(
      "https://localhost:7013/api/Student/Get Qualification?QualificationId=" +
        qualificationId
    );
    const quals = await qual.json();

    return quals;
  }
  // fetching json from local server
  async function getStudent(myCallback) {
    const response = await fetch(
      "https://localhost:7013/api/Student/Get Qualifications?StudentId=b9e65457-679e-4d90-b1cd-c4cdad9c66c8"
    ).then((res) => res.json());

    myCallback(response);

    document.body.addEventListener("click", async (e) => {
      if (e.target.matches("[open-edu]")) {
        e.preventDefault();
        const id = e.target.id;
        console.log(id);
        const selectedEducation = await getQualification(id);
        console.log(selectedEducation.institution);
        var institutionname = document.getElementById("institutionName");
        var qualificationname = document.getElementById("qualificationName");
        var startdate = document.getElementById("startDate");
        var endtdate = document.getElementById("endtDate");
        var subjects = document.getElementById("subjects");
        var majors = document.getElementById("majors");
        var submajors = document.getElementById("subMajors");
        var research = document.getElementById("research");

        institutionname.value = selectedEducation.institution;
        qualificationname.value = selectedEducation.qualificationTitle;
        startdate.value = selectedEducation.startDate.split("T")[0];
        endtdate.value = selectedEducation.endDate.split("T")[0];
        subjects.value = selectedEducation.subjects;
        majors.value = selectedEducation.majors;
        submajors.value = selectedEducation.subMajors;
        research.value = selectedEducation.research;

        form.style.display = "block";

        const eduForm = document.getElementById("educationform");

        eduForm.addEventListener("submit", async (e) => {
          console.log(id);
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

  async function updateEducation(educationId) {
    // Collect updated data from form fields
    const updatedData = {
      id: educationId,
      institution: document.getElementById("institutionName").value,
      qualificationTitle: document.getElementById("qualificationName").value,
      startDate: document.getElementById("startDate").value,
      endDate: document.getElementById("endtDate").value,
      subjects: document.getElementById("subjects").value,
      majors: document.getElementById("majors").value,
      subMajors: document.getElementById("subMajors").value,
      research: document.getElementById("research").value,
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

  async function addEducation() {
    // Collect updated data from form fields
    const updatedData = {
      studentId: "b9e65457-679e-4d90-b1cd-c4cdad9c66c8",
      institution: document.getElementById("institutionName").value,
      qualificationTitle: document.getElementById("qualificationName").value,
      startDate: document.getElementById("startDate").value,
      endDate: document.getElementById("endtDate").value,
      subjects: document.getElementById("subjects").value,
      majors: document.getElementById("majors").value,
      subMajors: document.getElementById("subMajors").value,
      research: document.getElementById("research").value,
    };
    const jsonData = JSON.stringify(updatedData);

    // Send the updated data to the API endpoint
    const response = await fetch(
      "https://localhost:7013/api/Student/AddQualification",
      {
        method: "POST",
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
    if (e.target.matches("[create-education]")) {
      //   console.log("edu id :", e.target.id);
      e.preventDefault();
      removeFormValue();
      form.style.display = "block";

      const eduForm = document.getElementById("educationform");

      eduForm.addEventListener("submit", async (e) => {
        await addEducation();
      });
    }
  });

  //delete qualification
  async function removeEducation(id) {
    // Collect updated data from form fields

    // const updatedData = {
    //   studentId: "b9e65457-679e-4d90-b1cd-c4cdad9c66c8",
    //   institution: document.getElementById("institutionName").value,
    //   qualificationTitle: document.getElementById("qualificationName").value,
    //   startDate: document.getElementById("startDate").value,
    //   endDate: document.getElementById("endtDate").value,
    //   subjects: document.getElementById("subjects").value,
    //   majors: document.getElementById("majors").value,
    //   subMajors: document.getElementById("subMajors").value,
    //   research: document.getElementById("research").value,
    // };
    // const jsonData = JSON.stringify(updatedData);

    // Send the updated data to the API endpoint
    const response = await fetch(
      "https://localhost:7013/api/Student/WithdrawQualification/" + id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        // body: jsonData,
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
}
