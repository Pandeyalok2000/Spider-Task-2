let points = sessionStorage.getItem("points");
let question_count = sessionStorage.getItem("question_count");
let highscore = localStorage.getItem("highscore")
document.querySelector(".points").innerHTML = points;
document.querySelector(".highscore").innerHTML= highscore;
document.querySelector(".question_count").innerHTML = question_count;
