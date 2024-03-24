function getStudentMarks() {
  // Prompt the user for marks and convert it to a number
  let marks = parseFloat(prompt("Enter student's marks (0-100):"));

  // Validate the input (marks should be between 0 and 100)
  while (isNaN(marks) || marks < 0 || marks > 100) {
      marks = parseFloat(prompt("Invalid marks. Please enter a number between 0 and 100:"));
  }

  return marks;
}

function calculateGrade(marks) {
  if (marks >= 80) {
      return "A";
  } else if (marks >= 60) {
      return "B";
  } else if (marks >= 50) {
      return "C";
  } else if (marks >= 40) {
      return "D";
  } else {
      return "E";
  }
}

function main() {
  const marks = getStudentMarks();
  const grade = calculateGrade(marks);
  alert(`Student's grade: ${grade}`);
}

main();