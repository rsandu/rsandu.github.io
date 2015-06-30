/**
 * Created by Razvanel on 6/30/2015.
 */
var countEr = 0;

var $overlay = $('<div id = "overlay"></div>');
var $image = $('<img src="http://www.wwe.com/f/styles/superstar_bio/public/talent/bio/2015/01/johncena_bio_20150119.png"/>');

///// SETTING THE JOHN CENA AUDIO FILE
$(document).ready(function(){
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'http://puu.sh/iIJqP/7ca580ba60.wav')
    // Load it
    $.get(); // Gets page elements (Read up more)
    audioElement.addEventListener("load", function() { // On site load, adds function
        audioElement.play();
    }, true); // Bubbled

    $("#johncena").click(function(){
        audioElement.play();
    })
})
var jcena = {};
jcena["yell"] = new Audio();
jcena["yell"].src = ""

//// END OF JOHN CENA AUDIO FILE SETUP

$("body").append($overlay);

$("#welcome").click(function(){
    countEr += 1;
    $("#clicker").text(countEr);
})

$("#johncena").click(function(){
    $overlay.append($image);
    $overlay.show();
})

$($overlay).click(function(){
    $overlay.hide();
})