document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("submitBtn").addEventListener("click", checkAnswers);
});

function checkAnswers() {
  var correctAnswers = ["a", "a", "b", "c", "c", "a", "b", "d", "c", "a"]; // Replace with correct answers for each question
  var userAnswers = [];
  for (var i = 1; i <= 10; i++) {
    var selectedOption = document.querySelector('input[name="q' + i + '"]:checked');
    if (selectedOption) {
      userAnswers.push(selectedOption.value);
    } else {
      alert("Please answer all questions.");
      return;
    }
  }
  var allCorrect = true;
  for (var i = 0; i < correctAnswers.length; i++) {
    if (correctAnswers[i] !== userAnswers[i]) {
      allCorrect = false;
      break;
    }
  }
  if (allCorrect) {
    document.getElementById("questions").style.display = "none";
    document.getElementById("result").style.display = "block";
  } else {
    alert("Sorry, you did not pass the security test. Please try again.");
  }
}
