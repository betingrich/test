// Greeting with Username
if (document.getElementById("greeting")) {
    const username = localStorage.getItem("username") || "Guest";
    document.getElementById("greeting").innerText = `Welcome, ${username}!`;
}

// Update Clocks
function updateClocks() {
    const localTime = new Date();
    document.getElementById("local-time").innerText = localTime.toLocaleTimeString();
    document.getElementById("local-date").innerText = localTime.toLocaleDateString();

    const londonTime = new Date(localTime.toLocaleString("en-US", { timeZone: "Europe/London" }));
    document.getElementById("london-time").innerText = londonTime.toLocaleTimeString();
    document.getElementById("london-date").innerText = londonTime.toLocaleDateString();

    const americaTime = new Date(localTime.toLocaleString("en-US", { timeZone: "America/New_York" }));
    document.getElementById("america-time").innerText = americaTime.toLocaleTimeString();
    document.getElementById("america-date").innerText = americaTime.toLocaleDateString();
}

if (document.getElementById("local-time")) {
    setInterval(updateClocks, 1000);
}

// Task Management
if (document.getElementById("task-form")) {
    const timeSelect = document.getElementById("time");
    for (let i = 360; i <= 1380; i += 15) {
        const hours = Math.floor(i / 60);
        const minutes = i % 60;
        const timeOption = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
        timeSelect.innerHTML += `<option value="${timeOption}">${timeOption}</option>`;
    }
}

function addTask() {
    const time = document.getElementById("time").value;
    const task = document.getElementById("task").value;
    if (time && task) {
        const tasksList = document.getElementById("tasks");
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox"> <strong>${time}</strong>: ${task}`;
        tasksList.appendChild(li);
    } else {
        alert("Please fill in both time and task!");
    }
}
