let displayValue = '';

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function deleteLast() {
  displayValue = displayValue.slice(0, -1);
  updateDisplay();
}

function appendNumber(number) {
  displayValue += number;
  updateDisplay();
}

function appendOperator(operator) {
  const lastChar = displayValue.slice(-1);
  if (['+', '-', '*', '/'].includes(lastChar)) {
    displayValue = displayValue.slice(0, -1);
  }
  displayValue += operator;
  updateDisplay();
}

function calculateResult() {
  try {
    displayValue = eval(displayValue).toString();
  } catch {
    displayValue = 'Error';
  }
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').textContent = displayValue || '0';
}
