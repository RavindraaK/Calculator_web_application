let displayValue = "";

function appendToDisplay(value) {
  displayValue += value;
  updateDisplay();
}

function clearDisplay() {
  displayValue = "";
  updateDisplay();
}

function deleteDigit() {
  displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function calculate() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = "Error";
    updateDisplay();
  }
}

function updateDisplay() {
  const display = document.getElementById("display");
  display.value = displayValue;
}

function calculateResult() {
  try {
    let result = eval(displayValue);
    // displayValue = result;
    displayValue = result.toString();
  } catch (error) {
    displayValue = "Error";
    updateDisplay();
  }
}

document.addEventListener("keydown", function (event) {
  if (/^[0-9+\-*/\n]$/.test(event.key)) {
    appendToDisplay(event.key);
  } else if (event.key === "Enter") {
    calculateResult();
  } else if (event.key === "Backspace") {
    clearDisplay();
  }
});


