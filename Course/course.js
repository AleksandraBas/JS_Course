
function onClickCat(){
    //document.getElementById("cat").innerHTML = "MEOW";
    let animal = document.getElementById("cat");
    document.getElementById("catSound").play();
    clicking(animal, "CAT", "MEOW");
}
function onClickDog(){
    //document.getElementById("dog").innerHTML = "WOOF";
    //document.getElementById("dog").classList.add('playing')
    let animal = document.getElementById("dog");
    document.getElementById("dogSound").play();
    clicking(animal, "DOG", "WOOF");
}
function onClickCow(){
    //document.getElementById("cow").innerHTML = "MOO";
    //document.getElementById("cow").classList.add('playing')
    let animal = document.getElementById("cow");
    document.getElementById("cowSound").play();
    clicking(animal, "COW", "MOO");
}
function onClickPig(){
    //document.getElementById("pig").innerHTML = "OINK";
    //document.getElementById("pig").classList.add('playing')
    let animal = document.getElementById("pig");
    document.getElementById("pigSound").play();
    clicking(animal, "PIG", "OINK");
}

function clicking(e, ani, aniSou){
    e.classList.add('playing');
    e.innerHTML= aniSou;
    setTimeout(function(){
        document.querySelector('.playing').classList.remove('playing');
        e.innerHTML = ani;
    }, 1000);
}

document.getElementById("base").addEventListener("change", watchColor, false);

function watchColor(event){
    let col = document.getElementById("base");
    col.setAttribute("value", `${event.target.value}`)
    document.getElementById("photo").style.backgroundColor = `${event.target.value}`;
}

const canvas = document.querySelector(".draw");
const ctx = canvas.getContext('2d');
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 5;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let a = 0;
let direction=true;

function draw(e){
    if(!isDrawing) return;
    var bounds = canvas.getBoundingClientRect();
    // get the mouse coordinates, subtract the canvas top left and any scrolling
    e.offsetX = e.pageX - bounds.left - scrollX;
    e.offsetY = e.pageY - bounds.top - scrollY;
    e.offsetX /= bounds.width; 
    e.offsetY /= bounds.height; 
    e.offsetX *= canvas.width;
    e.offsetY *= canvas.height;
    ctx.strokeStyle = `hsl(${a}, 100%, 50%)`
    ctx.beginPath();
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY]=[e.offsetX, e.offsetY];
    a++;
    if (a >= 360){
        a=0
    }
    if(ctx.lineWidth >=25 || ctx.lineWidth <=3){
        direction = !direction;
    }
    if(direction){
        ctx.lineWidth ++;
    } else{
        ctx.lineWidth --;
    }
    
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY]=[e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)

const secondHand = document.querySelector("#sec");
const minuteHand = document.querySelector("#min");
const hourHand = document.querySelector("#hour");

function setDate(){
    const now = new Date();
    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();
    const secondsDegrees = ((second/60) * 360) + 90;
    const minutesDegrees = ((minute/60) * 360) + 90;
    const hoursDegrees =  ((hour/12) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);

function startGame(){
    let startGame = document.querySelector("#startGameKey");
    startGame.style.visibility=`hidden`;
    let start = document.querySelector(".keys");
    start.style.visibility=`visible`;
}