const circle = document.querySelector(".circle");
const main = document.querySelector('.nav1');
const objects = document.querySelector('.nav2');
const contacts = document.querySelector('.nav3');

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
    window.scrollTo(0, 150)
});

objects.addEventListener('click', function scrollTo(){
    window.scrollTo(0, 3043)
});

contacts.addEventListener('click', function scrollTo(){
    window.scrollTo(0, 4721)
});






