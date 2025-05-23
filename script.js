function updateClock() {
    // Create a Date object for current time
    const now = new Date();

    // Get UTC time components
    const utcHours = now.getUTCHours();
    const utcMinutes = now.getMinutes();
    const utcSeconds = now.getSeconds();

    // Calculate Tokyo time (UTC+9)
    let tokyoHours = utcHours + 9;

    // Handle date changes if adding 9 hours pushes it to the next day
    if (tokyoHours >= 24) {
        tokyoHours -= 24;
    }

    // Format time as HH:MM:SS
    const formattedHours = String(tokyoHours).padStart(2, '0');
    const formattedMinutes = String(utcMinutes).padStart(2, '0');
    const formattedSeconds = String(utcSeconds).padStart(2, '0');
    const tokyoTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

    // Select the div element with the ID clock
    const clockDiv = document.getElementById('clock');

    // Update the textContent of the div#clock
    if (clockDiv) {
        clockDiv.textContent = tokyoTime;
    }
}

// Call updateClock once immediately
updateClock();

// Call updateClock every second
setInterval(updateClock, 1000);
