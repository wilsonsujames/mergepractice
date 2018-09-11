$(document).ready(function(){


function clockTick() {
  var currentTime = new Date(),
      month = currentTime.getMonth() + 1,
      day = currentTime.getDate(),
      year = currentTime.getFullYear(),
      hours = currentTime.getHours(),
      minutes = currentTime.getMinutes(),
      seconds = currentTime.getSeconds();
    
    
    if(seconds<10){
        seconds="0"+seconds
    }
   
      
      if ( minutes<10 ){       
      
 var text = (year + " / " + month + " / " +day + ' __ ' + hours + ':0' + minutes + ':' + seconds);
 }
    
    else{ text = (year + " / " + month + " / " +day + ' __ ' + hours + ':' + minutes + ':' + seconds);}
    
      
  $("#demo").html(text);
}

    
    
// here we run the clockTick function every 1000ms (1 second)
setInterval(clockTick, 1000);           
//$("#demo").text(month + "/" + day + "/" + year);
    
    
    
 /* var n = Date();
$("#demo").html(n);*/
 
    
});