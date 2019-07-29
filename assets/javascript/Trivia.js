$(document).ready(function () {

    function buildQuestionList () {

        let displaystring = "";

        const quizQuestionArray = [
            
    
            { quest1: "Which U.S fighter is the current Air Superiority fighter?",

              quest1Answers: {

                  a: 'F22 Raptor',

                  b: 'F15 Eagle',

                  c: 'F16 Falcon',

                  d: 'F4 Phantom'

                },

                rightAnswer: "F22 Raptor"

            },

            { quest2: "Which U.S fighter flew during the Vietnam War?",

              quest2Answers: {

                  a: "F22 Raptor",

                  b: "F15 Eagle",

                  c: "F16 Falcon",

                  d: "F4 Phantom"
                  
                },

                rightAnswer: "F4 Phantom"

            },

            { quest3: "Which U.S fighter has never been defeated in an air-to-air engagement?",

              quest3Answers: {

                  a: "F22 Raptor",

                  b: "F15 Eagle",

                  c: "F16 Falcon",

                  d: "F4 Phantom"
                  
                },

                rightAnswer: "F15 Eagle"

            },

            { quest4: "Which U.S fighter is manufactured by General Dynamics in Forth Worth, Texas?",

              quest4Answers: {

                  a: "F22 Raptor",

                  b: "F15 Eagle",

                  c: "F16 Falcon",

                  d: "F4 Phantom"
                  
                },

                rightAnswer: "F16 Falcon"

            }
    
        ];  //end of quizQuestionArray

             
        
        displaystring = "<h2>" + quizQuestionArray[0].quest1 + "</h2>";

                //console.log(displaystring);

        $("#QuizQuestns").html(displaystring);  

        displaystring = "";

        //for (i=0; i < 5; i++) {

            //displaystring = "<h3>" + quizQuestionArray["quest1"]["quest1Answers"].a + "</h3>";

            const answerDiv = $("<div>");

            displaystring1 = "<h3>" + quizQuestionArray[0].quest1Answers.a + "</h3>";
            displaystring2 = "<h3>" + quizQuestionArray[0].quest1Answers.b + "</h3>";
            displaystring3 = "<h3>" + quizQuestionArray[0].quest1Answers.c + "</h3>";
            displaystring4 = "<h3>" + quizQuestionArray[0].quest1Answers.d + "</h3>";

            answerDiv.append(displaystring1,displaystring2,displaystring3,displaystring4)
        
            $("#quizAnswr1").append(answerDiv);
        
        //}    


       
       

    };   //end of buildQuestionList function





    function rmstrtbtn () {

        //Removes the Start Button from the DOM

        $("#Startbtn").remove();

        buildQuestionList ();

        
        
   
    }

    

    
    //Main Section
    
    $("#Startbtn").on("click", rmstrtbtn);

    
    
});