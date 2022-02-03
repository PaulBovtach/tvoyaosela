



const logo = document.querySelector('.logo')
const header = document.querySelector('.header');
const mainWrapper = document.querySelector('.main')
const circle = document.querySelector(".circle");
const main = document.querySelector('.nav1');
const help = document.querySelector('.nav2');
const objects = document.querySelector('.nav3');
const team = document.querySelector('.nav4');
const law = document.querySelector('.nav5');
const contacts = document.querySelector('.nav6');






logo.addEventListener('click', function Reload(){
    parent.location.reload(); return false;
})


window.addEventListener('scroll', function circleProg(){
    let scrollPos = window.scrollY;

    if(scrollPos > 100){
        circle.classList.add('active')
    } else {
        circle.classList.remove('active')
    }
});



circle.addEventListener('click', function toUp(){
    window.scrollTo(0, 0)
})



const docWrapper = document.querySelector('.doc__wrapper');
const doc = document.querySelector('.doc');



doc.addEventListener('mouseover', function zoom(event){
    if(this == event.target){
        doc.classList.add('zoom')
    }
});
doc.addEventListener('mouseout', function zoom(event){
    if(this == event.target){
        doc.classList.remove('zoom')
    }
});
doc.addEventListener('mouseover', function zoom(event){
    if(this == event.target){
        docWrapper.classList.add('zoom')
    }
});
doc.addEventListener('mouseout', function zoom(event){
    if(this == event.target){
        docWrapper.classList.remove('zoom')
    }
});

window.addEventListener('scroll', function test(){
    let x = window.scrollY;
    console.log(x)
})



main.addEventListener('click', function scrollTo(){ 
    window.scrollTo(0, 0)
});

help.addEventListener('click', function scrollTo(){
    window.scrollTo(0, 3197.5)
});

objects.addEventListener('click', function scrollTo(){
    window.scrollTo(0, 4362.5)
});
team.addEventListener('click', function scrollTo(){
    window.scrollTo(0, 5701.25)
});
law.addEventListener('click', function scrollTo(){
    window.scrollTo(0, 6826.25)
});
contacts.addEventListener('click', function scrollTo(){
    window.scrollTo(0, 8102.5)
});

const worker1 = document.querySelector('.worker1');
const worker2 = document.querySelector('.worker2');

worker1.addEventListener('mouseover',  function worker1zoom(){
    const worker1__h3 = document.querySelector('.worker1__h3');
    const worker1__p = document.querySelector('.worker1__p');

    worker1.classList.add('zoom');
    worker1__h3.classList.add('zoom');
    worker1__p.classList.add('zoom');
});

worker1.addEventListener('mouseout',  function worker1zoom(){
    const worker1__h3 = document.querySelector('.worker1__h3');
    const worker1__p = document.querySelector('.worker1__p');

    worker1.classList.remove('zoom');
    worker1__h3.classList.remove('zoom');
    worker1__p.classList.remove('zoom');
});

worker2.addEventListener('mouseover',  function worker1zoom(){
    const worker2__h3 = document.querySelector('.worker2__h3');
    const worker2__p = document.querySelector('.worker2__p');

    worker2.classList.add('zoom');
    worker2__h3.classList.add('zoom');
    worker2__p.classList.add('zoom');
});

worker2.addEventListener('mouseout',  function worker1zoom(){
    const worker2__h3 = document.querySelector('.worker2__h3');
    const worker2__p = document.querySelector('.worker2__p');

    worker2.classList.remove('zoom');
    worker2__h3.classList.remove('zoom');
    worker2__p.classList.remove('zoom');
});



const menuIcon = document.querySelector('.menu__img');

const menu = document.querySelector('.menu');
const menu1 = document.querySelector('.menu1');
const menu2 = document.querySelector('.menu2');
const menu3 = document.querySelector('.menu3');
const menu4 = document.querySelector('.menu4');
const menu5 = document.querySelector('.menu5');
const menu6 = document.querySelector('.menu6');


menuIcon.addEventListener('click', function openedMenu(){
    menuIcon.classList.toggle('open');

    menu.classList.toggle('open');

    menu1.classList.toggle('open');
    menu2.classList.toggle('open');
    menu3.classList.toggle('open');
    menu4.classList.toggle('open');
    menu5.classList.toggle('open');
    menu6.classList.toggle('open');

})


menu1.addEventListener('click', function scrollMenu(){
    window.scrollTo(0, 0);

    menuIcon.classList.remove('open');
    menu.classList.remove('open');

    menu1.classList.remove('open');
    menu2.classList.remove('open');
    menu3.classList.remove('open');
    menu4.classList.remove('open');
    menu5.classList.remove('open');
    menu6.classList.remove('open');

})
menu2.addEventListener('click', function scrollMenu(){
    window.scrollTo(0, 6587)

    menuIcon.classList.remove('open');
    menu.classList.remove('open');

    menu1.classList.remove('open');
    menu2.classList.remove('open');
    menu3.classList.remove('open');
    menu4.classList.remove('open');
    menu5.classList.remove('open');
    menu6.classList.remove('open');

})
menu3.addEventListener('click', function scrollMenu(){
    window.scrollTo(0, 7733)

    menuIcon.classList.remove('open');
    menu.classList.remove('open');

    menu1.classList.remove('open');
    menu2.classList.remove('open');
    menu3.classList.remove('open');
    menu4.classList.remove('open');
    menu5.classList.remove('open');
    menu6.classList.remove('open');

})
menu4.addEventListener('click', function scrollMenu(){
    window.scrollTo(0, 11225)

    menuIcon.classList.remove('open');
    menu.classList.remove('open');

    menu1.classList.remove('open');
    menu2.classList.remove('open');
    menu3.classList.remove('open');
    menu4.classList.remove('open');
    menu5.classList.remove('open');
    menu6.classList.remove('open');

})
menu5.addEventListener('click', function scrollMenu(){
    window.scrollTo(0, 13493)

    menuIcon.classList.remove('open');
    menu.classList.remove('open');

    menu1.classList.remove('open');
    menu2.classList.remove('open');
    menu3.classList.remove('open');
    menu4.classList.remove('open');
    menu5.classList.remove('open');
    menu6.classList.remove('open');

})
menu6.addEventListener('click', function scrollMenu(){
    window.scrollTo(0, 14764)

    menuIcon.classList.remove('open');
    menu.classList.remove('open');

    menu1.classList.remove('open');
    menu2.classList.remove('open');
    menu3.classList.remove('open');
    menu4.classList.remove('open');
    menu5.classList.remove('open');
    menu6.classList.remove('open');

})










const link1 = document.querySelector('.href1');
const link2 = document.querySelector('.href2');
const link3 = document.querySelector('.href3');
const hrefIcon = document.querySelector('href__law');

link1.addEventListener('click', function goToLaw(){
    document.location.href = "https://zakon.rada.gov.ua/laws/show/2866-14#Text"
});
link2.addEventListener('click', function goToLaw(){
    document.location.href = "https://zakon.rada.gov.ua/laws/show/417-19#Text"
});
link3.addEventListener('click', function goToLaw(){
    document.location.href = "https://zakon.rada.gov.ua/laws/show/2866-14#Text"
});








