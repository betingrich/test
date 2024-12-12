// Greeting Users
if (document.getElementById("greeting")) {
    const username = localStorage.getItem("username");
    document.getElementById("greeting").textContent = `Welcome, ${username}!`;
}

// Clocks
function updateClocks() {
    const localTime = new Date();
    document.getElementById("local-time").textContent = localTime.toLocaleTimeString();
    document.getElementById("local-date").textContent = localTime.toDateString();

    const londonTime = new Date(localTime.toLocaleString("en-US", { timeZone: "Europe/London" }));
    document.getElementById("london-time").textContent = londonTime.toLocaleTimeString();
    document.getElementById("london-date").textContent = londonTime.toDateString();

    const americaTime = new Date(localTime.toLocaleString("en-US", { timeZone: "America/New_York" }));
    document.getElementById("america-time").textContent = americaTime.toLocaleTimeString();
    document.getElementById("america-date").textContent = americaTime.toDateString();
}

if (document.getElementById("local-time")) setInterval(updateClocks, 1000);

// Tasks
if (document.getElementById("time")) {
    const timeSelect = document.getElementById("time");
    for (let i = 360; i <= 1380; i += 15) {
        const hours = Math.floor(i / 60);
        const minutes = i % 60;
        timeSelect.innerHTML += `<option>${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}</option>`;
    }
}

function addTask() {
    const time = document.getElementById("time").value;
    const task = document.getElementById("task").value;
    if (time && task) {
        const tasks = document.getElementById("tasks");
        const li = document.createElement("li");
        li.innerHTML = `<span>${time}: ${task}</span><input type="checkbox">`;
        tasks.appendChild(li);
    } else {
        alert("Fill out all fields!");
    }
}
