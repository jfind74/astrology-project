const userForm = document.getElementById("user-form");

// contains information about the signs
const Aries = { name:"Aries",date: "21/3 - 19/4",elements: "Fire",compatible:"Leo, Sagittarius", index:0}
const Taurus = { name:"Taurus",date: "20/4 - 20/5",elements: "Earth",compatible:"Virgo, Capricorn", index:1}
const Gemini = { name:"Gemini",date: "21/5 - 21/6",elements: "Air",compatible:"Libra, Auquarius", index:2}
const Cancer = { name:"Cancer",date: "22/6 - 22/7",elements: "Water",compatible:"Scorpio, Pisces", index:3}
const Leo = { name:"Leo",date: "23/7 - 22/8",elements: "Fire",compatible:"Aries, Sagittarius", index:4}
const Virgo = { name:"Virgo",date: "23/8 - 22/9",elements: "Earth",compatible:"Capricorn, Taurus", index:5}
const Libra = { name:"Libra",date: "23/9 - 23/10",elements: "Air",compatible:"Gemini, Aquarius", index:6}
const Scorpio = { name:"Scorpio",date: "24/10 - 22/11",elements: "Water",compatible:"Cancer, Pisces", index:7}
const Sagittarius = { name:"Sagittarius",date: "23/11 - 21/12",elements: "Fire",compatible:"Aries, Leo", index:8}
const Capricorn = { name:"Capricorn",date: "22/12 - 19/1",elements: "Earth",compatible:"Taurus, Virgo", index:9}
const Aquarius = { name:"Aquarius",date: "20/1 - 18/2",elements: "Air",compatible:"Gemini, Libra", index:10}
const Pisces = { name:"Pisces",date: "19/2 - 20/3",elements: "Water",compatible:"cancer, Scorpio", index:11}

const signs = [Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces];

// store the astological sign in sessionStorage value sunSign
function calculateAstrology(date) {
    let compareDay = date.slice(5); // date in form "MM-DD"
    var result = null;
    if (compareDay <= "01-19") {
        result = Capricorn;
    } else if (compareDay <= "02-18") {
        result = Aquarius;
    } else if (compareDay <= "03-20") {
        result = Pisces;
    } else if (compareDay <= "04-19") {
        result = Aries;
    } else if (compareDay <= "05-20") {
        result = Taurus;
    } else if (compareDay <= "06-21") {
        result = Gemini;
    } else if (compareDay <= "07-22") {
        result = Cancer;
    } else if (compareDay <= "08-22") {
        result = Leo;
    } else if (compareDay <= "09-22") {
        result = Virgo;
    } else if (compareDay <= "10-23") {
        result = Libra;
    } else if (compareDay <= "11-22") {
        result = Scorpio;
    } else if (compareDay <= "21-12") {
        result = Sagittarius;
    } else {
        result = Capricorn;
    }
    return result
}

// allows cycling through signs to calculate the rising signs
function getnthNextSign(sign, n) {
    return signs[(sign.index + n) % 12];
}

function calculateRising(sunSign, birthTime) {
    hourOfBirth = Number(birthTime.slice(0,2))
    return getnthNextSign(result, Math.floor((hourOfBirth - 4) / 2))
}

if (userForm != null) {
    userForm.addEventListener("submit", function (event) {
        let birthDate = document.getElementById("birth-date");
        let birthTime = document.getElementById("birth-time");
        if (birthDate != null) {
            sessionStorage.setItem("birthDate", birthDate.value);
            result = calculateAstrology(birthDate.value);
            sessionStorage.setItem("elements", result.elements);
            sessionStorage.setItem("compatible", result.compatible);
            sessionStorage.setItem("sunSign", result.name);
            sessionStorage.setItem("risingSign", calculateRising(result, birthTime.value).name)
        }
        let userName = document.getElementById("user-name");
        if (userName != null) {
            sessionStorage.setItem("userName", userName.value);
        }
        event.preventDefault();
        window.location.href = 'result.html';
    })
}

const signName = document.getElementById("sign-name");
if (signName != null) {
    signName.innerHTML = sessionStorage.getItem("sunSign");
}

const namePlace = document.getElementById("name");
if (namePlace != null) {
    namePlace.innerHTML = sessionStorage.getItem("userName");
}

const dobPlace = document.getElementById("DoB");
if (dobPlace != null) {
    dobPlace.innerHTML = sessionStorage.getItem("birthDate");
}

const element = document.getElementById("element");
if (element != null) {
    element.innerHTML = sessionStorage.getItem("elements");
}

const compatible = document.getElementById("sign-compitable");
if (compatible != null) {
    compatible.innerHTML = sessionStorage.getItem("compatible");
}

const signImage = document.getElementById("sign-image");
if (signImage != null) {
    signImage.src = "sign-images/" + sessionStorage.getItem("sunSign") + ".png";
}