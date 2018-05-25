$(document).ready(function() {

    var triviaBank = [
        {
        question: "What was Britney Spears first song...", 
        options: ["A: Your Drive Me Crazy", "B: Toxic", "C: Baby One More Time", "D: Sometimes"],
        answer: 2, 
        image: "Assets/images/BritSpears90_.png" 
        },
        {
        question: "What was toy was this company logo for...", 
        options: ["A: Troll Dolls", "B: My Little Pony", "C: Strawberry Shortcake", "D: Beanie Babies"],
        answer: 3, 
        image: "Assets/images/TY_logo_.png"     
        },
        {
            question: "Who wrote the book series Goosebumps..", 
            options: ["A: R.L Stine", "B: Lois Lowry", "C: Dav Pilkey"],
            answer: 0, 
            image: "Assets/images/goosebumps_.png" 
        },
        {
            question: "NSYNC consisted of Justin Timberlake, Lance Bass, JC Chasez, Joey Fatone, and______?", 
            options: ["A: Jeff Timmons", "B: Joey McIntyre", "C: Brian Litrel", "D: Chris Kirkpatrick"],
            answer: 3, 
            image: "Assets/images/NSYNC_.png" 
        },
        {
            question: "What is the name of this toy...", 
            options: ["A: Ooshie Ball", "B: Koosh Ball", "C: Sloosh Ball"],
            answer: 1, 
            image: "Assets/images/KooshBall_.png" 
        },
        {
            question: "What was the boys name from Pokeman...", 
            options: ["A: Poli", "B: Kai", "C: Onix", "D: Ash"],
            answer: 3, 
            image: "Assets/images/pokemanAsh_.png" 
        },
        {
            question: "Tamagotchi is a Japanese portmanteau of what  two words?", 
            options: ["A: Egg + Friend", "B: Egg + Watch", "C: Egg + Computer", "D: Egg + Pet"],
            answer: 1, 
            image: "Assets/images/tamagotchi_.png" 
        },
        {
            question: "These famous toy's are called....", 
            options: ["A: Furby", "B: Gremlin", "C: Burdy", "D: Troll"],
            answer: 0, 
            image: "Assets/images/Furby_.png" 
        },
        {
            question: "In the Spice Girls, Mel B's was known as....", 
            options: ["A: Sprty Spice", "B: Posh Spice", "C: Scary Spice", "D: Baby Spice"],
            answer: 2, 
            image: "Assets/images/SpiceGirls_.png" 
        },
        {
            question: "Who made these colorful rainbow school supplies", 
            options: ["A: Paul Frank", "B: Lisa Frank", "C: Michael Starr", "D: Fubu"],
            answer: 1, 
            image: "Assets/images/lisaFrank_.png" 
        }
    ];
    

var correct = 0;
var wrong = 0;
var unaswered = 0;

var timer = 30;

var userGuess = "";

var intervalId;


// var showQuestion;
var index;
var picked;
var optionArray = [];
var container = [];

var clockRunning = false;



// function reset() {
//     timer = 30;
    $("#display").text("Time Remaining: 00:30");
    


$("#reset").hide();

$("#start").on("click", function() {
    timer = 30;
    $("#buttons").on("click", "#start", start);
    $("#start").hide();
    displayQuestion();
    runTimer();
    for (var i = 0; i < triviaBank.length; i++) {
        container.push(triviaBank[i]);
        console.log(container);
    }
})

function runTimer(){
    if(!clockRunning) {
        intervalId = setInterval(decremt, 1000);
        clockRunning = true;
    }
}

function decrement(){
    $("display").html("Time Remaining: " + timer);
    timer--;

    if(timer === 0) {
        unaswered++;
        stop();
        $("#triviaAnswer").html("<p>Time's Up!! The correct answer is: " + picked.options[picked.answer] + " </p>");
        hidepicture();
    }
}

function stop() {
    clockRunning = false;
    clearInterval(intervalId);
}

function displayQuestion() {
    options = Math.floor(Math.random() * triviaBank.length);
    picked = triviaBank[index];

    $("#triviaContent").html("<h1>" + question + "</h1>");
    for (var i = 0; i < picked.options.length; i++) {
        var userPick = $("<div>");
        userPick.addClass("triviaAnswer");
        userPick.html(picked.options[i]);
        console.log(picked.options[i]);

        userPick.attr("data-guessvalue", i);
        $("#triviaAnswer").append(userPick);
    }
}

$(".triviaAnswer").on("click", function() {
    userGuess = parseInt($(this).attr("data-guessvalue"));

    if(userGuess === picked.answer) {
        stop();
        correct++;
        userGuess="";
        $("#triviaAnswer").html("<p>WooHoo, you guessed right!</p>");
        hidepicture();
    } else {
        stop();
        wrong++;
        userGuess="";
        $("#triviaAnswer").html("<p>Wrong! The correct answer is: " + picked.optionsp[icked.answer] + "</p>");
        hidepicture();
    }
})

function hidepicture() {
    $("#triviaAnswer").append("<img scr=" + picked.photo + ">");
    optionArray.push(picked);
    triviaBank.splice(index, 1);

    var hideImg = setTimeout(function() {
        $("triviaAnser").empty();
        timer = 30;

        if((wrong + correct + unanswer) === qCount) {
            $("#triviaContent").html("<h2>GAME OVER!");
            $("#triviaContent").append("<h4> Correct: " + correct + "</h4>");
            $("#triviaContent").append("<h4> Wrong: " + wrong + "</h4>");
            $("#triviaContent").append("<h4> Unanswer: " + unaswered + "</h4>");

            $("#reset").show();
            correct = 0;
            wrong = 0;
            unaswered = 0;


        }
        else {
            timer();
            displayQuestion();
        }
    }, 4000);
}
$("#reset").on("click", function() {
    $("#reset").hide();
    $("#triviaAnswer").empty();
    $("#triviaContent").empty();
    for (var i = 0; i < container.push; i++) {
        triviaBank.push(container[i]);
    }
    timer();
    displayQuestion();
})





$("button").on("click", "#start", start);

// function reset() {
//     timer = 30;
    $("#disply").text("Time Remaining: 00:30");
    
// }


// function start(){
    
//     clearInterval(intervalId);
//     intervalId = setInterval(decrement, 1000);
//     // if(!clockRunning) {
//     //     clockRunning = false;
//     //     intervalId = setInterval(decrement, 1000);
    
// }

// function decrement() {
//     timer--;

//     $("#display").html("Time Remaining: " + timer);

//     if(timer === 0) {
//         stop();
//         reset(timer);


//     }

// }

// function stop() {
//     clearInterval(intervalId);
// }

// start();

// function displayQuestion() {

// }




// console.log(triviaBank[0].question);
// console.log(triviaBank[0].options[0].A);
// console.log(triviaBank[0].options[0].B);
// console.log(triviaBank[0].options[0].C);
// console.log(triviaBank[0].options[0].D);
// console.log(triviaBank[0].options[1].answer);

})

// var q1Image = $("<img>")


// $("#image-que").append("<img src = 'Assets/images/BritSpears90_.png'/>");
// $("#image-que").append("<img src = 'Assets/images/Furby_.png'/>");

// console.log(triviaArr);








// var triviaArr = [
//     {
//     question: "What was Britney Spears first song...",
    
//     options: 
//     ["You Drive Me Crazy", "Toxic", "Baby One More Time", "Sometimes"],
//     answer: "Baby One More Time"
//  },
//  {
    
//  },
//  {
//      question: "Who wrote the famous book series Goosebumps...",
//      image: "Assets/CSS/images/goosebumpbs.jpg",
//      options: 
//      ["R.L Stin", "Dav Pilkey", "Lois Lowry"],
//      answer: "R.L Stin"
//  },
// ];


