var topic = [
    "HTML",
    "CSS",
    "Javascript",
    "Python",
    "Nodejs",
    "raspberry pi"
];



var startDate = new Date(); 


function setMonthAndDay(startMonth,startDay)
{
    startDate.setMonth(startMonth-1,startDay);
    startDate.setDate(startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
  
    
}

//setMonthAndDay(8,29)