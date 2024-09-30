let grade = parseFloat(prompt("Enter your grade:"));

const body = document.body;

//function to append the headings to the body according to the grade
const checkGrade = (grade) => {
  let heading = document.createElement("h1");
  heading.textContent = `Your grade is `;

  switch (true) {
    case grade >= 90 && grade <= 100:
      heading.textContent += "A";
      heading.style.color = "green";
      break;
    case grade >= 80 && grade <= 89:
      heading.textContent += "B";
      heading.style.color = "blue";
      break;
    case grade >= 70 && grade <= 79:
      heading.textContent += "C";
      heading.style.color = "yellow";
      break;
    case grade >= 60 && grade <= 69:
      heading.textContent += "D";
      heading.style.color = "orange";
      break;
    case grade >= 0 && grade < 60:
      heading.textContent += "F";
      heading.style.color = "red";
      break;
    default:
      heading.textContent = "Invalid grade entered";
      heading.style.color = "black";
  }

  body.appendChild(heading);
};

// calling the function
checkGrade(grade);
