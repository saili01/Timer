const durationInput=document.querySelector("#duration");
const startButton=document.querySelector("#start");

const pauseButton=document.querySelector("#pause");
const circle=document.querySelector('circle');

const perimeter=parseInt(circle.getAttribute('r').slice(0,-2)) * 2 * Math.PI;
console.log(perimeter);
circle.setAttribute('stroke-dasharray',perimeter);
let duration;
const timer=new Timer(durationInput,startButton,pauseButton,{
    onStart(totalduration){
    duration=totalduration;
    },
    onTick(timeRemaining){
     circle.setAttribute('stroke-dashoffset',perimeter * timeRemaining / duration -perimeter);
     
    },  
    onComplete(){
      console.log('Timer is completed');
    }
})


//perimeter * timeRemaining/totalduration -perimeter