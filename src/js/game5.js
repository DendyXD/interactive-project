  document.querySelector('.calculateButton-time').addEventListener('click', calculateTime);
const res = document.querySelector('#resultTime');
function calculateTime() {
  const minutesInput = document.querySelector('.inputTime').value;
  const minutes = parseInt(minutesInput);
  if (isNaN(minutes)) {
    alert('Будь ласка, введіть числове значення.');
    return;
  }

  if (minutes >= 60 && minutes < 1440) {
    const hours = Math.floor(minutes / 60);
    const leftOvers = minutes - (hours * 60);
    res.textContent = `${hours} год ${leftOvers} хв`;
    if (leftOvers === 0) {
      res.textContent = `${hours} год`;
    }
  } else if (minutes >= 1440) {
    const days = Math.floor(minutes / 1440);
    const mins = minutes - (days * 1440);
    const hours = Math.floor(mins / 60);

    const leftOvers = minutes - ((days * 1440) + hours * 60);
    res.textContent = `${days} дн ${hours} год ${leftOvers} хв`;
    if (leftOvers === 0 && hours === 0) {
      res.textContent = `${days} дн`;
    } else if (hours === 0) {
      res.textContent = `${days} дн ${leftOvers} хв`;
    } else if (leftOvers === 0 ) {
      res.textContent = `${days} дн ${hours} год`;
    }
     
  } else {
    res.textContent = `${minutes} хв`;
  }



}



