function calculateResult() {
  // Get the current hour
  var currentHour = new Date().getHours();

  // Get the current day of the month
  var currentDay = new Date().getDate();

  // Add the current hour and current day
  var sum = currentHour + currentDay;

  // Add 2 to the sum
  var result = sum + 2;

  // Convert the result to a string
  var resultString = result.toString();

  // Get the first digit of the result
  var firstDigit = parseInt(resultString[0]);

  // Get the second digit of the result
  var secondDigit = parseInt(resultString[1]);

  // Add a number in front that is one less than the first digit
  var modifiedResult = (firstDigit - 1).toString() + resultString;

  // Add a number at the back that is one more than the second digit
  modifiedResult += (secondDigit + 1).toString();

  return modifiedResult;
}

document.addEventListener("DOMContentLoaded", function () {
  var resultElement = document.getElementById("result");
  var result = calculateResult();
  resultElement.textContent = result;
});
