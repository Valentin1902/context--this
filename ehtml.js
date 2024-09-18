//Завдання 3

const Button = document.getElementById("btnClickMe");
const body = document.body;

const colors = ["red", "blue", "green", "yellow", "white", "black"];
let colorIndex = 0;

Button.addEventListener("click", (e) => {
  body.style.backgroundColor = colors[colorIndex];

  colorIndex = (colorIndex + 1) % colors.length;
});

//Завдання 4
const NoVisionBtn = document.getElementById("TextNoVision");
const TextHtml = document.getElementById("Text");

NoVisionBtn.addEventListener("click", (e) => {
  if (TextHtml.style.display === "none") {
    TextHtml.style.display = "block";
  } else {
    TextHtml.style.display = "none";
  }
});

//Завдання 5

const ClickResult = document.getElementById("ClickResult");
const Result = document.getElementById("Result");

let clickCount = 0;

ClickResult.addEventListener("click", (e) => {
  clickCount++;
  Result.textContent = clickCount;
});

//Завдання 6
const Zag = document.getElementById("Zagolovok");
const stopButton = document.getElementById("ButtonChangeColor");

function changeColor() {
  Zag.style.color = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}

let colorInterval = setInterval(changeColor, 500);

stopButton.addEventListener("click", () => {
  clearInterval(colorInterval);
});

//Завдання 1
const StartInterval = document.getElementById("Start");
const StopButtonN = document.getElementById("Stop");
const messageElement = document.getElementById("message");

let timeoutId;

StartInterval.addEventListener("click", () => {
  clearTimeout(timeoutId);

  timeoutId = setTimeout(() => {
    messageElement.textContent = "Час минув!";
  }, 5000);
});

StopButtonN.addEventListener("click", () => {
  clearTimeout(timeoutId);
});

// Завдання 2

const StartNumber = document.getElementById("StartNumber");
const StopNumber = document.getElementById("StopNumber");
const NumberInterval = document.getElementById("NumberInterval");
const ClearNumber = document.getElementById("Clear");

let intervalId;
let NumberCurrent = 0;

function updateDisplay() {
  NumberInterval.textContent = NumberCurrent;
}
StartNumber.addEventListener("click", () => {
  clearInterval(intervalId);

  intervalId = setInterval(() => {
    if (NumberCurrent <= 10) {
      updateDisplay();
      NumberCurrent++;
    } else {
      clearInterval(intervalId);
    }
  }, 500);
});

StopNumber.addEventListener("click", () => {
  clearInterval(intervalId);
});

ClearNumber.addEventListener("click", () => {
  clearInterval(intervalId);
  NumberCurrent = 0;
  updateDisplay();
});
