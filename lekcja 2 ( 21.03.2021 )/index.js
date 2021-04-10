var chanel1 = [];
var chanel2 = [];
var chanel3 = [];
var chanel4 = [];
var boomAudio = document.querySelector('[data-sound="boom"]');
var clapAudio = document.querySelector('[data-sound="clap"]');
var hihatAudio = document.querySelector('[data-sound="hihat"]');
var kickAudio = document.querySelector('[data-sound="kick"]');
var openhatAudio = document.querySelector('[data-sound="openhat"]');
var rideAudio = document.querySelector('[data-sound="ride"]');
var snareAudio = document.querySelector('[data-sound="snare"]');
var tinkAudio = document.querySelector('[data-sound="tink"]');
var tomAudio = document.querySelector('[data-sound="tom"]');
var playChanel1Btn = document.querySelector('#playChanel1');
var playChanel2Btn = document.querySelector('#playChanel2');
var playChanel3Btn = document.querySelector('#playChanel3');
var playChanel4Btn = document.querySelector('#playChanel4');
var recordChanel1Btn = document.querySelector('#recordChanel1');
var recordChanel2Btn = document.querySelector('#recordChanel2');
var recordChanel3Btn = document.querySelector('#recordChanel3');
var recordChanel4Btn = document.querySelector('#recordChanel4');
document.body.addEventListener('keypress', onKeyDown);
playChanel1Btn.addEventListener('click', onPlayChanel1);
function onKeyDown(ev) {
    var key = ev.key;
    var time = ev.timeStamp;
    console.log("sss");
    switch (key) {
        case "q":
            playSound(boomAudio);
            console.log("s");
            break;
        case "w":
            playSound(clapAudio);
            break;
        case "e":
            playSound(hihatAudio);
            break;
        case "r":
            playSound(kickAudio);
            break;
        case "t":
            playSound(openhatAudio);
            break;
        case "a":
            playSound(rideAudio);
            break;
        case "s":
            playSound(snareAudio);
            break;
        case "d":
            playSound(tinkAudio);
            break;
        case "f":
            playSound(tomAudio);
            break;
    }
    chanel1.push({
        key: key,
        time: time
    });
}
function playSound(instrument) {
    instrument.currentTime = 0;
    instrument.play();
}
function onPlayChanel1() {
    playChannel(chanel1);
    console.log(chanel1);
}
function onPlayChanel2() {
    playChannel(chanel2);
    console.log(chanel2);
}
function recordChanel() {
    // const key = ev.key;
    // const time = ev.timeStamp;
    // chanel1.push({
    //     key,
    //     time
    // });
}
function playChannel(chanel) {
    var prevTime = 0;
    chanel.forEach(function (sound) {
        var timeout = sound.time - prevTime;
        setTimeout(function () {
            switch (sound.key) {
                case "q":
                    playSound(boomAudio);
                    break;
                case "w":
                    playSound(clapAudio);
                    break;
                case "e":
                    playSound(hihatAudio);
                    break;
                case "r":
                    playSound(kickAudio);
                    break;
                case "t":
                    playSound(openhatAudio);
                    break;
                case "a":
                    playSound(rideAudio);
                    break;
                case "s":
                    playSound(snareAudio);
                    break;
                case "d":
                    playSound(tinkAudio);
                    break;
                case "f":
                    playSound(tomAudio);
                    break;
            }
            console.log(sound.key);
        }, timeout);
    });
}
