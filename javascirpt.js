// Function to fetch student data from the database and populate the student list table
function populateStudentList() {
  fetch('fetch_students.php')
    .then(response => response.json())
    .then(data => {
      const studentTableBody = document.getElementById('studentTableBody');
      studentTableBody.innerHTML = '';

      data.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${student.StudentID}</td>
          <td>${student.FirstName}</td>
          <td>${student.LastName}</td>
          <td>${student.DateOfBirth}</td>
          <td>${student.ParentName}</td>
          <td>${student.Address}</td>
          <td>${student.City}</td>
          <td>${student.PhoneNumber}</td>
        `;
        studentTableBody.appendChild(row);
      });
    })
    .catch
