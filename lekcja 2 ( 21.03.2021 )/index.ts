///tymczasowe wiem ze zle
const chanel1: any[] = [];
const chanel2: any[] = [];
const chanel3: any[] = [];
const chanel4: any[] = [];
const boomAudio: HTMLAudioElement = document.querySelector('[data-sound="boom"]');
const clapAudio: HTMLAudioElement = document.querySelector('[data-sound="clap"]');
const hihatAudio: HTMLAudioElement = document.querySelector('[data-sound="hihat"]');
const kickAudio: HTMLAudioElement = document.querySelector('[data-sound="kick"]');
const openhatAudio: HTMLAudioElement = document.querySelector('[data-sound="openhat"]');
const rideAudio: HTMLAudioElement = document.querySelector('[data-sound="ride"]');
const snareAudio: HTMLAudioElement = document.querySelector('[data-sound="snare"]');
const tinkAudio: HTMLAudioElement = document.querySelector('[data-sound="tink"]');
const tomAudio: HTMLAudioElement = document.querySelector('[data-sound="tom"]');

const playChanel1Btn: HTMLButtonElement = document.querySelector('#playChanel1');
const playChanel2Btn: HTMLButtonElement = document.querySelector('#playChanel2');
const playChanel3Btn: HTMLButtonElement = document.querySelector('#playChanel3');
const playChanel4Btn: HTMLButtonElement = document.querySelector('#playChanel4');

const recordChanel1Btn: HTMLButtonElement = document.querySelector('#recordChanel1');
const recordChanel2Btn: HTMLButtonElement = document.querySelector('#recordChanel2');
const recordChanel3Btn: HTMLButtonElement = document.querySelector('#recordChanel3');
const recordChanel4Btn: HTMLButtonElement = document.querySelector('#recordChanel4');

document.body.addEventListener('keypress',onKeyDown);
playChanel1Btn.addEventListener('click',onPlayChanel1);


function onKeyDown(ev: KeyboardEvent): void {
    const key = ev.key;
    const time = ev.timeStamp;
    switch (key) {
        case "q":
            playSound(boomAudio);
            console.log(boomAudio.parentElement.className)
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
        key,
        time
    });
}

function playSound(instrument : HTMLAudioElement){
    instrument.currentTime = 0;
    instrument.play();
}

function onPlayChanel1():void {
    playChannel(chanel1);  
    console.log(chanel1)

}

function onPlayChanel2():void {
    playChannel(chanel2);  
    console.log(chanel2)
}

function recordChanel():void {
    // const key = ev.key;
    // const time = ev.timeStamp;
    // chanel1.push({
    //     key,
    //     time
    // });
}

function playChannel(chanel : any):void{
    let prevTime = 0;
    chanel.forEach(sound =>{
        const timeout = sound.time - prevTime;
        setTimeout(() => {
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
            console.log(sound.key)
     
        },timeout)
        
    })
}
