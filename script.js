function option1(){
    document.getElementById("opt1").style="background-color: red;color: white";
    document.getElementById("ans1").style="background-color: red; color: white";
}
function option2(){
    document.getElementById("opt2").style="background-color: red;color: white";
    document.getElementById("ans2").style="background-color: red; color: white";
}
function option3(){
    document.getElementById("opt3").style="background-color: red;color: white";
    document.getElementById("ans3").style="background-color: red; color: white";
}
function option4(){
    document.getElementById("opt4").style="background-color: green;color: white";
    document.getElementById("ans4").style="background-color: green; color: white";
}
document.addEventListener('DOMContentLoaded', function() {
    let currentQuestion = 0;
    const questions = document.querySelectorAll('.Container');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    function showQuestion(index) {
        questions.forEach((question, i) => {
            question.classList.toggle('active', i === index);
        });

        prevBtn.style.display = index === 0 ? 'none' : 'inline-block';
        nextBtn.style.display = index === questions.length - 1 ? 'none' : 'inline-block';
    }

    function prevQuestion() {
        if (currentQuestion > 0) {
            currentQuestion--;
            showQuestion(currentQuestion);
        }
    }

    function nextQuestion() {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            showQuestion(currentQuestion);
        }
    }

    showQuestion(currentQuestion);

    // Bind the previous and next buttons
    window.prevQuestion = prevQuestion;
    window.nextQuestion = nextQuestion;
});

function option11(){
    document.getElementById("opt11").style="background-color: red;color: white";
    document.getElementById("ans11").style="background-color: red; color: white";
}
function option12(){
    document.getElementById("opt12").style="background-color: green;color: white";
    document.getElementById("ans12").style="background-color: green; color: white";
}
function option13(){
    document.getElementById("opt13").style="background-color: red;color: white";
    document.getElementById("ans13").style="background-color: red; color: white";
}
function option14(){
    document.getElementById("opt14").style="background-color: red;color: white";
    document.getElementById("ans14").style="background-color: red; color: white";
}

function option21(){
    document.getElementById("opt21").style="background-color: red;color: white";
    document.getElementById("ans21").style="background-color: red; color: white";
}
function option22(){
    document.getElementById("opt22").style="background-color: red;color: white";
    document.getElementById("ans22").style="background-color: red; color: white";
}
function option23(){
    document.getElementById("opt23").style="background-color: green;color: white";
    document.getElementById("ans23").style="background-color: green; color: white";
}
function option24(){
    document.getElementById("opt24").style="background-color: red;color: white";
    document.getElementById("ans24").style="background-color: red; color: white";
}

function option31(){
    document.getElementById("opt31").style="background-color: red;color: white";
    document.getElementById("ans31").style="background-color: red; color: white";
}
function option32(){
    document.getElementById("opt32").style="background-color: green;color: white";
    document.getElementById("ans32").style="background-color: green; color: white";
}
function option33(){
    document.getElementById("opt33").style="background-color: red;color: white";
    document.getElementById("ans33").style="background-color: red; color: white";
}
function option34(){
    document.getElementById("opt34").style="background-color: red;color: white";
    document.getElementById("ans34").style="background-color: red; color: white";
}

function option41(){
    document.getElementById("opt41").style="background-color: red;color: white";
    document.getElementById("ans41").style="background-color: red; color: white";
}
function option42(){
    document.getElementById("opt42").style="background-color: green;color: white";
    document.getElementById("ans42").style="background-color: green; color: white";
}
function option43(){
    document.getElementById("opt43").style="background-color: red;color: white";
    document.getElementById("ans43").style="background-color: red; color: white";
}
function option44(){
    document.getElementById("opt44").style="background-color: red;color: white";
    document.getElementById("ans44").style="background-color: red; color: white";
}


function option51(){
    document.getElementById("opt51").style="background-color: red;color: white";
    document.getElementById("ans11").style="background-color: red; color: white";
}
function option52(){
    document.getElementById("opt52").style="background-color: red;color: white";
    document.getElementById("ans52").style="background-color: red; color: white";
}
function option53(){
    document.getElementById("opt53").style="background-color: red;color: white";
    document.getElementById("ans53").style="background-color: red; color: white";
}
function option54(){
    document.getElementById("opt54").style="background-color: green;color: white";
    document.getElementById("ans54").style="background-color: green; color: white";
}