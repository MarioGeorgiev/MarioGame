const mario = document.getElementById('mario')
console.log(mario)
function jump(){   
    if(!mario.classList.contains("jump")){
    mario.classList.add('jump')
    setTimeout(function(){
        mario.classList.remove('jump')
    },300)}
}

document.addEventListener("keypress", (ev)=>{
    ev.preventDefault()
    jump();
})