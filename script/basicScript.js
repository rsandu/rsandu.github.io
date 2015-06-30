/**
 * Created by Razvanel on 6/30/2015.
 */
var countEr = 0;

$("#welcome").click(function(){
    countEr += 1;
    $("#clicker").text(countEr);
})