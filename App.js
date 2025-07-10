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
  clearTimeout(mytimer); // clear old timeout
  const age = inputbox.value.trim();
  answer.style.display = "none";
  result.innerHTML = "";
  newh1.innerHTML = "";

  if (age === "") {
    newh1.innerHTML = "Please enter your age below...";
    mytimer = setTimeout(() => {
      newh1.innerHTML = "";
    }, 4000);
  } else if (isNaN(age)) {
    newh1.innerHTML = "Please enter a number...";
    inputbox.value = "";
    mytimer = setTimeout(() => {
      newh1.innerHTML = "";
    }, 4000);
    inputbox.value = "";
  } else {
    answer.style.display = "block";
    let remaining_years = 90 - age;
    let remaining_weeks = remaining_years * 52;
    let formatted = remaining_weeks.toLocaleString();
    result.innerHTML = formatted;
    inputbox.value = "";
  }
});

resetbtn.addEventListener("click", () => {
  refresh.click();
});
