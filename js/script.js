var today = new Date();
var hourNow = today.getHours();
var minuteNow = today.getMinutes();
var minuteString;
var morning;
var today;

document.write ('<h2>' + today + '</h2>');

if(hourNow > 12){
	hourNow = hourNow - 12;
	morning = false;
}
else
	morning = true;

if(minuteNow < 10)
	minuteString = "0"+minuteNow;
else
	minuteString = ""+minuteNow;


document.write('<h2>' + hourNow + ":" + minuteString + " ");
if(morning == true)
	document.write("a.m." + '</h2>');
else
	document.write("p.m."+'</h2>');

document.write(greeting);
