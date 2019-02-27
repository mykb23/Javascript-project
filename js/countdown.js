var birthDay = new Date("Oct 1, 2019 10:00:00").getTime();

var count = setInterval( function countDown () {

    var present = new Date().getTime();
    var diff = birthDay - present;

    var weeks = Math.floor(diff / (60 * 60 * 24 * 1000 *7));
    var days = Math.floor(diff / (60 * 60 * 24 * 1000));
    var hours = Math.floor(diff / (60 * 60 * 1000));
    var minutes = Math.floor(diff / (60 * 1000));
    var seconds = Math.floor(diff / 1000);

    document.getElementById('event').innerHTML = "Week: " +  weeks +" Day: "+days+ " Hours: "+hours +  " Minutes: "+minutes +" Seconds: "+seconds;
    document.getElementById('event').style.justifyContent='center';
    document.getElementById('event').style.padding='5px';
    document.getElementById('event').style.fontWeight='bold';
    document.getElementById('event').style.fontSize='25px';

    document.getElementById('event').style.color='white';
    // document.getElementsByTagName("h3").style.fontSize='15px';

	if (diff <= 0) {
		clearInterval(count);	
	}
},
1000);