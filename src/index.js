const mario = document.getElementById('mario')

function jump(){   
    if(!mario.classList.contains("jump")){
    mario.classList.add('jump')
    setTimeout(function(){
        mario.classList.remove('jump')
    },300)}
}

let isAlive = setInterval(function(){
    console.log("CHECK")
},10)

document.addEventListener("keypress", (ev)=>{
    ev.preventDefault()
    jump();
})