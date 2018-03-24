function check(){
  // alert("You clicked");
  var question1 = document.quiz.q1.value;
  var question2 = document.quiz.q2.value;
  var question3 = document.quiz.q3.value;
  var question4 = document.quiz.q4.value;
  var question5 = document.quiz.q5.value;
  var question6 = document.quiz.q6.value;
  var question7 = document.quiz.q7.value;
  var question8 = document.quiz.q8.value;
  var question9 = document.quiz.q9.value;
  var question10 = document.quiz.q10.value;

  var correct = 0;

  if(question1 == "<scripting>"){
    correct++;
  }
  if(question2 == "False"){
    correct++;
  }
  if(question3 == "False" ){
    correct++;
  }
  if(question4 == "Both the <head> section and the <body> section are correct"){
    correct++;
  }
  if(question5 == "var carName;"){
    correct++;
  }
  if(question6 == "function myFunction()" ){
    correct++;
  }
  if(question7 == "myFunction()" ){
    correct++;
  }
  if(question8 == "while (i <= 10)" ){
    correct++;
  }
  if(question9 == "Math.round(7.25)"){
    correct++;
  }
  if(question10 == "Math.max(x, y)"){
    correct++;
  }
// var range;
// if(correct == 0){
//   range=0;
// }else{
//   range=1;
// }
// console.log(correct);
// document.getElementById("result").style.visibility = "visible";

// messages = ["Correct","Incorrect"];
// document.getElementById("message").innerHTML = messages[range];
alert(correct +  "out of 10 are correct");

// var x = document.getElementById("result");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
}
