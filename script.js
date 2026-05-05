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

        // Split year into CC and YY
        let yearString = year.toString();
        let CC = parseInt(yearString.slice(0, 2));
        let YY = parseInt(yearString.slice(2));
        let MM = month;
        let DD = day;

        // Apply formula correctly (floor EACH division)
        let term1 = Math.floor(CC / 4) - (2 * CC) - 1;
        let term2 = Math.floor((5 * YY) / 4);
        let term3 = Math.floor((26 * (MM + 1)) / 10);
        let term4 = DD;

        let total = term1 + term2 + term3 + term4;

        let d = total % 7;

        // Handle negative modulo
        if (d < 0) {
            d += 7;
        }

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
