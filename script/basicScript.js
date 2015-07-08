/**
 * Created by Razvanel on 6/30/2015.
 */
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
jcena["yell"].src = "";

//// END OF JOHN CENA AUDIO FILE SETUP START OF OVERLAY (JOHN CENA IMAGE SHOWER + AUDIO PLAYER SETUP)

$("body").append($overlay);

$("#welcome").click(function(){
    countEr += 1;
    $("#clicker").text(countEr);
});

$("#johncena").click(function(){
    $overlay.append($image);
    $overlay.show();
});

$($overlay).click(function(){
    $overlay.hide();
});

//// END OF OVERLAY AND START OF MOVE BLOCK

$(document).keydown(function(e){
    switch(e.which){
        case 37:
            $mover.css('left', $mover.offset().left - 10);
            break;
        case 38:
            $mover.css('top', $mover.offset().top - 10);
            e.preventDefault();
            break;
        case 39:
            $mover.css('left', $mover.offset().left + 10);
            e.preventDefault();
            break;
        case 40:
            $mover.css('top', $mover.offset().top + 10);
            break;
    }
})

//// END OF MOVE BLOCK AND START OF CD BLOCK

$("body").append($tester);
$tester.append($cooldown);
$tester.data("cd", 1000);

$tester.click(function(){
    check()
})

function check() {
    if(!isAnimating){
        isAnimating = true;
        addMoney();
        $cooldown.width("100%").stop(true, true).animate({width: '0%'}, 1000, 'linear', function () {
            isAnimating = false;
        });
    }
}

function income() {
    var interval = setInterval(function(){
        inCome += inCrease;
        $cooldown.text(inCome)
    }, 1000)
}

income();

function addMoney(){
    inCrease += 1;
    inCome += 5;
}
//// END OF CD BLOCK