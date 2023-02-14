const mario = document.getElementById('mario')
const pipe = document.getElementById('pipe')
pipe.classList.add('pipe-anime')
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
        pipe.classList.remove('pipe-anime')
        confirm(`Game over: ${(score/100).toFixed(0)}`)
        setTimeout(3000)
        pipe.classList.add('pipe-anime')
        score=0;
    }else{
        setTimeout(score++,1000)
    }
    console.log(score/100)

    
},10)

document.addEventListener("keypress", (ev)=>{
    ev.preventDefault()
    jump();
})