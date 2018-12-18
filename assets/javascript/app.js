$(document).ready(function () {



   var questions = [{
       ques: "Only one province is oficially bilingual, can you guess which one?",
       ans:  ["Quebec", "British Columbia", "Manitoba", "Newbrunswick"],
       name: "bilingual",
       correct: "Newbrunswick",
       divClass: ".bilingual"
   },
   {
       ques: "Which canadian city is considered The Hollywood North?",
       ans: ["Manitoba", "Vancouver", "Beamsville", "Niagara Falls"],
       name: "hollywoodNorth",
       correct: "Vancouver",
       divClass: ".hollywoodNorth"
   },
   {
       ques: "What is the capital of Canada?",
       ans: ["Ottawa", "Toronto", "Vancouver", "Edmonton"],
       name: "capital",
       correct: "Ottawa",
       divClass: ".capital"
   },
   {
       ques: "What are the official winter and summer sports of Canada?",
       ans: ["Ice hockey and lacrosse", "Boxing and Baseball", "Skiing and Swimming", "Football and Tennis"],
       name: "sports",
       correct: "Ice hockey and lacrosse",
       divClass: ".sports"
   },
   {
       ques: "How many time zones does Canada Have?",
       ans: ["3", "4", "8", "6"],
       name: "timeZones",
       correct: "6",
       divClass: ".timeZones"
   },
   {
       ques: "What animal is on the Canadian quarter?",
       ans: ["Whale", "Polar Bear", "Caribou", "Beaver"],
       name: "animalQuarter",
       correct: "Caribou",
       divClass: ".animalQuarter"
   },
   {
       ques: "What is the Canadian $1 coin called?",
       ans:  ["Moonie", "Dolly", "Loonie", "Toonie"],
       name: "coin",
       correct: "Loonie",
       divClass: ".coin"
   },
   {
       ques: "What is the leader of Canada called?",
       ans: ["Queen", "Prime Minister", "King", "President"],
       name: "leader",
       correct: "Prime Minister",
       divClass: ".leader"
   },
   {
       ques: "What is the name of the highest mountain in Canada?",
       ans:  ["Mount Logan", "Mount Carleton", "Mount Saint Elias", "Mount Columbia"],
       name: "mountain",
       correct: "Mount Logan",
       divClass: ".mountain"
   },
   {
       ques: "What's the current population in Canada (2018)?",
       ans: ["21 Million", "15 Million", "93 Million", "37 Million"],
       name: "population",
       correct: "37 Million",
       divClass: ".population"
   }
   ] // end questions object
   
   var labels = ["first", "second", "third", "forth"];
   
   // click to start then display quesions
   var startGame = $("#start-btn").on('click', function() {
   $(this).parent().hide(2000);
   $('.container').show(1500);
   countdown(60);
   questionDisplay();
   });

   
   
   
   // function for displaying questions
   var questionDisplay = function() {
      $(".questions :not('#sub-but')").empty();
      // loops through the 10 questions 
      for (var j = 0; j < 10; j++) {
         $('.questions').prepend('<div class="' + questions[j].name + '"></div>');
         $(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
         // loops through answers for each radio button
         for (var i = 0; i <= 3; i++) {
            $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
         }
         $('.questions').prepend('<hr />');
      }
   }
   
   
   // function for countdown timer
   var countdown = function(seconds) {
      
      var timer = setInterval(function() {
         seconds = seconds - 1;
         $("#time-remain").html(seconds);
         
         if (seconds <= 0) {
            $('.container').fadeOut(500);
            var correctAnswers = 0;
            var wrongAnswers = 0;
            var unAnswered = 0;
            
            
            // loop through correctArray & radioName to match html elements & answers
            for (var i = 0; i < 10; i++) {
               
               if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {
                  
                  correctAnswers++;
                  console.log("this is correct! number:" + i)
               } else {
                  wrongAnswers++;
                  console.log("this is wrong! number:" + i)
               };
            }
            $('#correctTimesUp').append(correctAnswers);
            // display wrongAnswers
            $('#wrongTimesUp').append(wrongAnswers);
            $('#timesUp').fadeIn(1000).show();
            $('#reset-btn').fadeIn(1000).show();
            
            // alert("Times Up!");
            clearInterval(timer);
            return;
         }
      }, 1000);
      
      // click event for submit button to stop timer
      $('#sub-but').on('click', function() {
         clearInterval(timer);
      })
   }; // end countdown
   
   
   // function to grade quiz once submit button is clicked
   var gradeQuiz = $('#sub-but').on('click', function() {
      
      var correctAnswers = 0;
      var wrongAnswers = 0;
      var unAnswered = 0;
      
      // loop through correctArray & radioName to match html elements & answers

      for (var i = 0; i < 10; i++) {
         
         if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {
            
            correctAnswers++;
         } else {
            wrongAnswers++;
         };
      };
      
      // once submit is clicked...
      // tests
      // stop timer
      countdown();
      // fade out questions
      $('.container').hide(2000);
      // show answerScreen
      $('#answerScreen').show();
      // display correctAnswers
      $('#correctScreen').append(correctAnswers);
      // display wrongAnswers
      $('#wrongScreen').append(wrongAnswers);
      

      // click to restart game 


  
      var restartGame = $(".btn-danger").on('click', function() {
         countdown(60);
         correctAnswers = 0;
         wrongAnswers = 0;
         
         $("#answerScreen").hide(2000);
         $("#correctScreen").empty();
         $("#wrongScreen").empty();         
         $('.container').show(1500);

         correctAnswers = "";
         wrongAnswers = "";
   
         $("#correctScreen").html("Correct Answers: " + correctAnswers);
         $("#wrongScreen").html("Wrong Answers: " + wrongAnswers);


      });

      var restartGame2 = $(".btn-success").on('click', function() {
         countdown(60);
         correctAnswers = 0;
         wrongAnswers = 0;
         
         $("#answerScreen").hide(2000);
         $("#correctScreen").empty();
         $("#wrongScreen").empty();         
         $('.container').show(1500);

         correctAnswers = "";
         wrongAnswers = "";
   
         $("#correctScreen").html("Correct Answers: " + correctAnswers);
         $("#wrongScreen").html("Wrong Answers: " + wrongAnswers);


      });
      
   });
   });