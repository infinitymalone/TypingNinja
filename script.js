window.addEventListener('load',init);
let score=0, isPlaying, time=6;
alert('BEFORE YOU START--Remember the game is Case Sensitive ');
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words= ['Hello',
'posty',
'javascript',
'developer',
'nutrition',
'loremIpsum',
'echo',
'duck',
'SixtyNine',
'Seventy',
'Salman Khan',
'Shubham',
'Reyna',
'TypeScript',
'Defination',
'Rajiv Chowk',
'Kendriya ',
'Score',
'Game',
'omen',
'raze',
'Reyna',
'Apple',
'Consultadd',
'Language',
'StyleSheets',
'Google',
'Oslo',
'Simba',
'eela'
];

function init(){
    showWord(words);
    wordInput.addEventListener('input',startMatch);
    setInterval(countdown,1000);
    setInterval(checkStatus,50);
}

function showWord(words){

   var RandomIndex= Math.floor(Math.random()*words.length);
   currentWord.innerHTML=words[RandomIndex];
}

function countdown(){
    if(time>0){
        time--;
    }else if(time==0){
        isPlaying=false;
    }
    timeDisplay.innerHTML=time;
}


function checkStatus(){
    if(!isPlaying && time==0)
    {
        message.innerHTML='GAME OVER!!!!';
        score=0;
    }
}

function startMatch(){
    if(matchWords())
    {
        isPlaying= true;
        showWord(words);
        wordInput.value='';
        score++;
    }
    if(score==-1)
    {scoreDisplay.innerHTML=0;}
    else{scoreDisplay.innerHTML=score;}
    
}

function matchWords(){
    if(wordInput.value==currentWord.innerHTML)
    {
        message.innerHTML='Correct😃';
        return true;
    }else{
        message.innerHTML='';
        return false;
    }
}