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

    let dayIndex = date.getDay(); // 0-6 (Sunday-Saturday)

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    let akanName = gender.value === "male"
        ? maleNames[dayIndex]
        : femaleNames[dayIndex];

    resultDiv.innerHTML = `
        <h3>✨ Your Result</h3>
        <p>You were born on <strong>${days[dayIndex]}</strong></p>
        <p>Your Akan name is <strong>${akanName}</strong></p>
    `;

    resultDiv.classList.add("show");
});

resetBtn.addEventListener("click", () => {
    form.reset();
    resultDiv.classList.remove("show");
    resultDiv.innerHTML = "";
});