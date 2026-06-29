function showDay(dayId, event) {

    document.querySelectorAll(".schedule").forEach(s => {
        s.classList.remove("active");
    });

    document.querySelectorAll(".day-btn").forEach(b => {
        b.classList.remove("active");
    });

    document.getElementById(dayId).classList.add("active");

    if (event) {
        event.target.classList.add("active");
    }
}

window.onload = function () {

    const days = [
        "sunday","monday","tuesday","wednesday",
        "thursday","friday","saturday"
    ];

    const todayId = days[new Date().getDay()];

    document.querySelectorAll(".schedule").forEach(s => {
        s.classList.remove("active");
    });

    const el = document.getElementById(todayId);
    if (el) el.classList.add("active");

    document.querySelectorAll(".day-btn").forEach(b => {
        b.classList.remove("active");
        if (b.textContent.toLowerCase() === todayId) {
            b.classList.add("active");
        }
    });
};
