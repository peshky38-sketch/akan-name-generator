document.getElementById("akanForm").addEventListener("submit", function(e) {
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
   
    // Formula
    let d = Math.floor