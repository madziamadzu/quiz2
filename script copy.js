const startBtn = document.getElementById('startQuiz');
const titlePage = document.getElementById('titlePage');
const quizContainer = document.getElementById('quiz');

startBtn.addEventListener('click', () => {
    titlePage.style.display = 'none'; // Hide the title page
    quizContainer.style.display = 'block'; // Show the quiz
    loadQuiz(); // Load the first question
});

// Quiz Logic
const quizData = [
    {
        question: "What day of the week was she found?",
        a: "Friday",  // Correct
        b: "Thursday",
        c: "Sunday",
        d: "Monday",
        correct: "a",
    },
    {
        question: "Who found her?",
        a: "Magdalena",
        b: "Filip",  // Correct
        c: "Neighbor",
        d: "Filip & Magdalena",
        correct: "b",
    },
    {
        question: "What time did Filip find her?",
        a: "16:47",
        b: "20:24",
        c: "18:33",
        d: "17:09",  // Correct
        correct: "d",
    },
    {
        question: "Where did she puke most recently?",
        a: "Filip’s bed",
        b: "Kitchen carpet",
        c: "Outside",
        d: "All over her own bed",  // Correct
        correct: "d",
    },
    {
        question: "Which birthday are we celebrating?",
        a: "3rd",
        b: "5th",  // Correct
        c: "6th",
        d: "4th",
        correct: "b",
    },
    {
        question: "What does her ear tattoo say?",
        a: "WTA095",  // Correct
        b: "WLA095",
        c: "WTR085",
        d: "VTA059",
        correct: "a",
    },
    {
        question: "What is her chip ID number?",
        a: "208217849016652",
        b: "207213999026352",
        c: "208213999016352",  // Correct
        d: "209213999346352",
        correct: "c",
    },
    {
        question: "What color is her collar?",
        a: "Pink",
        b: "Blue",
        c: "Red",  // Correct
        d: "Yellow",
        correct: "c",
    }
];

const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quizContainer.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2>
                                       <button onclick="location.reload()">Restart Quiz</button>`;
        }
    }
});
