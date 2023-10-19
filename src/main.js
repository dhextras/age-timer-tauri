const dob = new Date('2003-12-27'); // Please chnage your date of birth before building
const timer = document.getElementById("timer");

window.addEventListener("DOMContentLoaded", () => {
  renderAgeLoop(dob);
});

function getAge(dob) {
  var now = new Date();
  var currentYear = now.getFullYear();
  var nextBirthday = new Date(currentYear, dob.getMonth(), dob.getDate());

  if (now > nextBirthday) {
    nextBirthday.setFullYear(currentYear + 1);
  }

  var duration = now - dob;
  var years = duration / 31556900000;

  var majorMinor = years.toFixed(9).toString().split('.');

  var daysUntilNextBirthday = Math.ceil((nextBirthday - now) / (1000 * 60 * 60 * 24));

  return {
    "year": majorMinor[0],
    "ms": majorMinor[1],
    "daysUntilNextAge": daysUntilNextBirthday
  };
}

function renderAgeLoop() {
  setInterval(function () {
    var age = getAge(dob);
    timer.innerHTML = age.year + '<sup>.' + age.ms + '<div class="days-left">' + age.daysUntilNextAge + '</div></sup>';
  }, 100);
}
