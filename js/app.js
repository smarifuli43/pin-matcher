// generate pin
function generatePin() {
  const pin = Math.floor(Math.random() * 10000);
  const pinString = pin + '';
  if (pinString.length == 4) {
    document.getElementById('display-pin').value = pin;
  } else {
    generatePin();
  }
}

// pin matched or not
document.getElementById('key-pad').addEventListener('click', function (e) {
  const number = e.target.innerText;
  const calcInput = document.getElementById('typed-numbers');
  if (isNaN(number)) {
    if (number == 'C') {
      calcInput.value = '';
    }
  } else {
    const previousNumber = calcInput.value;
    calcInput.value = previousNumber + number;
  }
});
// error message
document.getElementById('submit-btn').addEventListener('click', function (e) {
  const pin = document.getElementById('display-pin').value;
  const calcInput = document.getElementById('typed-numbers').value;
  const fail = document.getElementById('notify-fail');
  const success = document.getElementById('notify-success');
  if (pin == '' && calcInput == '') {
    alert('please provide pin');
  } else {
    if (pin == calcInput) {
      success.style.display = 'block';
      fail.style.display = 'none';
      const chance = document.getElementById('chance');
      chance.style.display = 'none';
    } else {
      fail.style.display = 'block';
      success.style.display = 'none';
      // chance number validation
      chance.style.display = 'block';
      const chanceNumber = document.getElementById('chance-number');
      if (chanceNumber.innerText > 0) {
        chanceNumber.innerText--;
      } else {
        chanceNumber.innerText = 0;
        e.target.setAttribute('disabled', true);
      }
    }
  }
});
