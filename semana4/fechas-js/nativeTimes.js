const today = new Date();

document.getElementById("today").innerHTML += "<p>" + today + "</p>";



const TWO_DAYS_IN_MS = 2 * 24 * 60 * 60 * 1000;
const twoDayslater = new Date(today.getTime() + TWO_DAYS_IN_MS);

document.getElementById("twoDayslater").innerHTML += "<p>" + twoDayslater + "</p>";



const yesterday = new Date("2023-06-30");
const ONE_DAYS_IN_MS = 1 * 24 * 60 * 60 * 1000;

const diffInMilliseconds = today.getTime() - yesterday.getTime();

const diffDays = diffInMilliseconds / ONE_DAYS_IN_MS;
const diffDaysMath = Math.floor(diffInMilliseconds / ONE_DAYS_IN_MS);


document.getElementById("diffDays").innerHTML += "<p>" + diffDays + "</p>";
document.getElementById("diffDaysMath").innerHTML += "<p>" + diffDaysMath + "</p>";


console.log();