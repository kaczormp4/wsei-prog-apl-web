const chanel1: any[] = [];
const clapAudio: HTMLAudioElement = document.querySelector('[data-sound="clap"]');

const playChanel1Btn: HTMLButtonElement = document.querySelector('#playChanel1');

document.body.addEventListener('keypress',onKeyDown);
playChanel1Btn.addEventListener('click',onPlayChanel1);

function onKeyDown(ev: KeyboardEvent): void {

    const key = ev.key;
    const time = ev.timeStamp;

    chanel1.push({
        key,
        time
    });

    playSound(key);
    console.log(chanel1);
}

function playSound(key: string){
    clapAudio.currentTime = 0;
    clapAudio.play();
}

function onPlayChanel1():void {
    playChanne1();
}

function playChanne1():void{
    let prevTime = 0;
    chanel1.forEach(sound =>{
        const timeout = sound.time - prevTime;
        setTimeout(() => playSound(sound.key),timeout)
        
    })
}