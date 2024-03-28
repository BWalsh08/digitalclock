function currentTime() {
    let theTime = new Date();

    let theDayNum = theTime.getDay();
    let theHour = theTime.getHours();
    let theMinutes = theTime.getMinutes();
    let theSeconds = theTime.getSeconds();

    let theDay = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    
    let amPM = "AM";

    if(theHour >= 12) {
        amPM = "PM";
    }

    if(theHour > 12) {
        theHour = theHour % 12;
    }

    if(theHour < 10) {
        theHour = "0" + theHour;
    }

    if(theMinutes < 10) {
        theMinutes = "0" + theMinutes;
    }

    if(theSeconds < 10) {
        theSeconds = "0" + theSeconds;
    }


    document.getElementById('day').innerHTML = theDay[theDayNum];
    document.getElementById('hour').innerHTML = theHour;
    document.getElementById('minutes').innerHTML = theMinutes;
    document.getElementById('seconds').innerHTML = theSeconds;
    document.getElementById('ampm').innerHTML = amPM;

    let evenSeconds = theSeconds % 2;

    if(evenSeconds === 0) {
        document.getElementById('colon1').style.color = "red";
        document.getElementById('colon2').style.color = "red";

    }
    else {
        document.getElementById('colon1').style.color = "green";
        document.getElementById('colon2').style.color = "green";

    }
}

setInterval(() => {
    currentTime();
}, 1000);