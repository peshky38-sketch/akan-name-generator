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

        // Split year
        let CC = parseInt(year.toString().slice(0, 2));
        let YY = parseInt(year.toString().slice(2));

        // Correct formula (FIXED)
        let d = Math.floor(
            ((4 * CC - 2 * CC - 1) +
            (5 * YY) +
            Math.floor((26 * (month + 1)) / 10) +
            day) % 7
        );

        if (d < 0) d += 7;

        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
        let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

        let dayName = days[d];
        let akanName = gender.value === "male" ? maleNames[d] : femaleNames[d];

        document.getElementById("result").innerText =
            `You were born on ${dayName}. Your Akan name is ${akanName}.`;

        // clear form
        document.getElementById("akanForm").reset();
    });

});