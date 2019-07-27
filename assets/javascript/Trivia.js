$(document).ready(function () {

    function buildQuestionList () {

        
        const quizQuestionArray = [
            
    
            { quest1: "Which U.S fighter is the current Air Superiority fighter?",

              quest1Answers: {

                  a: "F22 Raptor",

                  b: "F15 Eagle",

                  c: "F16 Falcon",

                  d: "F4 Phantom"

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

         
        console.log("The 1st Question is: " + quizQuestionArray[0].quest1);

       

    };   //end of buildQuestionList function





    function rmstrtbtn () {

        //Removes the Start Button from the DOM

        $("#Startbtn").remove();
        
   
    }

    

    
    //Main Section
    
    $("#Startbtn").on("click", rmstrtbtn);

    buildQuestionList ();
    
});