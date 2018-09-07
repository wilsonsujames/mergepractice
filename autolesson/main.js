$(document).ready(function(){
   
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    
   
     $( "input[type=date]" ).change(function() {
        //alert( $( "input[type=date]" ).val() );
        //2018-09-03
        var inputDate = $( "input[type=date]" ).val();
        var splitText = inputDate.split("-");
        console.log(splitText[1]);
        setMonthAndDay(splitText[1],splitText[2]);
        setTable();
         
     });
     
});
    
    
    function setTable(){
    
    
    $("#courseTable").empty()
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");

    var topicCount = topic.length;
    
    var secondUnit=1000;
    var minuteUnit=secondUnit*60;
    var hourUnit=minuteUnit*60;
    var dayUnit=hourUnit*24;
    

    
    
    for (var x=0;x<topicCount;x++)
{    
            $("#courseTable").append("<tr>");
            $("#courseTable").append("<td>"+(x+1)+"</td>");
            $("#courseTable").append("<td>"+(new Date(startDate.getTime()+7*x*24*60*60*1000)).toLocaleDateString()+"</td>");
            $("#courseTable").append("<td>"+topic[x]+"</td>");
            $("#courseTable").append("</tr>");




    }




}
    
   


    








