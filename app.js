let submitBtn = document.querySelector('#start');
let stopBtn = document.querySelector('#stop');
let paragraph = document.querySelector('#content');

const all_paragraph = [
    {
    paragraph:'Another option you have is choosing the number of syllables in the words you speak. You probably have never considered this option before, but you have it every time you open your mouth and speak.'
    },

    {
    paragraph:'It had become a far too common an event in her life. She has specifically placed the key to the box in a special place so that she would not lose it and know exactly where it was when the key was needed.'
    },

    {
    paragraph:'He stared out the window at the snowy field. He had been stuck in the house for close to a month and his only view of the outside world was through the window. There was not much to see.'
    },

    {
    paragraph:'Welcome to my world. You will be greeted by the unexpected here and your mind will be challenged and expanded in ways that you never thought possible. That is if you are able to survive.'
    },
];



let hours = 0;
let minutes = 0;
let seconds = 0;

let leadingHours = 0;
let leadingMinutes = 0;
let leadingSeconds = 0;

let timerStatus = "stopped";
let interval = null;

function stopWatch(){
    
    seconds++;

    if(seconds/60 === 1){
        seconds = 0;
        minutes++;

        if(minutes/60 === 1){
            minutes = 0;
            hours++
        }
    }

    if(seconds < 10){
        leadingSeconds = "0" + seconds.toString();
    }
    else{
        leadingSeconds = seconds;
    }

    if(minutes < 10){
        leadingMinutes = "0" + minutes.toString();
    }
    else{
        leadingMinutes = minutes;
    }

    if(hours < 10){
        leadingHours = "0" + hours.toString();
    }
    else{
        leadingHours = hours;
    }

    let displayTimer = document.getElementById('counter').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}



submitBtn.addEventListener('click', function(){
    let random = Math.floor(Math.random()*all_paragraph.length);
    paragraph.innerText = all_paragraph[random].paragraph;

    if(timerStatus === "stopped"){
        interval = window.setInterval(stopWatch,1000);
        timerStatus = "started";

    }

});



window.addEventListener('DOMContentLoaded', (event) => {
    const content = document.querySelector('#content');
    const textInput = document.querySelector('#text');
    const mistakeCounter = document.querySelector('#mistake_counter');

    textInput.addEventListener('input', () => {
      const inputText = textInput.value;
      const contentText = content.textContent;
      let mistakes = 0;
  
      for (let i = 0; i < inputText.length; i++) {
        if (inputText[i] !== contentText[i]) {
          mistakes++;
        }
      }
  
      mistakeCounter.textContent = mistakes.toString();

    });
  });
  
stopBtn.addEventListener('click',function(){
    if(timerStatus === "started"){
        interval = window.clearInterval(interval);
        timerStatus = "stopped";
    }
    
    const mistakeCounter = document.getElementById('mistake_counter');
    const mistakeDoneText = document.getElementById('mistake_done_text');
    mistakeDoneText.textContent = mistakeCounter.textContent;

    
    const counter = document.getElementById('counter');
    const timeTakenText = document.getElementById('time_taken_text');
    timeTakenText.textContent = counter.textContent;


    const content = document.getElementById('content');
    const accuracyElement = document.querySelector('#accuracy');
    function calculateAccuracy() {
        const totalWords = content.textContent.length;
        const mistakes = mistakeCounter.textContent;
        const accuracy = Math.ceil(((totalWords - mistakes) / totalWords) * 100);


        let accu = accuracy.toString();

        accuracyElement.textContent = accu;
    }

    calculateAccuracy();


});






