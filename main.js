
let question = document.getElementById('question');
let optionOne = document.getElementById('optionOne');
let optionTwo = document.getElementById('optionTwo');
let optionthree = document.getElementById('optionthree');

let timeLine = document.getElementById("time-line");
let timeText = document.getElementById("time-text");
let timeCount = document.getElementById("time-sec");

let nextBtn = document.getElementById("next-btn");
let totalQue = document.getElementById("totalQue");

let counter;
let counterLine;
let questionCounter = 1;

const questionsList = [{
    question: "من هو مؤسس الدولة السعودية الأولى ؟",
    options: ["الإمام محمد بن سعود", "الإمام تركي بن عبدالله ", "الإمام عبدالله بن فيصل "],
    answer: "الإمام محمد بن سعود",
}, {
    question: "عاصمة الدولة السعودية الأولى هي ؟",
    options: ["الرياض", "الدرعية", "مكة"],
    answer: "الدرعية",
}, {
    question: "قامة الدعوة الاصلاحية على يد الشيخ ؟",
    options: ["عبدالعزيز بن محمد", "محمد بن عبدالوهاب", "تركي بن محمد"],
    answer: "محمد بن عبدالوهاب",
}, {
    question: "تأسست الدولة السعودية الأولى عام ؟",
    options: ["1152 هـ", "1155 هـ", "1139 هـ"],
    answer: "1139 هـ",
}, {
    question: "استمرت الدولة السعودية الأولى .... عامًا ؟",
    options: ["94", "93", "90"],
    answer: "94",
    // 1233ه  
    // 1818 م 
}]




function fillQuestionAndAnswers(objQ) {
    question.innerText = objQ.question
    optionOne.innerText = objQ.options[0];
    optionTwo.innerText = objQ.options[1];
    optionthree.innerText = objQ.options[2];
}


fillQuestionAndAnswers(questionsList[0]) //calling the fill Question method 
startTimer(15);
timerLine(0)
totalQuefun(1)



function getTheCorrectAnswer(event) {
    let clickedButton = event.target;
    console.log("clickedButton");
    console.log("clickedButton.innerText", clickedButton.innerText);

    let questionValue = question.innerText.trim();
    let optionOneValue = optionOne.innerText.trim();
    let optionTwoValue = optionTwo.innerText.trim();
    let optionthreeValue = optionthree.innerText.trim();

    console.log("questionValue", questionValue);
    console.log("optionTwoValue", optionTwoValue, "optionthreeValue", optionthreeValue);

    let currentQuestion = questionsList.find((ele) => ele.question.trim() === questionValue)

    console.log("currentQuestion", currentQuestion);

    clearInterval(counter);
    clearInterval(counterLine);

    if (currentQuestion.answer === clickedButton.innerText) {
        clickedButton.classList.add("successbtn")
    } else if (currentQuestion.answer === optionOneValue) {
        optionOne.classList.add("successbtn")
        clickedButton.classList.add("wrongbtn");
    } else if (currentQuestion.answer === optionTwoValue) {
        optionTwo.classList.add("successbtn")
        clickedButton.classList.add("wrongbtn");
    } else if (currentQuestion.answer === optionthreeValue) {
        optionthree.classList.add("successbtn")
        clickedButton.classList.add("wrongbtn");
    } else {
        optionOne.style.backgroundColor = '';
        optionTwo.style.backgroundColor = '';
        optionthree.style.backgroundColor = '';
    }

    optionOne.classList.add("disabled");
    optionTwo.classList.add("disabled");
    optionthree.classList.add("disabled");

    nextBtn.classList.add("show");

}

function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time;
        time--;
        if (time < 9) {
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if (time < 0) {
            clearInterval(counter);
            timeText.textContent = "الوقت انتهى";

            optionOne.classList.add("disabled");
            optionTwo.classList.add("disabled");
            optionthree.classList.add("disabled");

            nextBtn.classList.add("show");
        }
    }
}

function totalQuefun(index) {
    let text = `${index} من ${questionsList.length} اسئلة`
    totalQue.innerText = text;
}


function timerLine(time) {
    let parentWidth = timeLine.parentElement.clientWidth;
    counterLine = setInterval(timer, 18.5);
    function timer() {
        time += 1;
        timeLine.style.width = time + "px";
        if (time > parentWidth) {
            clearInterval(counterLine);
        }
    }
}


function nextQuestion() {
    if (questionCounter <= questionsList.length - 1) {
        fillQuestionAndAnswers(questionsList[questionCounter]);
        questionCounter += 1;
        clearInterval(counter);
        clearInterval(counterLine);
        timeCount.innerText = 15
        timeText.textContent = " الوقت المتبقي";
        startTimer(15);
        timerLine(0);
        totalQuefun(questionCounter);
        nextBtn.classList.remove("show");
        optionOne.classList.remove("disabled");
        optionTwo.classList.remove("disabled");
        optionthree.classList.remove("disabled");

        optionOne.classList.remove("successbtn");
        optionTwo.classList.remove("successbtn");
        optionthree.classList.remove("successbtn");
        optionOne.classList.remove("wrongbtn");
        optionTwo.classList.remove("wrongbtn");
        optionthree.classList.remove("wrongbtn");

    } else {
        // end of questions what is next 
        clearInterval(counter);
        clearInterval(counterLine);
    }

}

