const Questions = [{
    id: 0,
    q: "Who was the second president of the United States?",
    a: [{ text: "George Washington", isCorrect: false },
        { text: "James Madison", isCorrect: false },
        { text: "John Adams", isCorrect: true },
        { text: "Andrew Jackson", isCorrect: false }
    ]

},
{
    id: 1,
    q: "When did American enter the first world war?",
    a: [{ text: "August 1889", isCorrect: false, isSelected: false },
        { text: "November 1914", isCorrect: false },
        { text: "January 1914", isCorrect: false },
        { text: "April 1917", isCorrect: true }
    ]

},
{
    id: 2,
    q: "When was the great depression",
    a: [{ text: "1860-1883", isCorrect: false },
        { text: "1889-1919", isCorrect: false },
        { text: "1929-1939", isCorrect: true },
        { text: "1776-1890", isCorrect: false }
    ]

}

]

var start = true;

function iterate(id) {

var result = document.getElementsByClassName("result");
result[0].innerText = "";

const question = document.getElementById("question");

question.innerText = Questions[id].q;

const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');

op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "#fffff0";
    op3.style.backgroundColor = "#fffff0";
    op4.style.backgroundColor = "#fffff0";
    selected = op1.value;
})

op2.addEventListener("click", () => {
    op1.style.backgroundColor = "#fffff0";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "#fffff0";
    op4.style.backgroundColor = "#fffff0";
    selected = op2.value;
})

op3.addEventListener("click", () => {
    op1.style.backgroundColor = "#fffff0";
    op2.style.backgroundColor = "#fffff0";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "#fffff0";
    selected = op3.value;
})

op4.addEventListener("click", () => {
    op1.style.backgroundColor = "#fffff0";
    op2.style.backgroundColor = "#fffff0";
    op3.style.backgroundColor = "#fffff0";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
})

const evaluate = document.getElementsByClassName("evaluate");

evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}

const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 2) {
    id++;
    iterate(id);
    console.log(id);
}

})

var timeLeft = 30;
    var elem = document.getElementById('timer');
    
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
      } else {
        elem.innerHTML = timeLeft + ' seconds';
        timeLeft--;
      }
    }