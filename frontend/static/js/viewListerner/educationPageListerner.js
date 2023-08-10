// listening for the education page to load

console.log("education Loading page is working");

export function educationListener()
{

  let button = document.getElementById("closeformbbbtn");
  var form = document.getElementById("education");

  function addEducationTable(edu) {
    var tbodyRef = document
      .getElementById("educationTable")
      .getElementsByTagName("tbody")[0];
    for (var i = 0; i < edu.student.qualifications.length; i++) {
      var education = edu.student.qualifications[i];

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

  // fetching json from local server
  async function getStudent(myCallback) {
    const response = await fetch(
      "http://127.0.0.1:5500/data/userdata.json"
    ).then((res) => res.json());
    myCallback(response);

    document.body.addEventListener("click", (e) => {
      if (e.target.matches("[open-edu]")) {
        e.preventDefault();

        const selectedEducation = response.student.qualifications.filter(
          (qual) => qual.id == e.target.id
        );
        var institutionname = document.getElementById("institutionName");
        var qualificationname = document.getElementById("qualificationName");
        var startdate = document.getElementById("startDate");
        var endtdate = document.getElementById("endtDate");
        var subjects = document.getElementById("subjects");
        var majors = document.getElementById("majors");
        var submajors = document.getElementById("subMajors");
        var research = document.getElementById("research");

        institutionname.value = selectedEducation[0].institution;
        qualificationname.value = selectedEducation[0].qualificationTitle;
        startdate.value = selectedEducation[0].startDate.split("T")[0];
        endtdate.value = selectedEducation[0].endDate.split("T")[0];
        subjects.value = selectedEducation[0].subjects;
        majors.value = selectedEducation[0].majors;
        submajors.value = selectedEducation[0].subMajors;
        research.value = selectedEducation[0].research;

        form.style.display = "block";
      }
    });
  }

  getStudent(addEducationTable);

  button.addEventListener("click", () => {
    form.style.display = "none";
  });

  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[create-education]")) {
      //   console.log("edu id :", e.target.id);
      e.preventDefault();
      removeFormValue();
      form.style.display = "block";
    }
  });
}
  