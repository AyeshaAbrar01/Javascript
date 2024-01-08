let displayValue = '';
let ansValue = ''; 

function appendToDisplay(value) {
  displayValue += value;
  document.querySelector('.showresult').innerText = displayValue;
}

function properties() { 
      document.querySelector('.showresult').style.textAlign="center";
      document.querySelector('.showresult').style.paddingTop="10px";
      document.querySelector('.showresult').style.fontSize="30px";
   }

function calculate() {
  try {
    ansValue = eval(displayValue);
    if (isNaN(ansValue) || !isFinite(ansValue)) {
      throw new Error('Invalid operation');
      properties();
    }
    document.querySelector('.showresult').innerText = ansValue;
    properties();

    displayValue = '';
  } catch (error) {
    document.querySelector('.showresult').innerText = 'Error';
    properties();
  }
}

function clearDisplay() {
  displayValue = '';
  document.querySelector('.showresult').innerText = '';
  properties();
}

function removeLast() {
  displayValue = displayValue.slice(0, -1);
  document.querySelector('.showresult').innerText = displayValue;
  properties();
}

function showAnswer() {
  displayValue = ansValue;
  document.querySelector('.showresult').innerText = displayValue;
  properties();
}

document.getElementById('reset').addEventListener('click', clearDisplay);
document.getElementById('clear').addEventListener('click', removeLast);

document.getElementById('equal').addEventListener('click', calculate);

const buttons = document.querySelectorAll('.btn:not(#reset):not(#clear):not(#start):not(#equal)');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.innerText;
    appendToDisplay(value);
    properties();
  });
});
document.getElementById('answer').addEventListener('click', showAnswer);
