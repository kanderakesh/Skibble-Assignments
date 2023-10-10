const studentsinfo = [];
let studentform = document.getElementById("studentform");
let studenttable = document.getElementById("studenttable");
function addStudentsInfo() {
  studenttable.innerHTML = "";
  for (let i = 0; i < studentsinfo.length; i++) {
    let row = document.createElement("tr");

    let nameCell = document.createElement("td");
    nameCell.textContent = studentsinfo[i].name;

    let rollnoCell = document.createElement("td");
    rollnoCell.textContent = studentsinfo[i].rollno;

    let birthdayCell = document.createElement("td");
    birthdayCell.textContent = studentsinfo[i].birthday;

    row.appendChild(nameCell);
    row.appendChild(rollnoCell);
    row.appendChild(birthdayCell);

    studenttable.appendChild(row);
  }
}
function Studentdetails(event) {
  event.preventDefault();
  let name = document.getElementById("studentname").value;
  let rollno = document.getElementById("studentregistrationnumber").value;
  let birthday = document.getElementById("studentbirthday").value;
  const studentdetails = { name, birthday, rollno };
  studentsinfo.push(studentdetails);
  studentform.reset();
  addStudentsInfo();
}

studentform.addEventListener("submit", Studentdetails);
