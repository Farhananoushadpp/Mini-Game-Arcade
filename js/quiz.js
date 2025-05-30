const quizData = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyperlink and Text Markup Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which language is used to style a webpage?",
    options: ["HTML", "CSS", "JavaScript"],
    answer: "CSS"
  },
  {
    question: "Which is used to add interactivity to a page?",
    options: ["HTML", "CSS", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "Which of the following is not a version control system?",
    options: ["Git","Mercurial","Subversion","Docker"],
    answer: "Docker"
  }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const q = quizData[currentQuestion];
  document.getElementById("question").innerText = q.question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => checkAnswer(option);
    answersDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = quizData[currentQuestion].answer;
  if (selected === correct) {
    score++;
  }
  // Disable all buttons
  const buttons = document.querySelectorAll("#answers button");
  buttons.forEach(btn => btn.disabled = true);

  // Highlight correct and wrong
  buttons.forEach(btn => {
    if (btn.innerText === correct) {
      btn.style.backgroundColor = "green";
    } else if (btn.innerText === selected) {
      btn.style.backgroundColor = "red";
    }
  });
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result").innerHTML = `<h3>Your Score: ${score}/${quizData.length}</h3>`;
  }
}

window.onload = showQuestion;
