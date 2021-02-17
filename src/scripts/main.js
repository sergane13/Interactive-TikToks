/*
    Vanilla JS code
*/

// Show buttons and text when video is ended
function myHandler(event){
    displayTitle();
    positionChoiceButtons();
    displayButtons();
}


let buttons = document.getElementsByClassName("choice");
let title = document.getElementById("choose-text");

let videoStream = document.getElementById("video-player");
let videoPath = "src/videos/";
let videoMain = videoPath + "main.mp4";
let videoChoice1 = videoPath + "elon.mp4";
let videoChoice2 = videoPath + "one.mp4";
videoStream.addEventListener('ended', myHandler);

// Function to execute when Start button is pressed
function start(){
    hideButtons();
    hideTitle();
    videoStream.play(); 
}

// Function to execute whet Pause button is pressed
function pause(){
    videoStream.pause();  
}

// Function to place the choice buttons
function positionChoiceButtons() {
    let container = $(".feed-element").eq(0);
    let containerWidth = container.width();
    let containerHeight = container.height();

    buttons[0].style.left = (0.77 * containerWidth).toString() + "px";
    buttons[0].style.top = (0.35 * containerHeight).toString() + "px";

    buttons[1].style.left = (0.34 * containerWidth).toString() + "px";
    buttons[1].style.top = (0.32 * containerHeight).toString() + "px";
}

// Function to display choice buttons
function displayButtons() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.display = "block";
    }
}

// Function to hide buttons
function hideButtons() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.display = "none";
    }
}

// Function to display "Choose" text
function displayTitle() {
    title.style.display = "block";
}

// Function to hide "Choose" text
function hideTitle() {
    title.style.display = "none";
}

// Function to execute when choosing
function choice(choiceNumber) {

    hideButtons();
    hideTitle();

    if (choiceNumber == 1) {
        videoStream.setAttribute("src", videoChoice1);
    } else if(choiceNumber == 2) {
        videoStream.setAttribute("src", videoChoice2);
    }

    videoStream.removeEventListener('ended', myHandler);
    videoStream.play();
}

// Function to exectue when Back button is pressed
function back(){
    videoStream.setAttribute("src", videoMain);
    videoStream.addEventListener('ended', myHandler);
    videoStream.play();
}

// Function to execute when Choice button in pressed
function backChoice() {
    back();
    videoStream.currentTime = 100;
}


/*
    JQuery code
*/

// Function to center "Choose text"
function centerChooseText() {

    let choiceText = $("#choose-text");

    let choiceTextWidth = choiceText.width();
    let containerWidth = $(".feed-element").eq(0).width();
    let yPosition = (containerWidth - choiceTextWidth)  / 2;

    choiceText.css("left", yPosition.toString() + "px");

}

// Code to execute after while loading
$(window).on('load', function() {
    
    centerChooseText();

})

// Recenter "Choose" text when resizing
$(window).resize(function(){

    centerChooseText();

});


/*var buttons = document.getElementById("choice");
var title = document.getElementsByClassName("title");

var main = document.getElementById("video_main");
function start(){
    main.play(); 
    title[0].style.display = "none"
    buttons[0].style.display = "none";
    buttons[1].style.display = "none";
    scenerio_1[0].style.display = 'none';
    scenerio_2[0].style.display = 'none'; 
}
$( document ).ready(function() {
    buttons[0].style.display = "none";
    buttons[1].style.display = "none";
});
function pause(){
    main.pause();  
}

main.addEventListener('ended', myHandler);
    function myHandler(event){
        title[0].style.display = "block"
        buttons[0].style.display = "block";
        buttons[1].style.display = "block";
    }
var scenerio_1 = document.getElementsByClassName("main_choice_1");
var scenerio_2 = document.getElementsByClassName("main_choice_2");
var video_main_choice_1 = document.getElementById("video_main_choice_1");
var video_main_choice_2 = document.getElementById("video_main_choice_2");
function scenario_2(){
    title[0].style.display = "none"
    buttons[0].style.display = "none";
    buttons[1].style.display = "none";
    scenerio_1[0].style.display = 'block';
    video_main_choice_1.play();
}
function scenario_1(){
    title[0].style.display = "none"
    buttons[0].style.display = "none";
    buttons[1].style.display = "none";
    scenerio_2[0].style.display = 'block';
    video_main_choice_2.play();  
}
function back(){
    title[0].style.display = "none"
    buttons[0].style.display = "none";
    buttons[1].style.display = "none";
    scenerio_1[0].style.display = 'none';
    scenerio_2[0].style.display = 'none';
    video_main_choice_1.pause();
    video_main_choice_2.pause();
    main.currentTime = 0;
    start();
}
function back_choice(){
    title[0].style.display = "none"
    buttons[0].style.display = "none";
    buttons[1].style.display = "none";
    scenerio_1[0].style.display = 'none';
    scenerio_2[0].style.display = 'none';
    video_main_choice_1.pause();
    video_main_choice_2.pause();
    main.currentTime = 7.2;
    start();
}*/