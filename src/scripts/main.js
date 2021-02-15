var buttons = document.getElementsByClassName("test");
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
}