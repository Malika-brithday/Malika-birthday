
// =====================
// ГАЛЕРЕЯ
// =====================


function openImg(src){

    const box =
    document.getElementById(
        "lightbox"
    );

    const img =
    document.getElementById(
        "lightboxImg"
    );


    box.style.display="flex";

    img.src=src;

}



function closeImg(){

    document
    .getElementById(
        "lightbox"
    )
    .style.display="none";

}





// =====================
// МУЗЫКА
// =====================


const music =
document.getElementById(
    "birthdayMusic"
);


const musicBtn =
document.getElementById(
    "musicBtn"
);



if(musicBtn){


musicBtn.addEventListener(
"click",
()=>{


    if(music.paused){


        music.play();


        musicBtn.innerHTML=
        "⏸ Пауза";


    }

    else{


        music.pause();


        musicBtn.innerHTML=
        "🎵 Музыка";


    }


});


}









// =====================
// ЗАДУВАНИЕ СВЕЧЕЙ
// =====================


function blowCandles(){


    const fires =
    document.querySelectorAll(
        ".fire"
    );


    fires.forEach(
        fire=>{


            fire.style.display=
            "none";


        }
    );



    const message =
    document.getElementById(
        "wishMessage"
    );



    if(message){


        message.style.display=
        "block";


        message.style.animation=
        "fadeGift 1s";


    }



    createFall(
        40
    );

}





// =====================
// ВОЛШЕБНАЯ КНОПКА
// =====================


function magicWish(){


    const text =
    document.getElementById(
        "magicMessage"
    );



    if(text){


        text.style.display=
        "block";


        text.innerHTML=
        `
        💜 Пусть каждый день
        приносит счастье,
        здоровье,
        любовь и тысячи улыбок ✨
        `;


    }



    // только эффекты,
    // фон НЕ меняем


    createFall(
        60
    );


}





// =====================
// ПАДАЮЩИЕ ОБЪЕКТЫ
// =====================


const fallObjects=[


    "💜",

    "🐱",

    "🐩",

    "🎆"


];





function createFall(amount){


    for(
        let i=0;
        i<amount;
        i++
    ){


        let item =
        document.createElement(
            "div"
        );


        item.className=
        "fall-item";



        item.innerHTML=
        fallObjects[
            Math.floor(
                Math.random()
                *
                fallObjects.length
            )
        ];



        item.style.left =
        Math.random()*100+
        "vw";



        item.style.fontSize =
        (
            20+
            Math.random()*25
        )
        +"px";



        item.style.animation =
        `
        fall
        ${3+
        Math.random()*3}s
        linear
        forwards
        `;



        document.body.appendChild(
            item
        );



        setTimeout(
            ()=>{

                item.remove();

            },

            7000
        );


    }


}

// =====================
// ПОЯВЛЕНИЕ БЛОКОВ
// =====================


const observer =
new IntersectionObserver(

(entries)=>{


    entries.forEach(

        entry=>{


            if(
                entry.isIntersecting
            ){


                entry.target
                .classList
                .add(
                    "show"
                );


            }


        }

    );


},

{

    threshold:0.15

}

);





document
.querySelectorAll(
    ".hidden"
)
.forEach(

element=>{


    observer.observe(
        element
    );


});









// =====================
// ЧАСТИЦЫ ФОНА
// =====================


const canvas =
document.getElementById(
    "particles"
);


if(canvas){


const ctx =
canvas.getContext(
    "2d"
);



let particles=[];



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





// меньше частиц на телефоне


let count =
window.innerWidth < 600
?
40
:
90;





for(
let i=0;
i<count;
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
        (
            Math.random()
            -
            0.5
        )
        *
        0.4,


        speedY:
        (
            Math.random()
            -
            0.5
        )
        *
        0.4


    });


}








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
        "rgba(168,85,247,.7)";



        ctx.fill();




        p.x += p.speedX;

        p.y += p.speedY;




        if(
            p.x<0 ||
            p.x>canvas.width
        ){

            p.speedX*=-1;

        }




        if(
            p.y<0 ||
            p.y>canvas.height
        ){

            p.speedY*=-1;

        }



    });



    requestAnimationFrame(
        animateParticles
    );


}



animateParticles();


}









// =====================
// АВТО-САЛЮТ
// =====================


setInterval(

()=>{


    createFall(
        15
    );


},

20000

);









// =====================
// ПРИ ЗАГРУЗКЕ
// =====================


window.addEventListener(

"load",

()=>{


    setTimeout(

    ()=>{


        createFall(
            50
        );


    },

    1200

    );


});

// =====================
// АНИМАЦИЯ ТОРТА
// =====================


const cake =
document.querySelector(
    ".birthday-cake"
);



if(cake){


    cake.addEventListener(

    "click",

    ()=>{


        createFall(
            25
        );


    }


    );


}








// =====================
// МЯГКИЕ СЕРДЕЧКИ
// =====================


function createHeart(){



    const heart =
    document.createElement(
        "div"
    );



    heart.className =
    "fall-item";



    heart.innerHTML =
    "💜";



    heart.style.left =
    Math.random()*100
    +
    "vw";



    heart.style.fontSize =
    (
        15+
        Math.random()*15
    )
    +
    "px";



    heart.style.animation =
    `
    fall
    ${5+
    Math.random()*4}s
    linear
    forwards
    `;



    document.body.appendChild(
        heart
    );



    setTimeout(

    ()=>{


        heart.remove();


    },

    9000

    );


}






// только несколько сердец,
// не перегружает сайт


setInterval(

()=>{


    createHeart();


},

1800

);









// =====================
// ЗАПРЕТ СЛУЧАЙНОГО
// СКРОЛЛА КАРТОЧЕК
// =====================



document
.querySelectorAll(
    ".card"
)
.forEach(

card=>{


    card.style.willChange =
    "transform";


});









// =====================
// ПЛАВНАЯ НАВИГАЦИЯ
// (если будут якоря)
// =====================


document
.querySelectorAll(
    "a[href^='#']"
)
.forEach(

link=>{


    link.addEventListener(

    "click",

    function(e){


        const target =
        document.querySelector(
            this.getAttribute(
                "href"
            )
        );



        if(target){


            e.preventDefault();



            target.scrollIntoView({

                behavior:
                "smooth"


            });


        }


    }


    );


});









// =====================
// ФИНАЛЬНЫЙ ЭФФЕКТ
// =====================


const final =
document.querySelector(
"#final"
);



if(final){


const finalObserver =
new IntersectionObserver(

entries=>{


entries.forEach(

entry=>{


if(
entry.isIntersecting
){


    setTimeout(

    ()=>{


        createFall(
            80
        );


    },

    500

    );


}


}

);


},

{

threshold:.4

}

);



finalObserver.observe(
final
);


}








// =====================
// АДАПТАЦИЯ МОБИЛЬНЫХ
// =====================


if(
window.innerWidth < 600
){


    // уменьшаем частоту эффектов


    setInterval(()=>{


        createFall(
            5
        );


    },

    30000

    );


}