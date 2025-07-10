const displaybox = document.querySelector("#display_box");
const inputbox = document.querySelector("#input_box");
const calculatebtn = document.querySelector("#calculate_btn");
const resetbtn = document.querySelector("#reset_btn");
const result = document.querySelector("#result");
const answer = document.querySelector("#answer");
const refresh = document.querySelector("#refresh");

let newh1 = document.createElement("h1");
newh1.style.color = "white";
displaybox.appendChild(newh1);

let mytimer;

calculatebtn.addEventListener("click", () => {
  clearInterval(mytimer);
  const age = inputbox.value.trim();
  answer.style.display = "none";
  result.innerHTML = "";

  if (age === "") {
    newh1.innerHTML = "Please enter your age below...";
    mytimer = setInterval(() => {
      newh1.innerHTML = "";
    }, 4000);
  } else if (isNaN(age)) {
    newh1.innerHTML = "Please enter a number...";
    inputbox.value = "";
    mytimer = setInterval(() => {
      newh1.innerHTML = "";
    }, 4000);
  } else {
    answer.style.display = "block";
    let remaining_years = 90 - age;
    let remaining_weeks = remaining_years * 52;
    let formmated = remaining_weeks.toLocaleString();
    result.innerHTML = formmated;
    inputbox.value = "";
  }
});

resetbtn.addEventListener("click", () => {
  refresh.click();
});
