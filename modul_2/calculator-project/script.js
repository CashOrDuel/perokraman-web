let display = document.getElementById('display');
let inputValue = '';
let lastInput = '';

function appendToDisplay(value) {
  inputValue += value;
  lastInput = value;
  display.value = inputValue;
}

function clearDisplay() {
  inputValue = '';
  display.value = '';
  lastInput = '';
}

function calculate() {
  try {
    const result = eval(inputValue.replace(/\^/g, '**'));
    display.value = result;
    inputValue = result.toString();
  } catch (error) {
    display.value = 'Error';
  }
}