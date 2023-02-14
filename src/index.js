const mario = document.getElementById('mario')
const pipe = document.getElementById('pipe')
let score = 0;
function jump(){   
    if(!mario.classList.contains("jump")){
    mario.classList.add('jump')
    setTimeout(function(){
        mario.classList.remove('jump')
    },300)}
}

let isAlive = setInterval(function(){
    let marioTop = parseInt(window.getComputedStyle(mario).getPropertyValue("top"))
    let pipeLeft = parseInt(window.getComputedStyle(pipe).getPropertyValue("left"))
    
    if(pipeLeft <50 && pipeLeft>0 && marioTop>=130 ){
        alert(`Game over: ${score}`)
        score=0;
    }
    if(pipeLeft ==-10){
        score+=10
    }
    
},10)

document.addEventListener("keypress", (ev)=>{
    ev.preventDefault()
    jump();
})