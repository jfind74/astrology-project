const userForm = document.getElementById("user-form");

console.log(sessionStorage.getItem("birthDate"));

if (userForm != null) {
    userForm.addEventListener("submit", function (event) {
        let birthDate = document.getElementById("birth-date");
        let birthTime = document.getElementById("birth-time");
        if (birthDate != null) {
            calculateAstrology(birthDate.value, birthTime.value);
        }
        event.preventDefault();
    })
}

function calculateAstrology(date, time) {
    console.log(date);
    console.log(time);
}