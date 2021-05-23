var currDate = new Date();
var hr = currDate.getHours();
if (hr >= 1 && hr < 12) {
    greeting = 'Good Morning';
    document.getElementById("demo").style.color = "green";
}
else if (hr >= 12 && hr < 18) {
    greeting = 'Good Afternoon';
    document.getElementById("demo").style.color = "orange";
}
else if (hr >= 18 && hr < 20) {
    greeting = 'Good Evening';
    document.getElementById("demo").style.color = "crimson";
}
else {
    greeting = 'Good Night';
    document.getElementById("demo").style.color = "black";
}
document.getElementById("demo").innerHTML = greeting;
function showtime() {
    var time=new Date();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    if(hour<10)
    {
        hour="0"+hour;
    }
    if(min<10)
    {
        min="0"+min;
    }
    if(sec<10)
    {
        sec="0"+sec;
    }
    document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec;
}
var t = setInterval(showtime, 500);