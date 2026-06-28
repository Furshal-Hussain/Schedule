// Show the selected day's schedule
function showDay(dayId) {

    // Hide all schedules
    const schedules = document.querySelectorAll(".schedule");
    schedules.forEach(schedule => {
        schedule.classList.remove("active");
    });

    // Remove active class from all buttons
    const buttons = document.querySelectorAll(".day-btn");
    buttons.forEach(button => {
        button.classList.remove("active");
    });

    // Show selected schedule
    document.getElementById(dayId).classList.add("active");

    // Highlight selected button
    event.target.classList.add("active");
}

// Automatically highlight today's day when the page loads
window.onload = function () {

    const today = new Date().getDay();

    const days = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday"
    ];

    const todayId = days[today];

    // Show today's schedule
    document.querySelectorAll(".schedule").forEach(schedule => {
        schedule.classList.remove("active");
    });

    document.getElementById(todayId).classList.add("active");

    // Highlight today's button
    document.querySelectorAll(".day-btn").forEach(button => {
        button.classList.remove("active");

        if (button.textContent.toLowerCase() === todayId) {
            button.classList.add("active");
        }
    });

};