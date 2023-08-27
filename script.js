const userForm = document.getElementById("user-form");

// contains information about the signs
const Aries = { name:"Aries",date: "21/3 - 19/4",elements: "Fire",compatible:"Leo, Sagittarius",characteristics:"dynamic, confident, and adventurous",like:"taking the lead and trying new things",dislike:"being held back by rules",romance:"they're passionate and enjoy a chase",rising:"Energetic, Assertive, Dynamic"}
const Taurus = { name:"Taurus",date: "20/4 - 20/5",elements: "Earth",compatible:"Virgo, Capricorn",characteristics:"reliable, patient, and practical",like:"taking the lead and trying new things",dislike:"sudden changes",romance:"they're affectionate and seek security",rising:"Grounded, Sensual, Calm"}
const Gemini = { name:"Gemini",date: "21/5 - 21/6",elements: "Air",compatible:"Libra, Auquarius",characteristics:"curious, adaptable, and witty",like:"learning and socializing",dislike:"like boredom",romance:"they're charming and seek mental stimulation",rising:"Curious, Adaptable, Witty"}
const Cancer = { name:"Cancer",date: "22/6 - 22/7",elements: "Water",compatible:"Scorpio, Pisces",characteristics:"nurturing, intuitive, and empathetic",like:" creating a cozy home and emotional connections",dislike:"feeling vulnerable",romance:"they're devoted and seek emotional depth",rising:"Nurturing, Sensitive, Protective"}
const Leo = { name:"Leo",date: "23/7 - 22/8",elements: "Fire",compatible:"Aries, Sagittarius",characteristics:"confident, charismatic, and creative",like:"being the center of attention and expressing themselves",dislike:"being ignored",romance:"they're generous and seek admiration",rising:"Charismatic, Confident, Theatrical"}
const Virgo = { name:"Virgo",date: "23/8 - 22/9",elements: "Earth",compatible:"Capricorn, Taurus",characteristics:"practical, detail-oriented, and analytical",like:"organization and helping others",dislike:"chaos",romance:"they're loyal and seek practical compatibility",rising:"Analytical, Organized, Practical"}
const Libra = { name:"Libra",date: "23/9 - 23/10",elements: "Air",compatible:"Gemini, Aquarius",characteristics:"charming, diplomatic, and sociable",like:"balance and beauty",dislike:"conflict",romance:"they're romantic and seek harmony",rising:"Charming, Diplomatic, Harmonious"}
const Scorpio = { name:"Scorpio",date: "24/10 - 22/11",elements: "Water",compatible:"Cancer, Pisces",characteristics:"intense, intuitive, and determined",like:"depth and uncovering secrets",dislike:"betrayal",romance:"they're passionate and seek deep connections",rising:"Intense, Mysterious, Magnetic"}
const Sagittarius = { name:"Sagittarius",date: "23/11 - 21/12",elements: "Fire",compatible:"Aries, Leo",characteristics:"adventurous, optimistic, and independent",like:"exploring and freedom",dislike:"restrictions",romance:"they're open-minded and seek shared adventures.",rising:"Adventurous, Optimistic, Lively"}
const Capricorn = { name:"Capricorn",date: "22/12 - 19/1",elements: "Earth",compatible:"Taurus, Virgo",characteristics:"responsible, disciplined, and ambitious",like:"success and tradition",dislike:"inefficiency",romance:"they're patient and seek a partner for the long haul",rising:"Responsible, Disciplined, Composed"}
const Aquarius = { name:"Aquarius",date: "20/1 - 18/2",elements: "Air",compatible:"Gemini, Libra",characteristics:"innovative, independent, and humanitarian",like:"intellectual pursuits and making a difference",dislike:"conformity",romance:"they're unique and seek mental rapport",rising:"Unique, Independent, Forward-thinking"}
const Pisces = { name:"Pisces",date: "19/2 - 20/3",elements: "Water",compatible:"cancer, Scorpio",characteristics:"empathetic, artistic, and intuitive",like:"daydreaming and creative expression",dislike:"harsh realities",romance:"they're romantic and seek a deep soul connection",rising:"Empathetic, Dreamy, Artistic"}

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
    hourOfBirth = Number(birthTime.slice(0,2));
    var result =  getnthNextSign(result, Math.floor((hourOfBirth - 4) / 2));
    return result;
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
            //let risingSign = calculateRising(result, birthTime.value);
            //sessionStorage.setItem("risingSign", risingSign.name);
            sessionStorage.setItem("dateRange", result.date); // date range for the sign
        }
        let userName = document.getElementById("user-name");
        if (userName != null) {
            sessionStorage.setItem("userName", userName.value);
        }
        event.preventDefault();
        window.location.href = 'result.html';
    })
}

const signName = document.getElementsByClassName("sign-name");
[].slice.call(signName).forEach(function (location) {location.innerHTML = sessionStorage.getItem("sunSign")});

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

const dateRange = document.getElementById("date");
if (dateRange != null) {
    dateRange.innerHTML = sessionStorage.getItem("dateRange");
}