// Select pages
const usernamePage = document.getElementById("username-page");
const clockPage = document.getElementById("clock-page");
const taskPage = document.getElementById("task-page");

// Function to navigate between pages
function navigateTo(pageId) {
    const allPages = document.querySelectorAll(".page");
    allPages.forEach((page) => page.classList.remove("active")); // Hide all pages
    document.getElementById(pageId).classList.add("active"); // Show the selected page
}

// Function to set the username and navigate to clock page
function setUsername() {
    const usernameInput = document.getElementById("username");
    const username = usernameInput.value.trim();

    if (username) {
        document.getElementById("welcome-message").textContent = `Welcome, ${username}`;
        navigateTo("clock-page"); // Go to the clock page
    } else {
        alert("Please enter your name."); // Notify user if the name is not entered
    }
}

// Populate clocks
function updateClocks() {
    const now = new Date();

    // Local time
    const localTime = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const localDate = now.toLocaleDateString();
    document.getElementById("local-time").textContent = localTime;
    document.getElementById("local-date").textContent = localDate;

    // London time
    const londonTime = new Date(now.toLocaleString("en-US", { timeZone: "Europe/London" }));
    document.getElementById("london-time").textContent = londonTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    document.getElementById("london-date").textContent = londonTime.toLocaleDateString();

    // New York time
    const nyTime = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }));
    document.getElementById("ny-time").textContent = nyTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    document.getElementById("ny-date").textContent = nyTime.toLocaleDateString();
}

// Update clocks every second
setInterval(updateClocks, 1000);

// Task functionality
const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskTime = document.getElementById("task-time").value;
    const taskName = document.getElementById("task-name").value;

    if (taskTime && taskName) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${taskTime} - ${taskName}
            <input type="checkbox">
        `;
        taskList.appendChild(listItem);

        // Clear form fields
        taskForm.reset();
    } else {
        alert("Please fill out both fields.");
    }
});
