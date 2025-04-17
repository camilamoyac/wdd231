function getDaysBetween(date1, date2) {
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const diffInMs = Math.abs(date1 - date2);
    return Math.floor(diffInMs / millisecondsPerDay);
}

const messageDiv = document.getElementById("visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

let message = "";

if (!lastVisit) {
    message = "Welcome! Let us know if you have any questions.";
} else {
    const daysPassed = getDaysBetween(now, parseInt(lastVisit));

    if (daysPassed < 1) {
        message = "Back so soon! Awesome!";
    } else if (daysPassed === 1) {
        message = "You last visited 1 day ago.";
    } else {
        message = `You last visited ${daysPassed} days ago.`;
    }
}

messageDiv.textContent = message;
localStorage.setItem("lastVisit", now.toString());