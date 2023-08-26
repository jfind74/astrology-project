const userForm = document.getElementById("user-form");

// store the astological sign in sessionStorage value sunSign
function calculateAstrology(month, day) {
    console.log(month)
}

if (userForm != null) {
    userForm.addEventListener("submit", function (event) {
        let birthDate = document.getElementById("birth-date");
        let birthTime = document.getElementById("birth-time");
        if (birthDate != null) {
            let month = birthDate.value.slice(5,7);
            let day = birthDate.value.slice(8,10);
            calculateAstrology(month, day);
        }
        event.preventDefault();
    })
}