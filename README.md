# javascript01

## Description
This challenge involves solving three tasks that combine variables, DOM manipulation, and conditionals using JavaScript. You will practice prompt input, decision-making with `if-else` statements, and dynamically creating HTML elements to display results based on user input. Additionally, you'll be required to follow Git version control practices by initializing a Git repository, committing changes, and pushing them to a remote repository.

## Exercises

### Exercise 01: Is It Leap Year?
In this exercise, you will determine whether a given year is a leap year or not based on the following rules:
- A year is a leap year if it is divisible by 4, except for end-of-century years, which must be divisible by 400.
- Every year divisible by 4 is a leap year, but if the year is also divisible by 100, it is **not** a leap year, unless the year is divisible by 400, in which case it **is** a leap year.

#### Steps:
1. Prompt the user to enter a year (as a number).
2. Save the input in a variable.
3. Check if the year is a leap year using the leap year rules.
4. If the year is a leap year, create a paragraph with JavaScript and display the message: 
   - **“The year is a leap year”** (text color: green).
5. If the year is not a leap year, create a paragraph and display the message:
   - **“The year is not a leap year”** (text color: red).

### Exercise 02: Student Grade
This exercise involves converting a student's numeric grade into a letter grade using the following scale:
- 90-100: Grade A
- 80-89: Grade B
- 70-79: Grade C
- 60-69: Grade D
- 0-59: Grade F

#### Steps:
1. Prompt the user to enter their grade (as a floating-point number using `parseFloat`).
2. Save the input in a variable.
3. Use conditional statements to evaluate the grade:
   - If the grade is 90-100, create an `h1` heading and display the message **"Your grade is A"** (text color: green).
   - If the grade is 80-89, create an `h1` heading and display **"Your grade is B"** (text color: blue).
   - If the grade is 70-79, create an `h1` heading and display **"Your grade is C"** (text color: yellow).
   - If the grade is 60-69, create an `h1` heading and display **"Your grade is D"** (text color: orange).
   - If the grade is 0-59, create an `h1` heading and display **"Your grade is F"** (text color: red).

## Git Instructions
1. **Initialize a Git repository** for the project:
   ```bash
   git init
   ```
2. **Add a remote repository**:
   ```bash
   git remote add origin <your-repo-url>
   ```
3. **Track and commit changes** to the repository:
   ```bash
   git add .
   git commit -m "added solution for the first git challenge"
   ```
4. **Push the code to GitHub**:
   ```bash
   git push --set-upstream origin main
   ```

## Submission
- Upload your solution to GitHub (or another version control platform).
- Share the repository link with your assessor or learning platform.
