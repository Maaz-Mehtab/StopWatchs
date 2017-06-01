// var hou = document.getElementById('hours');
// var minu = document.getElementById('minutes');
// var sec = document.getElementById('seconds');
// var millisecond = 0,
//     second = 0,
//     minute = 0,
//     hour = 0;

// function timer() {
//     millisecond++;
//     if (millisecond > 10) {
//         millisecond = 0
//         second++;
//     }

//     if (second > 60) {
//         millisecond = 0;
//         second = 0;
//         minute++;
//         if (minute > 60) {
//             minute = 0;
//             millisecond = 0;
//             second = 0;
//             hour++
//         }
//     }
//     showWatch.innerHTML = (hour ? (hour > 9) ? hour : '0' + hour : "00") + ":" + (minute ? (minute > 9) ? minute : '0' + minute : "00") + ":" + (second ? (second > 9) ? second : '0' + second : "00") + ":" + (millisecond ? (millisecond > 9) ? millisecond : '0' + millisecond : "00")
//         // showWatch.innerHTML=hour+":"+minute+":"+second+":"+millisecond;
//     startTimer();
// }

// function startTimer() {
//     // set =setTimeout(timer,1)

//     start();
// }




// function start() {
//     setTime = setTimeout(timer, 10)
// }

// function stop() {
//     clearTimeout(setTime);
// }


// function reset() {
//     clearTimeout(setTime);
//     display.innerHTML = "00:00:00:0";

// }




var hour = document.getElementById('hours');
var minute = document.getElementById('minutes');
var second = document.getElementById('seconds');
var millisecond = document.getElementById('milliseconds');
var msec = 0;
var sec = 00;
var mint = 00;
var hou = 00;
var Watch;

function timer() {

    millisecond.innerHTML = msec;
    hour.innerHTML = hou;
    minute.innerHTML = mint;
    second.innerHTML = sec;
    msec++;
    if (msec > 9) {
        msec = 0;
        sec++;
    }

    if (sec > 60) {
        sec = 0;
        mint++;
    }
    if (mint > 60) {
        mint = 0;
        hou++;
    }


    hour.innerHTML = (hou ? (hou > 9) ? hou : '0' + hou : "00");
    minute.innerHTML = (mint ? (mint > 9) ? mint : '0' + mint : "00");
    second.innerHTML = (sec ? (sec > 9) ? sec : '0' + sec : "00");
    start();
}

function startTimer() {
    set = setTimeout(timer, 100)
    start();
}

function start() {
    setTime = setTimeout(timer, 100)

}

function stop() {
    clearTimeout(setTime);
}

function reset() {
    clearTimeout(setTime);
    msec = sec = mint = hou = 00;
    millisecond.innerHTML = "0";
    hour.innerHTML = "00";
    minute.innerHTML = "00";
    second.innerHTML = "00";


}