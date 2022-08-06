// This is DOM
var countDown= document.querySelector("#countDown")
var startbtnEl= document.querySelector("#startBtn");
var countEl= document.querySelector("#countDown");
var section1= document.querySelector("#section1")
var section2= document.querySelector("#section2")
var question= document.querySelector("#question")
var choice1= document.querySelector("#choice1")
var choice2= document.querySelector("#choice2")
var choice3= document.querySelector("#choice3")
var choice4= document.querySelector("#choice4")
var score= 0

var highScore= document.querySelector("#highScore")
choice1.addEventListener("click",nextQuestion)
choice2.addEventListener("click",nextQuestion)
choice3.addEventListener("click",nextQuestion)
choice4.addEventListener("click",nextQuestion)
//keeps track of what question on
var counter= 0
var yourInitials= document.querySelector("#initials")
var saveBtn= document.querySelector("#submit")
var questionsArray= [
  {
    question:"Which of these is a method in javaScript?",
    choices:[
      "choice a: JASON", "choice b: JSON.stringify",  "choice c:()",  "choice d: none of the above" 
    ],
    answer: "choice b: JSON.stringify"
  },
  {
    question:"What is the functionality of the JSON.stringfy method?",
    choices:[
      "choice a:To convert a javaScript object to a string", "choice b: To convert a javaScript string back to an object",  "choice c: To declare multiple values in a variable",  "choice d: All of the above" 
    ],
    answer:  "choice a:To convert a javaScript object to a string"
  },
  {question:"How do we identify the position of a property in an array?",
    choices:[
      "choice a: by its local storage", "choice b: by its index",  "choice c: by looking in the html",  "choice d: by a console.log statement" 
    ],
    answer: "choice b: by its index"
  },
  {
    question:"By which of these numbers do we start counting the index of an array?",
    choices:[
      "choice a: 0", "choice b: 1",  "choice c: 2",  "choice d: 3" 
    ],
    answer: "choice a: 0"
  }

]
function setCounterText() {
}

   
  startbtnEl.addEventListener("click", function() {
    // count--;
    // setCounterText();
    firstQuestion();

  });

  function firstQuestion(){
    section1.classList.add("hidden")
    section2.classList.remove("hidden")
    question.textContent=questionsArray[counter].question;
    choice1.textContent=questionsArray[counter].choices[0];
    choice2.textContent=questionsArray[counter].choices[1];
    choice3.textContent=questionsArray[counter].choices[2];
    choice4.textContent=questionsArray[counter].choices[3];
    
  
  }
 startbtnEl.addEventListener("click",countDown);
  function nextQuestion(event){
    if(event.target.textContent==questionsArray[counter].answer){
      alert("correct")
      score ++
      
    }else{
      alert("incorrect")
      sec-=15
      
    }
    alert("Your score is:" + score)
    if(counter+1==questionsArray.length){
      alert("end of quiz")
      return
    }
    counter++
    question.textContent=questionsArray[counter].question;
    choice1.textContent=questionsArray[counter].choices[0];
    choice2.textContent=questionsArray[counter].choices[1];
    choice3.textContent=questionsArray[counter].choices[2];
    choice4.textContent=questionsArray[counter].choices[3];
   
    
    
  }
  var sec = 120;
  var time = setInterval(myTimer,1000);
  function myTimer(){
    document.getElementById("countDown").innerHTML=sec+ "sec left";
    sec--;
    if (sec == 0){
      clearInterval(time);
      //This is saying counter has reached the total number of questions
      counter=questionsArray.length
      question.textContent=questionsArray[counter].question;
      choice1.textContent=questionsArray[counter].choices[0];
      choice2.textContent=questionsArray[counter].choices[1];
      choice3.textContent=questionsArray[counter].choices[2];
      choice4.textContent=questionsArray[counter].choices[3];
   

      alert("Game Over!! :(");
    }
  }
  saveBtn.addEventListener("click", function(event){
    event.preventDefault();
   localStorage.setItem(yourInitials.value.trim(), score);
   var max= 0
   var maxInitials= "computer"
   //score is accessing my score variable
   for (var i = 0; i < localStorage.length; i++){
   var key= localStorage.key(i);
   var value= localStorage.getItem(key);
   if (value > max){
    max=value;
    maxInitials=key;
   }
   }
   alert("HIGHSCORE"+ maxInitials);
   document.getElementById("highScore").innerHTML=maxInitials+ " with a score of " + max;
  } )  

  
  //Should I put the high scores in my array so It appears after the quiz?
  // how to move timer to the right of page