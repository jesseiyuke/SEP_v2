// listening for the education page to load

console.log("referee Loading page is working");

document.addEventListener("DOMContentLoaded", () => {


  let button = document.getElementById("closeformbbbtn");
  var form = document.getElementById("referee");

  function addEducationTable(edu) {
    var tbodyRef = document
      .getElementById("refereeTable")
      .getElementsByTagName("tbody")[0];
    for (var i = 0; i < edu.student.referees.length; i++) {
      var referee = edu.student.referees[i];

      var newRow = tbodyRef.insertRow();
      
      var newCell0 = newRow.insertCell();
      var newCell1 = newRow.insertCell();
      var newCell2 = newRow.insertCell();
      var newCell3 = newRow.insertCell();

      newCell0.innerHTML = referee.name;
      newCell1.innerHTML = referee.insitution;
      newCell2.innerHTML = referee.jobTitle;
      newCell3.innerHTML =
        "<a id=" + referee.id + ' href="#" open-ref>View details</a>';
    }
  }

  function removeFormValue() {
    var name = document.getElementById("name");
    var jobTitle = document.getElementById("jobTitle");
    var insitution = document.getElementById("insitution");        
    var email = document.getElementById("email");
    var cell = document.getElementById("cell");


    name.value = "";
    jobTitle.value = "";
    insitution.value = "";
    email.value = "";
    cell.value = "";
  }

  // fetching json from local server
  async function getStudent(myCallback) {
    const response = await fetch(
      "http://127.0.0.1:5500/data/userdata.json"
    ).then((res) => res.json());
    myCallback(response);

    document.body.addEventListener("click", (e) => {
      if (e.target.matches("[open-ref]")) {
        e.preventDefault();

        const selectedEducation = response.student.referees.filter(
          (qual) => qual.id == e.target.id
        );
        var name = document.getElementById("name");
        var jobTitle = document.getElementById("jobTitle");
        var insitution = document.getElementById("insitution");        
        var email = document.getElementById("email");
        var cell = document.getElementById("cell");

        name.value = selectedEducation[0].name;
        jobTitle.value = selectedEducation[0].jobTitle;
        insitution.value = selectedEducation[0].insitution;
        email.value = selectedEducation[0].email;
        cell.value = selectedEducation[0].cell;

        form.style.display = "block";
      }
    });
  }

  getStudent(addEducationTable);

  button.addEventListener("click", () => {
    form.style.display = "none";
  });

  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[create-referee]")) {
      //   console.log("edu id :", e.target.id);
      e.preventDefault();
      removeFormValue();
      form.style.display = "block";
    }
  });
});
