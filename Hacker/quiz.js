window.onload = function(){
    show(0);

}
let questions = [
    {
        id:1,
        question: "There are currently vaccines for the following coronaviruses:",
        answer: "Hydrogen sulphide",
        options: [
            "Oxygen",
            "Hydrogen sulphide",
            "Carbon dioxide",
            "Nitrogen"
        ],
    },
    {
        id:2,
        question: "Which of the following is used in pencils?",
        answer: "Graphite",
        options: [
            "Graphite",
            "Silicon",
            "Charcoal",
            "Phosphorous"
        ],
    },
    {
        id:3,
        question: "Nuclear sizes are expressed in a unit named",
        answer: "Fermi",
        options: [
            "Fermi",
            "Newton",
            "Angstrom",
            "Tesla"
        ],
    },
    {
        id:4,
        question: "National Institute of Aeronautical Engineering is located at",
        answer: "Delhi",
        options: [
            "Chennai",
            "Delhi",
            "Kolkata",
            "Mumbai"
        ],
    },
    {
        id:5,
        question: "The number of major languages, recognized in the Indian Union as official language, are",
        answer: "22",
        options: [
            "15",
            "22",
            "12",
            "28"
        ],
    },
    {
        id:6,
        question: "If a computer has more than one processor then it is known as?",
        answer: "Multiprocessor",
        options: [
            "Uniprocessor",
            "Multiprocessor",
            "Multiprogramming",
            "Multithreading"
        ],
    },
    {
        id:7,
        question: "One kilobyte (KB) is equal to",
        answer: "1024 Bytes",
        options: [
            "1024 Bits",
            "1000 Bits",
            "1024 Bytes",
            "1000 Bytes"
        ],
    },
    {
        id:8,
        question: "Mutual Fund business from existing customers can be canvassed through",
        answer: "Cross-Marketing",
        options: [
            "Coercion",
            "Outdoor Marketing",
            "Internal Marketing",
            "Cross-Marketing"
        ],
    },
    {
        id:9,
        question: "Harsha Charita was written by",
        answer: "Bana Batuta",
        options: [
            "Bana Batuta",
            "Kalidas",
            "Jay Dev",
            "Harsh Pandey"
        ],
    },
    {
        id:10,
        question: "India's first satellite Aryabhata was launched from",
        answer: "Soviet Union",
        options: [
            "America",
            "India",
            "Soviet Union",
            "Israel"
        ],
    },
  ];
function submitForm(e){
    e.preventDefault();
    let name= document.forms["welcome_form"]["name"].value;
    sessionStorage.setItem("name",name);
    location.href="quiz.html";
}

let question_count = 0;
let points = 0;
function next(){
    let solution = document.querySelector("li.option.active").innerHTML;
    if (solution == questions[question_count].answer){
        points = points + 100;
        document.getElementById("right").style.visibility = "visible";
        document.getElementById("wrong").style.visibility = "hidden";
    }
    else{
        document.getElementById("wrong").style.visibility = "visible";
        document.getElementById("right").style.visibility = "hidden";
    }
    sessionStorage.setItem("points", points);
    if (points > localStorage.getItem("highscore")){
        localStorage.setItem("highscore",points);
    }
    if (question_count  == questions.length - 1){
        points = points + 100;
        sessionStorage.setItem("time", `${minutes} Min and ${seconds} Sec`);
        clearInterval(mytime);
        location.href = "Result.html";
        return;
    }
    question_count = question_count + 1;
    sessionStorage.setItem("question_count", question_count+1);
    show(question_count);
  
    
}
function previous(){
    question_count = question_count - 1;
    if (question_count<0){
        question_count = 0;
    }
    sessionStorage.setItem("question_count", question_count);
    show(question_count); 
    if (question_count == 0){
        document.getElementsByClassName("previous").disabled = true;
    }
}
function show(count){
    let question = document.getElementById("questions");
    let question_number = question_count;
    question.innerHTML = `
    <h3>Q${question_count + 1}. ${questions[count].question}</h3>
    <ul class="option_group">
    <li class="option">${questions[count].options[0]}</li>
    <li class="option">${questions[count].options[1]}</li>
    <li class="option">${questions[count].options[2]}</li>
    <li class="option">${questions[count].options[3]}</li>
    </ul>                     
    `;
    optionActive();
}
function optionActive(){
    let option = document.querySelectorAll("li.option");
    for(let i = 0; i< option.length; i++){
        option[i].onclick = function(){
            for(let j =0; j< option.length; j++){
                if (option[j].classList.contains("active")){
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

let name = sessionStorage.getItem("name");
document.querySelector(".name").innerHTML = name;
var timer = setTimeout(function() {
    window.location='Result.html'
}, 120000);
function btn1(){
    question_count = 0
    show(question_count);
}
function btn2(){
    question_count = 1
    show(question_count);
}
function btn3(){
    question_count = 2
    show(question_count);
}
function btn4(){
    question_count = 3
    show(question_count);
}
function btn5(){
    question_count = 4
    show(question_count);
}
function btn6(){
    question_count = 5
    show(question_count);
}
function btn7(){
    question_count = 6
    show(question_count);
}
function btn8(){
    question_count = 7
    show(question_count);
}
function btn9(){
    question_count = 8
    show(question_count);
}
function btn10(){
    question_count = 9
    show(question_count);
}
