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
// for the typing of the text in the header
const headText = "احتفالاً باليوم الوطني السعودي 94";
const speed1 = 50;
let i = 0;

function typeWriterHead() {
  if (i < headText.length) {
    document.getElementById("myhead").innerHTML += headText.charAt(i);
    i++;
    setTimeout(typeWriterHead, speed1);
  }
}

typeWriterHead();