
"use strict";

// ==========================================
// WEEKLY TASK GOAL CALCULATOR
// ==========================================

const goalForm = document.getElementById("goal-form");
const userNameInput = document.getElementById("user-name");
const dailyGoalInput = document.getElementById("daily-goal");
const bonusTasksInput = document.getElementById("bonus-tasks");
const goalMessage = document.getElementById("goal-message");

if (
    goalForm &&
    userNameInput &&
    dailyGoalInput &&
    bonusTasksInput &&
    goalMessage
) {
    goalForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const userName = userNameInput.value.trim();
        const dailyGoal = Number(dailyGoalInput.value);
        const bonusTasks = Number(bonusTasksInput.value);

        if (
            userName === "" ||
            dailyGoalInput.value === "" ||
            bonusTasksInput.value === "" ||
            !Number.isFinite(dailyGoal) ||
            !Number.isFinite(bonusTasks) ||
            dailyGoal < 0 ||
            bonusTasks < 0
        ) {
            goalMessage.textContent =
                "Please enter a name and valid non-negative numbers.";
            return;
        }

        const weeklyGoal = dailyGoal * 5 + bonusTasks;

        goalMessage.textContent =
            userName + ", your weekly task goal is " +
            weeklyGoal + " tasks.";
    });
}

// ==========================================
// M7 TASK MANAGER WITH DOM MANIPULATION
// ==========================================

// Initialize the task array.
let myTasks = [];

// Get the task manager HTML elements.
const taskList = document.getElementById("task-list");
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-name");
const addTaskButton = document.getElementById("add-task");

// Create the unordered list dynamically.
if (taskList && taskForm && taskInput && addTaskButton) {

    const userTasks = document.createElement("ul");
    userTasks.id = "user-tasks";

    // Append the UL to the task-list container.
    taskList.appendChild(userTasks);

    // Listen for task form submission.
    taskForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Capture the task name.
        const taskName = taskInput.value.trim();

        // Prevent empty tasks.
        if (taskName === "") {
            alert("Please enter a task.");
            taskInput.focus();
            return;
        }

        // Store the task in the array.
        myTasks.push(taskName);

        // Create the LI element.
        const listItem = document.createElement("li");

        // Create the task text.
        const taskText = document.createElement("span");
        taskText.textContent = taskName;

        // Create a Delete button.
        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.textContent = "Delete";

        // Remove the task when Delete is clicked.
        deleteButton.addEventListener("click", function() {
            const taskIndex =
                Array.from(userTasks.children).indexOf(listItem);

            if (taskIndex !== -1) {
                myTasks.splice(taskIndex, 1);
            }

            listItem.remove();
        });

        // Append the task text and button to the LI.
        listItem.appendChild(taskText);
        listItem.appendChild(deleteButton);

        // Append the LI to the UL.
        userTasks.appendChild(listItem);

        // Clear the input field.
        taskInput.value = "";
        taskInput.focus();
    });
}
