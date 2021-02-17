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
