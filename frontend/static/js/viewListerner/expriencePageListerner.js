// listening for the education page to load

console.log("exprience Loading page is working");

document.addEventListener("DOMContentLoaded", () => {


  let button = document.getElementById("closeformbbbtn");
  var form = document.getElementById("exprience");

  function addEducationTable(edu) {
    var tbodyRef = document
      .getElementById("exprienceTable")
      .getElementsByTagName("tbody")[0];
    for (var i = 0; i < edu.student.experiences.length; i++) {
      var exprience = edu.student.experiences[i];

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
  }

  function removeFormValue() {
    var employerName = document.getElementById("employerName");
    var jobTitle = document.getElementById("jobTitle");
    var startdate = document.getElementById("startDate");        
    var endtdate = document.getElementById("endtDate");
    var tasksAndResponsibilities = document.getElementById("tasksAndResponsibilities");


    employerName.value = "";
    jobTitle.value = "";
    startdate.value = "";
    endtdate.value = "";
    tasksAndResponsibilities ="";
  }

  // fetching json from local server
  async function getStudent(myCallback) {
    const response = await fetch(
      "http://127.0.0.1:5500/data/userdata.json"
    ).then((res) => res.json());
    myCallback(response);

    document.body.addEventListener("click", (e) => {
      if (e.target.matches("[open-exp]")) {
        e.preventDefault();

        const selectedEducation = response.student.experiences.filter(
          (qual) => qual.id == e.target.id
        );
        var employerName = document.getElementById("employerName");
        var jobTitle = document.getElementById("jobTitle");
        var startdate = document.getElementById("startDate");
        var endtdate = document.getElementById("endtDate");
        var tasksAndResponsibilities = document.getElementById("tasksAndResponsibilities");

        employerName.value = selectedEducation[0].employerName;
        jobTitle.value = selectedEducation[0].jobTitle;
        startdate.value = selectedEducation[0].startDate.split("T")[0];
        endtdate.value = selectedEducation[0].endDate.split("T")[0];
        tasksAndResponsibilities.value = selectedEducation[0].tasksAndResponsibilities;

        form.style.display = "block";
      }
    });
  }

  getStudent(addEducationTable);

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
});
