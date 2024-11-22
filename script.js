// Study plan data (hardcoded in script.js)
const studyPlan = {
  "Nov 22": [
    "Math - Real Numbers",
    "Science - Chemical Reactions & Equations"
  ],
  "Nov 23": [
    "Math - Polynomials",
    "Science - Acids, Bases & Salts"
  ],
  "Nov 24": [
    "Math - Linear Equations in 2 Variables",
    "Hindi - Sanchayan Chapter 1"
  ],
  "Nov 25": [
    "Math - Quadratic Equations",
    "Science - Metals & Non-Metals"
  ],
  "Nov 26": [
    "Math - Arithmetic Progression",
    "Science - Carbon & its Compounds"
  ],
  "Nov 27": [
    "Math - Triangles",
    "Science - Light"
  ],
  "Nov 28": [
    "Math - Coordinate Geometry",
    "Science - Human Eye & Colourful World"
  ],
  "Nov 29": [
    "Math - Introduction to Trigonometry",
    "Hindi - Sanchayan Chapter 2"
  ],
  "Nov 30": [
    "Math - Application of Trigonometry",
    "Science - Electricity & Magnetism",
    "SST - Nationalism in Europe",
    "SST - Nationalism in India",
    "SST - The Making of a Global World"
  ],
  "Dec 1": [
    "Math - Circles",
    "English - Literature (Poems & Prose Revision)"
  ],
  "Dec 2": [
    "Math - Area Related to Circles",
    "Science - Life Processes"
  ],
  "Dec 3": [
    "Math - Surface Area & Volume",
    "Science - Control & Coordination"
  ],
  "Dec 4": [
    "Math - Statistics",
    "Science - Reproduction"
  ],
  "Dec 5": [
    "Math - Probability",
    "English - Writing Skills (Letters & Applications)"
  ],
  "Dec 6": [
    "SST - Print Culture",
    "IT (Unit 1: Digital Documentation Tools)"
  ],
  "Dec 7": [
    "SST - Resources & Development",
    "SST - Wildlife Resources",
    "SST - Water Resources",
    "Math - Revision (Formulas & Concepts)"
  ],
  "Dec 8": [
    "SST - Agriculture",
    "SST - Mineral Resources",
    "SST - Manufacturing Industry",
    "Math - Full Revision"
  ],
  "Dec 9": [
    "SST - Development",
    "SST - Sectors of the Indian Economy",
    "Math - Full Revision"
  ],
  "Dec 10": [
    "SST - Money and Credit",
    "SST - Globalisation",
    "Science - Magnetic Effects of Current"
  ],
  "Dec 11": [
    "SST - Power Sharing",
    "SST - Federalism",
    "Math - Full Revision"
  ],
  "Dec 12": [
    "SST - Gender, Religion, and Caste",
    "SST - Political Parties",
    "English - Full Revision"
  ],
  "Dec 13": [
    "SST - Outcomes of Democracy",
    "Math - Full Revision (All Topics)",
    "Science - Full Revision"
  ],
  "Dec 14": [
    "SST - Full Revision",
    "IT - Full Revision"
  ],
  "Dec 15": [
    "Math - Final Revision",
    "Science - Final Revision"
  ],
};

// Populate date dropdown with available dates from the studyPlan object
function populateDateDropdown() {
  const dateDropdown = document.getElementById("date");
  Object.keys(studyPlan).forEach(date => {
    const option = document.createElement("option");
    option.value = date;
    option.textContent = date;
    dateDropdown.appendChild(option);
  });
}

// Display tasks for the selected date
function displayTasks() {
  const selectedDate = document.getElementById("date").value;
  const tasks = studyPlan[selectedDate] || [];
  const taskList = document.getElementById("tasks");
  const dateLabel = document.getElementById("selected-date");

  taskList.innerHTML = ""; // Clear previous tasks
  dateLabel.textContent = selectedDate; // Update header

  tasks.forEach((task) => {
    const listItem = document.createElement("li");
    listItem.textContent = task;

    // Add completion button (without saving state)
    const button = document.createElement("button");
    button.textContent = "Mark as Done";
    button.onclick = () => {
      listItem.classList.toggle("completed");
    };

    listItem.appendChild(button);
    taskList.appendChild(listItem);
  });
}

// Add a new task to the "To-Do List"
function addNewTask() {
  const newTaskInput = document.getElementById("new-task-input");
  const taskText = newTaskInput.value.trim();

  if (taskText) {
    const toDoList = document.getElementById("to-do-tasks");

    // Create new list item for the task
    const listItem = document.createElement("li");

    // Add checkbox for task completion
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.onclick = () => {
      listItem.classList.toggle("completed");
    };

    // Add the task text
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    // Append checkbox and task text to list item
    listItem.appendChild(checkBox);
    listItem.appendChild(taskSpan);

    // Append the new list item to the "To-Do List"
    toDoList.appendChild(listItem);

    // Clear the input field
    newTaskInput.value = "";
  }
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  populateDateDropdown(); // Populate the date dropdown
  const defaultDate = Object.keys(studyPlan)[0]; // Set default to the first date
  document.getElementById("date").value = defaultDate;
  displayTasks(); // Display tasks for the default date
});