document.addEventListener("DOMContentLoaded", function () {

document.getElementById("akanForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let day = parseInt(document.getElementById("day").value);
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);
    let gender = document.querySelector('input[name="gender"]:checked');

    // Validation
    if (!day || !month || !year || !gender) {
        alert("Please fill in all fields and select gender.");
        return;
    }

    if (day < 1 || day > 31) {
        alert("Invalid day. Enter between 1 and 31.");
        return;
    }

    if (month < 1 || month > 12) {
        alert("Invalid month. Enter between 1 and 12.");
        return;
    }

    // Create date object (month is 0-indexed in JS, so subtract 1)
    let date = new Date(year, month - 1, day);

    // Validate the date (catches Feb 30, Apr 31, etc.)
    if (date.getDate() !== day || date.getMonth() !== month - 1 || date.getFullYear() !== year) {
        alert("Invalid date. Please check your day, month, and year.");
        return;
    }

    // Get day of week: 0=Sunday, 1=Monday, ..., 6=Saturday
    let d = date.getDay();

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    let dayName = days[d];
    let akanName = gender.value === "male" ? maleNames[d] : femaleNames[d];

    // OUTPUT
    document.getElementById("result").innerHTML =
        `You were born on <strong>${dayName}</strong><br>
         Your Akan name is <strong>${akanName}</strong>`;

    document.getElementById("result").classList.add("show");

    // clear form
    document.getElementById("akanForm").reset();
});

// Theme toggle
document.getElementById("toggleTheme").addEventListener("click", function () {
    document.body.classList.toggle("dark");
});

});
