
// ==========================
// ГАЛЕРЕЯ
// ==========================


function openImg(src){

    const lightbox =
    document.getElementById("lightbox");

    const img =
    document.getElementById("lightboxImg");


    img.src = src;

    lightbox.style.display = "flex";

}



function closeImg(){

    document
    .getElementById("lightbox")
    .style.display = "none";

}








// ==========================
// МУЗЫКА
// ==========================


const music =
document.getElementById(
    "birthdayMusic"
);


const musicBtn =
document.getElementById(
    "musicBtn"
);



musicBtn.addEventListener(
"click",

()=>{


if(music.paused){


    music.play();


    musicBtn.innerHTML =
    "⏸ Пауза";


}

else{


    music.pause();


    musicBtn.innerHTML =
    "🎵 Включить музыку";


}



});








// ==========================
// ЗАДУВАНИЕ СВЕЧЕЙ
// ==========================



function blowCandles(){


const fires =
document.querySelectorAll(
".fire"
);



fires.forEach(

fire=>{


fire.style.display =
"none";


}

);




const message =
document.getElementById(
"wishMessage"
);



message.style.display =
"block";



launchEffect(
[
"✨",
"💜",
"🎉"
],
80
);



}








// ==========================
// ВОЛШЕБНАЯ КНОПКА
// ==========================



function magicWish(){



const message =
document.getElementById(
"magicMessage"
);



message.innerHTML =

`
✨ Волшебство произошло! ✨
<br><br>
Пусть все добрые желания
обязательно исполнятся 💜
<br><br>
Счастья, здоровья и улыбок
каждый день 🌸
`;



launchEffect(

[
"💜",
"✨"

],

50

);



}

// ==========================
// ПАДАЮЩИЕ ПРАЗДНИЧНЫЕ ЭФФЕКТЫ
// ==========================


function launchEffect(symbols, amount){



for(

let i = 0;

i < amount;

i++

){



let item =
document.createElement("div");



item.className =
"fall-item";



item.innerHTML =

symbols[

Math.floor(

Math.random()

*

symbols.length

)

];





item.style.left =

Math.random()

*

100

+

"vw";





item.style.fontSize =

(

20 +

Math.random()*25

)

+

"px";





item.style.animationDuration =

(

3 +

Math.random()*4

)

+

"s";





document.body.appendChild(item);





setTimeout(()=>{


item.remove();


},

7000);



}



}








// ==========================
// СОЗДАНИЕ ЖИВОТНЫХ И СЕРДЕЦ
// ==========================



function createBirthdayItem(){



const items = [

"💜",

"🐱",

"🐩"

];



let item =
document.createElement("div");



item.className =
"fall-item";



item.innerHTML =

items[

Math.floor(

Math.random()

*

items.length

)

];




item.style.left =

Math.random()

*

100

+

"vw";



item.style.fontSize =

(

22 +

Math.random()*25

)

+

"px";



item.style.animationDuration =

(

5 +

Math.random()*5

)

+

"s";




document.body.appendChild(item);



setTimeout(()=>{


item.remove();


},

10000);



}







// каждые несколько секунд падает
// маленький праздничный элемент


setInterval(

()=>{


createBirthdayItem();


},

1800

);









// ==========================
// САЛЮТ
// ==========================


function fireworks(){



launchEffect(

[

"🎉",

"🎊",

"✨",

"💜"

],

120

);



}




// салют при загрузке


window.addEventListener(

"load",

()=>{


setTimeout(()=>{


fireworks();


},

1200);


}

);




// периодический салют


setInterval(

()=>{


fireworks();


},

30000

);








// ==========================
// ПЛАВНОЕ ПОЯВЛЕНИЕ БЛОКОВ
// ==========================



const observer =

new IntersectionObserver(

entries=>{


entries.forEach(

entry=>{


if(entry.isIntersecting){


entry.target.classList.add(
"show"
);


}


}

);



},

{

threshold:.15

}

);





document
.querySelectorAll(
".hidden"
)

.forEach(

element=>{


observer.observe(element);


}

);

// ==========================
// ЧАСТИЦЫ ФОНА
// ==========================


const canvas =

document.getElementById(
"particles"
);



const ctx =

canvas.getContext(
"2d"
);





function resizeCanvas(){


canvas.width =
window.innerWidth;


canvas.height =
window.innerHeight;


}



resizeCanvas();



window.addEventListener(

"resize",

resizeCanvas

);






let particles = [];





function createParticles(){



particles = [];



let count =

window.innerWidth < 600

?

50

:

120;





for(

let i = 0;

i < count;

i++

){



particles.push({


x:
Math.random()

*

canvas.width,


y:
Math.random()

*

canvas.height,



size:

Math.random()*3+1,



speedX:

(Math.random()-.5)*.4,



speedY:

(Math.random()-.5)*.4



});



}



}





createParticles();








function animateParticles(){



ctx.clearRect(

0,

0,

canvas.width,

canvas.height

);




particles.forEach(

p=>{


ctx.beginPath();



ctx.arc(

p.x,

p.y,

p.size,

0,

Math.PI*2

);



ctx.fillStyle =

"rgba(192,132,252,.8)";



ctx.fill();



p.x += p.speedX;

p.y += p.speedY;




if(

p.x < 0 ||

p.x > canvas.width

)

p.speedX *= -1;




if(

p.y < 0 ||

p.y > canvas.height

)

p.speedY *= -1;



}

);



requestAnimationFrame(

animateParticles

);



}



animateParticles();










// ==========================
// ПАРАЛЛАКС (ТОЛЬКО ПК)
// ==========================



if(window.innerWidth > 900){



document.addEventListener(

"mousemove",

(e)=>{



const x =

(

e.clientX /

window.innerWidth

-

0.5

);



const y =

(

e.clientY /

window.innerHeight

-

0.5

);




document

.querySelectorAll(

".card"

)

.forEach(

card=>{



card.style.transform =

`

perspective(900px)

rotateY(${x*4}deg)

rotateX(${y*-4}deg)

`;



}

);



}

);



}










// ==========================
// ДОБАВЛЯЕМ CSS ДЛЯ ПАДЕНИЯ
// ==========================



const style =

document.createElement(
"style"
);



style.innerHTML = `


.fall-item{


position:fixed;


top:-50px;


z-index:9999;


pointer-events:none;



animation:

fallDown linear forwards;


}





@keyframes fallDown{


0%{


transform:

translateY(0)

rotate(0deg);


opacity:1;


}



100%{


transform:

translateY(110vh)

rotate(360deg);


opacity:0;


}



}



`;



document.head.appendChild(style);










// ==========================
// ЗАЩИТА ОТ ЛИШНИХ ЛАГОВ
// ==========================



document.addEventListener(

"visibilitychange",

()=>{


if(document.hidden){


particles = [];


}


else{


createParticles();


}



}

);
