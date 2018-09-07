$(document).ready(function(){
    $("input").click(function()
     {
        var numberOfListItem = $("#choices li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);

        
        console.log(randomChildNumber);
        
        $("H1").text($("#choices li").eq(randomChildNumber).text());

     
        
   
        
var imgurl = [
    'noodle.jpg',
    'rice.jpg',
    'dump.jpg'
];
        
         $("#my_div").empty();
        $("#my_div").append("<img src='"+imgurl[randomChildNumber]+"'>");
       
       
        
        
    });
});