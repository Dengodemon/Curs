document.getElementById('Timers').innerHTML =
    01 + ":" + 11;
startTimers();


function startTimers() {
    var presentTime = document.getElementById('Timers').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSeconds((timeArray[1] - 1));
    if (s == 59) { m = m - 1 }
    if (m < 0) {
        return
    }

    document.getElementById('Timers').innerHTML =
        m + ":" + s;
    console.log(m)
    setTimeout(startTimers, 1000);

}

function checkSeconds(sec) {
    if (sec < 10 && sec >= 0) { sec = "0" + sec }; // add zero in front of numbers < 10
    if (sec < 0) { sec = "59" };
    return sec;
}
