const blue = document.getElementsByClassName('blue')[0];
const yc = document.getElementsByClassName('yc')[0];
const farrow = document.getElementsByTagName('span')[0];
const barrow = document.getElementsByTagName('span')[1];
const forward = document.getElementsByClassName('forward')[0];

gsap.timeline().from('.blue fieldset',{
    duration:1,
    opacity:0,
    y:30

}).from(".logo div",{
    opacity:0,
    x:20,
    duration:1
}).from('.forward',{
    opacity:0,
    color:"white",
    x:-30
})



farrow.addEventListener("click", goToCont);
barrow.addEventListener("click",goToFront);

function goToCont(){
   blue.classList.toggle('hide');
   yc.classList.toggle('hide');
   farrow.classList.toggle('hide');
   barrow.classList.toggle('hide');
   forward.classList.toggle('side');
}

function goToFront(){
    blue.classList.toggle('hide')
    yc.classList.toggle('hide');
    farrow.classList.toggle('hide');
    barrow.classList.toggle('hide');
    forward.classList.toggle('side')
}

