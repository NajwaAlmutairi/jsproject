let question = document.getElementById('question');
let optionOne = document.getElementById('optionOne');
let optionTwo = document.getElementById('optionTwo');
let optionthree = document.getElementById('optionthree');

let scoretext = document.getElementById('score-num');
let title = document.getElementById('title');
let timeLine = document.getElementById("time-line");
let timeText = document.getElementById("time-text");
let timeCount = document.getElementById("time-sec");

let nextBtn = document.getElementById("next-btn");
let totalQue = document.getElementById("totalQue");
const params = new URLSearchParams(window.location.search);
const type = params.get('type');


const header = document.getElementById('header');
const bodySection = document.getElementById('body-section');
const footer = document.getElementById('footer');

let counter;
let counterLine;
let questionCounter = 1;
let questionTypeList;
let score = 0;
let audio;

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
}]

const questionsList2 = [{
    question: "من هو مؤسس الدولة السعودية الثانية ؟",
    options: ["الإمام محمد بن سعود", "الإمام سعود بن عبدالله", "الإمام تركي بن عبدالله"],
    answer: "الإمام تركي بن عبدالله",
}, {
    question: "من حكام الدولة السعودية الثانية ؟",
    options: ["فيصل بن عبدالله", "عبدالله بن سعود", "عبدالرحمن بن فيصل"],
    answer: "عبدالرحمن بن فيصل",
}, {
    question: "عاصمة الدولة السعودية الثانيةهي ؟",
    options: ["الرياض", "الدرعية", "مكة"],
    answer: "الرياض",
}, {
    question: "تأسست الدولة السعودية الثانية عام ؟",
    options: ["1250 هـ", "1260 هـ", "1240 هـ"],
    answer: "1240 هـ",
}, {
    question: "استطاع الإمام تركي بن عبدالله استرجاع الدولة السعودية في .... سنوات ؟",
    options: ["ثلاث", "سبع", "ثمان"],
    answer: "سبع",
}]

const questionsList3 = [{
    question: "ما هو تاريخ توحيد المملكة العربية السعودية ؟",
    options: ["23 سبتمبر 1932م", "23 سبتمبر 1933م", "22 سبتمبر 1932م"],
    answer: "23 سبتمبر 1932م",
    // audio adding
}, {
    question: "ماهي الفترة الزمنية بين السعودية الثانية والثالثة ..... سنوات ؟",
    options: ["10", "8", "7"],
    answer: "10",
}, {
    question: "متى تولى الملك سلمان بن عبدالعزيز (أيده الله) حكم المملكة العربية السعودية ؟",
    options: ["2016", "2014", "2015"],
    answer: "2015",
}, {
    question: "في أي مدينة توفي الملك عبد العزيز بن عبدالرحمن آل سعود ؟",
    options: ["الطائف", "الرياض", "جدة"],
    answer: "الطائف",
}, {
    question: "أول ملك سعودي تم تلقيبه بخادم الحرمين الشريفين ؟",
    options: ["الملك سلمان بن عبد العزيز آل سعود", "الملك عبدالله بن عبد العزيز آل سعود", "الملك فهد بن عبد العزيز آل سعود"],
    answer: "الملك فهد بن عبد العزيز آل سعود",
}, {
    question: "أين تقع السعودية ",
    options: ["لن تقع السعودية", "آسيا", "إفريقيا"],
    answer: "لن تقع السعودية",
}, {
    question: "ما هو عدد مناطق المملكة العربية السعودية ؟",
    options: ["10", "13", "20"],
    answer: "13",
}, {
    question: "ما هو أطول الأودية في المملكة العربية السعودية ؟",
    options: ["وادي الرمة", "وادي حنيفة", "وادي النيل"],
    answer: "وادي الرمة",
}]

if (type === 'first') {
    title.innerText = 'السعودية الأولى'
} else if (type === 'second') {
    title.innerText = 'السعودية الثانية'
} else if (type === 'third') {
    title.innerText = 'السعودية الثالثة'
} else {
    title.innerText = 'السعودية الأولى'
}


window.onload = function () {
    showCountdown();
}

function showCountdown() {
    let overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    overlay.style.zIndex = '1000';
    document.body.appendChild(overlay);

    // countdown
    let countdownContainer = document.createElement('div');
    countdownContainer.style.position = 'fixed';
    countdownContainer.style.top = '50%';
    countdownContainer.style.left = '50%';
    countdownContainer.style.transform = 'translate(-50%, -50%)';
    countdownContainer.style.fontSize = '4rem';
    countdownContainer.style.color = 'white';
    countdownContainer.style.zIndex = '1001';
    document.body.appendChild(countdownContainer);

    let count = 3;
    let countdownInterval = setInterval(() => {
        countdownContainer.innerText = count;
        count--;
        if (count < 0) {
            clearInterval(countdownInterval);
            countdownContainer.remove();
            overlay.remove();
            getQuestionType();
        }
    }, 1000);
}



