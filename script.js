const form = document.getElementById("akanForm");
const resultDiv = document.getElementById("result");
const resetBtn = document.getElementById("resetBtn");
form.addEventListener("submit", function(e) {
    e.preventDefault();

    let dateInput = document.getElementById("birthdate").value;
    let gender = document.querySelector('input[name="gender"]:checked');

    if (!dateInput || !gender) {
        alert("Please select a valid date and gender.");
        return;
    }
    let date = new Date(dateInput);
   
    // Extra validation (real date check)
    if (isNaN(date.getTime())) {
        alert("Invalid date entered.");
        return;
    }