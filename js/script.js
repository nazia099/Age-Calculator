const birthDate =document.querySelector("#birthDate")
const calculateBtn =document.querySelector("#calculateBtn")
const years =document.querySelector("#years")
const months =document.querySelector("#months")
const days =document.querySelector("#days")
const message =document.querySelector("#message")

calculateBtn.addEventListener("click" , function () {
    const birthDateValue = birthDate.value;

// check date
    if (birthDateValue === "") {
        message.textContent="Please enter your date of birth";
        return;
    }
const birth = new Date(birthDateValue);
const today = new Date();


// future date check

if (birth > today) {
    message.textContent="Birth date can not be in future";
    return;
}

message.textContent=""
let ageYears= today.getFullYear()-birth.getFullYear()
let ageMonths=today.getMonth()-birth.getMonth()
let ageDays=today.getDate()-birth.getDate()
 
// if days are negative
if (ageDays<0) {
    ageMonths--;
    const previousMonth=new Date(today.getFullYear(),today.getMonth(),0);
    ageDays +=previousMonth.getDate()
}

// if months are negative
if (ageMonths <0) {
    ageYears--;
    ageMonths +=12
}
years.textContent =ageYears
months.textContent =ageMonths
days.textContent =ageDays




})





