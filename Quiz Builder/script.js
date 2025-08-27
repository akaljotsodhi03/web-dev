const correctAnswers = {
  q1: "Paris",
  q2: ["python", "java"],
  q3: "earth",
};

document.querySelector("#quiz-form").addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  let total = Object.keys(correctAnswers).length;

  const selectedQ1 = document.querySelector('input[name="q1"]:checked');
  const userQ1 = selectedQ1 ? selectedQ1.value : "";
  if (userQ1 === correctAnswers.q1) {
    score++;
  }

  const selectedCheckboxes = Array.from(
    document.querySelectorAll('input[name="q2"]:checked')
  ).map((input) => input.value);
  const correctQ2 = correctAnswers.q2;
  const isQ2Correct =
    selectedCheckboxes.length === correctQ2.length &&
    selectedCheckboxes.every((val) => correctQ2.includes(val));
  if (isQ2Correct) {
    score++;
  }

  const userQ3 = document.getElementById("q3").value.trim().toLowerCase();
  if (userQ3 === correctAnswers.q3) {
    score++;
  }

  document.getElementById("results").textContent = `You scored ${score} out of ${total}.`;
});
