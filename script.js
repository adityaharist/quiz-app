const quizData = [
    {
        question: "Why is it not recommended to make all of a class's variable public in PHP?",
        a: "You can then access the attribute only whithin the class itself, and by inheriting and parent classes.",
        b: "Doing so makes your code tightly coupled.",
        c: "The attribute may be accessed only by the class that defines the member.",
        d: "You will have no control over which value the attribute can take. Any external code will be able to change it without any constraint.",
        correct: "d",
    },
    {
        question: "What are some of the main types of errors in PHP?",
        a: "runtime, logical, compile",
        b: "warnings, syntax, compile",
        c: "notices, warnings, fatal",
        d: "semantic, logical, syntax",
        correct: "c",
    },
    {
        question: "Which two functions can sanitize text and validate text formats?",
        a: "session_start() and filter_input()",
        b: "preg_match() and session_start()",
        c: "filter_var() and filter_input()",
        d: "filter_var() and strstr()",
        correct: "c",
    },
    {
        question: "Which PHP variable name is invalid?",
        a: "$2times",
        b: "$Double",
        c: "$_2times",
        d: "$double",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