function getQuestionType() {

    if (type === 'first') {
        questionTypeList = questionsList;
        title.innerText = 'السعودية الأولى'
    } else if (type === 'second') {
        questionTypeList = questionsList2;
        title.innerText = 'السعودية الثانية'
    } else if (type === 'third') {
        questionTypeList = questionsList3;
        title.innerText = 'السعودية الثالثة'
    } else {
        questionTypeList = questionsList;
        title.innerText = 'السعودية الأولى'
    }

    fillQuestionAndAnswers(questionTypeList[0]);
    startTimer(15);
    timerLine(0);
    totalQuefun(1);
}


function fillQuestionAndAnswers(objQ) {
    question.innerText = objQ.question;
    optionOne.innerText = objQ.options[0];
    optionTwo.innerText = objQ.options[1];
    optionthree.innerText = objQ.options[2];


    if (questionTypeList === questionsList3 && questionTypeList.indexOf(objQ) === 0) {
        audio = document.getElementById('questionAudio');
        audio.currentTime = 0;
        audio.play();

        setTimeout(() => {
            audio.pause();
        }, 14000);
    }
}


function getTheCorrectAnswer(event) {
    let clickedButton = event.target;
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
    let questionValue = question.innerText.trim();
    let optionOneValue = optionOne.innerText.trim();
    let optionTwoValue = optionTwo.innerText.trim();
    let optionthreeValue = optionthree.innerText.trim();

    let currentQuestion = questionTypeList.find((ele) => ele.question.trim() === questionValue)

    clearInterval(counter);
    clearInterval(counterLine);

    if (currentQuestion.answer === clickedButton.innerText) {
        clickedButton.classList.add("successbtn")
        score += 1;
        scoretext.innerText = score;
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
    console.log(score);
    endOfthetest()

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
            endOfthetest();

        }
    }
}

function totalQuefun(index) {
    let text = `${index} من ${questionTypeList.length} اسئلة`
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
    if (questionCounter <= questionTypeList.length - 1) {
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
        fillQuestionAndAnswers(questionTypeList[questionCounter]);
        questionCounter += 1;
        clearInterval(counter);
        clearInterval(counterLine);
        timeCount.innerText = 15
        timeText.textContent = "الوقت المتبقي:";
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


function endOfthetest() {
    if (questionCounter === questionTypeList.length) {
        clearInterval(counter);
        clearInterval(counterLine);

        // Delay the display of the congrats message
        setTimeout(() => {
            let box = document.getElementById('question-container');
            let header = document.getElementById('header');
            let bodySection = document.getElementById('body-section');
            let footer = document.getElementById('footer');
            let successMessage = document.createElement('div');
            let wintext = document.createElement('h2');
            let winimage = document.createElement('img');
            let buttonsContainer = document.createElement('div');
            let goHome = document.createElement('button');
            let retakeExam = document.createElement('button');

            // Determine the message based on the score
            if (score === 0) {
                winimage.src = "win6.gif";
                wintext.innerText = 'افااااااااااا!!!';
                wintext.style.color = 'purple';
            } else if (score <= 2) {
                winimage.src = "backgroundImage48.jpg";
                wintext.innerText = '🤝معليه المره الجاية أفضل';
                wintext.style.color = 'purple';
            } else if (score <= 4) {
                winimage.src = "backgroundImage45.jpg";
                wintext.innerText = 'والله كفــو عليـــك !!!!';
                wintext.style.color = 'green';
            } else if (score === 5 && type !== 'third') {
                winimage.src = "win.gif";
                wintext.innerText = `مبروك! جبت الخمس نقاط يا بطل!\nالسعودية كلها فخورة فيك`;
                wintext.style.color = 'green';
            } else if (score === 5 && type === 'third') {
                winimage.src = "backgroundImage50.jpg";
                wintext.innerText = `أنت كفـــووووو!!!`;
                wintext.style.color = 'green';
            } else if (score >= 6 && score <= 7) {
                // winimage.src = "/images/win3.gif";
                winimage.src = "backgroundImage50.jpg";
                wintext.innerText = 'أنت فنـــــــــــــان!!!!!';
                wintext.style.color = 'green';
            } else if (score === 8) {
                winimage.src = "win2.gif";
                wintext.innerText = `مبروك! جبت العلامة الكاملة!\nالسعودية كلها فخورة فيك`;
                wintext.style.color = 'green';
            }

            // Remove all question elements from the DOM
            optionOne.remove();
            optionTwo.remove();
            optionthree.remove();
            nextBtn.remove();
            question.remove();
            timeLine.remove();
            timeText.remove();
            timeCount.remove();
            totalQue.remove();
            header.remove();
            bodySection.remove();
            footer.remove();

            goHome.innerText = "العودة للصفحة الرئيسية";
            goHome.addEventListener('click', () => {
                window.location.href = 'index.html';
            });
            goHome.classList.add('buttonWin');

            retakeExam.innerText = "إعادة الاختبار";
            retakeExam.classList.add('retakebutton');
            retakeExam.addEventListener('click', () => {
                location.reload();
            });

            winimage.classList.add('image');
            successMessage.classList.add('windiv');
            buttonsContainer.classList.add('buttonsContainer');

            successMessage.appendChild(winimage);
            successMessage.appendChild(wintext);
            buttonsContainer.appendChild(goHome);
            buttonsContainer.appendChild(retakeExam);
            successMessage.appendChild(buttonsContainer);

            box.appendChild(successMessage);
        }, 1000);
    }
}
