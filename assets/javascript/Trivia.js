$(document).ready(function () {

    $("#resultsTable").hide();

    var userQuestion = "";
    var userAnswer = "";
    var totalCorAnswrs = 0;
    var totalWrgAnswrs = 0;
    var intervalId;

    let answerarray = [];

    //  The stop function
    function stop() {

        //  Clears our intervalId
        //  We just pass the name of the interval
        //  to the clearInterval function.
        
        clearInterval(intervalId);
    }

    function buildQuestionList (quesAnswers) {

        let displaystring = "";

        const quizQuestionArray = [
            
    
            { quest1: "Which U.S fighter is the current Air Superiority fighter?",

                  rightAnswer: "a"

            },

            { quest2: "Which U.S fighter flew during the Vietnam War?",

              quest2Answers: {

                  a: "F22 Raptor",

                  b: "F15 Eagle",

                  c: "F16 Falcon",

                  d: "F4 Phantom"
                  
                },

                rightAnswer: "d"

            },

            { quest3: "Which U.S fighter has never been defeated in an air-to-air engagement?",

              quest3Answers: {

                  a: "F22 Raptor",

                  b: "F15 Eagle",

                  c: "F16 Falcon",

                  d: "F4 Phantom"
                  
                },

                rightAnswer: "b"

            },

            { quest4: "Which U.S fighter is manufactured by General Dynamics in Forth Worth, Texas?",

              quest4Answers: {

                  a: "F22 Raptor",

                  b: "F15 Eagle",

                  c: "F16 Falcon",

                  d: "F4 Phantom"
                  
                },

                rightAnswer: "c"

            },

            { quest5: "Which U.S fighter features Super Cruise and Vector Thrust?",

              quest5Answers: {

                  a: "F22 Raptor",

                  b: "F15 Eagle",

                  c: "F16 Falcon",

                  d: "F4 Phantom"
                  
                },

                rightAnswer: "a"

            },

            { quest6: "Which U.S fighter provides the pilot with the ability to see through the bottom of the fighter?",

              quest4Answers: {

                  a: "F22 Raptor",

                  b: "F15 Eagle",

                  c: "F16 Falcon",

                  d: "F35 Lightning"
                  
                },

                rightAnswer: "d"

            }
    
        ];  //end of quizQuestionArray

             
        
        //displaystring = "<h2>" + quizQuestionArray[0].quest1 + "</h2>";

                //console.log(displaystring);

        //$("#QuizQuestns").html(displaystring);  

        //displaystring = "";

        //for (i=0; i < 5; i++) {

            //displaystring1 = "<h3>" + quizQuestionArray["quest1"]["quest1Answers"].a + "</h3>";

            //const answerDiv = $("<div>");

            //displaystring1 = "<h3>" + quizQuestionArray[0].quest1Answers.a + "</h3>";
            //displaystring2 = "<h3>" + quizQuestionArray[0].quest1Answers.b + "</h3>";
            //displaystring3 = "<h3>" + quizQuestionArray[0].quest1Answers.c + "</h3>";
            //displaystring4 = "<h3>" + quizQuestionArray[0].quest1Answers.d + "</h3>";

            //answerDiv.append(displaystring1,displaystring2,displaystring3,displaystring4)

            //console.log("Displaystring1 = " + displaystring1);

            //answerDiv.append(displaystring1);
        
            //$("#quizAnswr1").append(answerDiv);
        
        //}    

        console.log("I got to the end of buildQuestionList");

        console.log(quesAnswers);

        userQuestion = "";
        userAnswer = "";

        quesAnswers.forEach(myFunction);

        function myFunction(item) {

            console.log("item := " + item);

            if (item != null) {

                    //userQuestion = item.substring(0,1);
                    userQuestion = item[0];
                    userAnswer = item[1];

                    console.log("UserQuestion := " + userQuestion);
                    console.log("UserAnswer := " + userAnswer);

                    if ((Number(userQuestion) - 1) === 0) {

                        if (userAnswer === quizQuestionArray[0].rightAnswer) {

                            totalCorAnswrs += 1;
                        
                        } else {

                            totalWrgAnswrs += 1;
                        }


                    } else if ((Number(userQuestion) - 1) === 1) {

                        if (userAnswer === quizQuestionArray[1].rightAnswer) {

                            totalCorAnswrs += 1;
                        
                        } else {

                            totalWrgAnswrs += 1;
                        }

                    } else if ((Number(userQuestion) - 1) === 2) {

                        if (userAnswer === quizQuestionArray[2].rightAnswer) {

                            totalCorAnswrs += 1;
                        
                        } else {

                            totalWrgAnswrs += 1;
                        }

                    } else if ((Number(userQuestion) - 1) === 3) {

                        if (userAnswer === quizQuestionArray[3].rightAnswer) {

                            totalCorAnswrs += 1;
                        
                        } else {

                            totalWrgAnswrs += 1;
                        }

                    } else if ((Number(userQuestion) - 1) === 4) {

                        if (userAnswer === quizQuestionArray[4].rightAnswer) {

                            totalCorAnswrs += 1;
                        
                        } else {

                            totalWrgAnswrs += 1;
                        }

                    } else if ((Number(userQuestion) - 1) === 5) {

                        if (userAnswer === quizQuestionArray[5].rightAnswer) {

                            totalCorAnswrs += 1;
                        
                        } else {

                            totalWrgAnswrs += 1;
                        }
                    }

                }

            }
          
        console.log("totalCorAnswrs := " + totalCorAnswrs);
        console.log("totalWrgAnswrs := " + totalWrgAnswrs);
        


    }   //end of buildQuestionList function


    function gameTimer () {

            //  Interval Demonstration
            //  Set our number counter to 120.
            var number = 120;

            //  Variable that will hold our interval ID when we execute
            //  the "run" function
            var intervalId;

            //  The run function sets an interval
            //  that runs the decrement function once a second.
            //  *****BUG FIX******** 
            //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.

            function run() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
            }

            //  The decrement function.
            function decrement() {

                    //  Decrease number by one.
                    number--;

                    //  Show the number in the #show-number tag.
                    $("#formTimer").html("Time Remaining:  " + number);


                            //  Once number hits zero...
                            if (number === 0) {

                                //  ...run the stop function.
                                stop();

                                //  Alert the user that time is up.
                                alert("Times Up!");

                                //  Clear Questions from Screen and display Results Table
                                clearForm();

                                console.log("I got to the point where the results should be displayed");

                                getSelAnswrs();

                                //$( "#resultsTable" ).show(10000);
                                //$("#tablerow1").html("Total Correct Answers");
                                //$("#tablerow1a").text(totalCorAnswrs);
                                //$("#tablerow2").text("Total Wrong Answers");
                               // $("#tablerow2a").text(totalWrgAnswrs);

                                
                            }
            }

           //  The stop function
            function stop() {

                    //  Clears our intervalId
                    //  We just pass the name of the interval
                    //  to the clearInterval function.
                    
                    clearInterval(intervalId);
            } 

            //  Execute the run function.
            run();

            //  Execute the decrement function
            decrement();




    }


            function clearForm() {

                //Removes the Start Button from the DOM

                $("#Donebtn").remove();

                //$("#mainform").remove();

                $( "#mainform" ).hide(20000);

                //Stops the Timer Countdown

                stop(intervalId);

                

                

             }


            function getSelectedButton(buttonGroup){

                
                    var radioValue1 = $( "input[name = quest1]:checked" ).val();

                    if (typeof radioValue1 === 'undefined') {
                        
                        radioValue1 = null;

                        totalWrgAnswrs += 1;

                    }

                    answerarray.push(radioValue1);

                    var radioValue2 = $("input[name = quest2]:checked").val();

                    if (typeof radioValue2 === 'undefined') {
                        
                        radioValue2 = null;

                        totalWrgAnswrs += 1;

                    }

                    answerarray.push(radioValue2);

                    var radioValue3 = $("input[name = quest3]:checked").val();

                    if (typeof radioValue3 === 'undefined') {
                        
                        radioValue3 = null;

                        totalWrgAnswrs += 1;

                    }

                    answerarray.push(radioValue3);

                    var radioValue4 = $("input[name=quest4]:checked").val();

                    if (typeof radioValue4 === 'undefined') {
                        
                        radioValue4 = null;

                        totalWrgAnswrs += 1;

                    }

                    answerarray.push(radioValue4);

                    var radioValue5 = $("input[name=quest5]:checked").val();

                    if (typeof radioValue5 === 'undefined') {
                        
                        radioValue5 = null;

                        totalWrgAnswrs += 1;

                    }

                    answerarray.push(radioValue5);

                    var radioValue6 = $("input[name=quest6]:checked").val();

                    if (typeof radioValue6 === 'undefined') {
                        
                        radioValue6 = null;

                        totalWrgAnswrs += 1;

                    }

                    answerarray.push(radioValue6);
                
                    //console.log("Array Values are: " + answerarray);

                    return answerarray;

            }
            
            
            function getSelAnswrs() {

                var quesAnswers = getSelectedButton();

                //console.log("I returned from answerarray");
                //console.log(i);

                buildQuestionList (quesAnswers);

                //alert ("Total Number of Correct Answers is := " + totalCorAnswrs, "Total Number of Wrong Answers is := " + totalWrgAnswrs );

                //  Clear Questions from Screen and display Results Table
                
                $( "#formTimer" ).remove();

                clearForm();

                $( "#resultsTable" ).show(10000);
                $("#tablerow1").html("Total Correct Answers");
                $("#tablerow1a").text(totalCorAnswrs);
                $("#tablerow2").text("Total Wrong Answers");
                $("#tablerow2a").text(totalWrgAnswrs);
                
            }

    

    
    //Main Section
    
    $("#Donebtn").on("click", getSelAnswrs);

    gameTimer();

    
    
});