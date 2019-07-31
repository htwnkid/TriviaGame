$(document).ready(function () {

    function buildQuestionList () {

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


    };   //end of buildQuestionList function


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
                                alert("Time Up!");
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


            function rmstrtbtn() {

                //Removes the Start Button from the DOM

                $("#Startbtn").remove();

                buildQuestionList ();
            
        
            }


            function getSelectedButton(buttonGroup){
                for (var i = 0; i < buttonGroup.length; i++) {
                    if (buttonGroup[i].checked) {

                        console.log("I got here kevin 1");

                        return i;
                    }
                }

                console.log("I got here kevin 2");

                return 0;
            }
            

            function getSelAnswrs() {

                var i = getSelectedButton(quest1);

                console.log(i);

                if (i+1 === quest1.length) {

                    quest1[0].checked = true

                    
                } else {

                     quest1[i+1].checked = true


                }

            }

    

    
    //Main Section
    
    $("#Donebtn").on("click", getSelAnswrs);



    gameTimer();

    
    
});