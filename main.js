
const circle = document.querySelector(".circle");
const main = document.querySelector('.nav1');
const objects = document.querySelector('.nav2');
const team = document.querySelector('.nav3');
const contacts = document.querySelector('.nav4');
const logo = document.querySelector('.logo')
const header = document.querySelector('.header');
const mainWrapper = document.querySelector('.main')







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

main.addEventListener('click', function scrollTo(){ 
    window.scrollTo(0, 0)
});

objects.addEventListener('click', function scrollTo(){
    window.scrollTo(0, 3175)
});

team.addEventListener('click', function scrollTo(){
    window.scrollTo(0, 4521)
});
contacts.addEventListener('click', function scrollTo(){
    window.scrollTo(0, 6152.5)
})

const worker1 = document.querySelector('.worker1');
const worker2 = document.querySelector('.worker2');

worker1.addEventListener('mouseover',  function worker1zoom(){
    worker1.classList.add('zoom')
});

worker1.addEventListener('mouseout',  function worker1zoom(){
    worker1.classList.remove('zoom')
});

worker2.addEventListener('mouseover',  function worker1zoom(){
    worker2.classList.add('zoom')
});

worker2.addEventListener('mouseout',  function worker1zoom(){
    worker2.classList.remove('zoom')
});






