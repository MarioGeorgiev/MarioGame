const mario = document.getElementById('mario')
console.log(mario)
function jump(){
   
    mario.classList.add('jump')
}

document.addEventListener("keypress", (ev)=>{
    ev.preventDefault()
    jump();
})