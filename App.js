const displaybox = document.querySelector("#display_box");
const inputbox = document.querySelector("#input_box");
const calculatebtn = document.querySelector("#calculate_btn");
const resetbtn = document.querySelector("#reset_btn");
const result = document.querySelector("#result");
const answer = document.querySelector("#answer");

let newh1 = document.createElement("h1");
newh1.style.color = "white";
displaybox.appendChild(newh1);
newh1.innerHTML = "Please enter your age below...";
let mytimer;

calculatebtn.addEventListener("click", () => {
  const age = inputbox.value.trim();
  answer.style.display = "none";
  result.innerHTML = "";

  if (age === "") {
    newh1.innerHTML = "Please enter your age below...";
  } else if (isNaN(age)) {
    newh1.innerHTML = "Please enter a number...";
  } else {
    answer.style.display = "block";
    let remaining_years = 90 - age;
    let remaining_weeks = remaining_years * 52;
    let formmated = remaining_weeks.toLocaleString();
    result.innerHTML = formmated;
    inputbox.value = "";
    clearInterval(mytimer);
  }
});

resetbtn.addEventListener("click", () => {
  answer.innerHTML = "";
});

mytimer = setInterval(() => {
  newh1.innerHTML = "";
}, 4000);
