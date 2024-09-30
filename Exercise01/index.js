// Function to check if a year is a leap year or not
const isLeapYear = (year) => {
  // The year is divisible by 4 and not divisible by 100, OR the year is divisible by 400
  // and if one of the conditions is true, than it will be a leap year, otherwise, wont.
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

// Function to create a paragraph element with respective text and color
const createParagraph = (text, color) => {
  let paragraph = document.createElement("p");
  paragraph.textContent = text;
  paragraph.style.color = color;
  return paragraph;
};

// Function to notify the user about the result
const notifyUser = () => {
  let year = parseInt(prompt("Please, enter a year!"));

  let message =
    !isNaN(year) && year !== ""
      ? isLeapYear(year)
        ? createParagraph("The year is a leap year", "green")
        : createParagraph("The year is not a leap year", "red")
      : (alert("Please enter a valid year (numeric value)."), notifyUser());

  document.body.appendChild(message);
};

// calling the function
notifyUser();
