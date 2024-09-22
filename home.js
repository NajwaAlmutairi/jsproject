function callingQuestionPage(event) {
    let myevent = event.target;
    let questionType;

    console.log(myevent.innerText);
    
    if (myevent.innerText.trim() === 'السعودية الأولى') {
        questionType = 'first';
    } else if (myevent.innerText.trim() === 'السعودية الثانية') {
        questionType = 'second';
    } else if (myevent.innerText.trim() === 'السعودية الثالثة') {
        questionType = 'third';
    } else {
        questionType = 'first';
    }
    window.location.href = `quizpage.html?type=${questionType}`;
}
