const objectWrapper = document.querySelector('.doc__wrapper');

const doc1 = document.querySelector('.doc_1');
const doc2 = document.querySelector('.doc_2');


doc1.addEventListener('mouseover', function zoom(event){
    if(this == event.target){
        doc1.classList.add('zoom')
    } 
});
doc1.addEventListener('mouseout', function zoom(event){
    if(this == event.target){
        doc1.classList.remove('zoom')
    } 
});

doc2.addEventListener('mouseover', function zoom(event){
    if(this == event.target){
        doc2.classList.add('zoom')
    } 
});
doc2.addEventListener('mouseout', function zoom(event){
    if(this == event.target){
        doc2.classList.remove('zoom')
    } 
});


doc1.addEventListener('click', function goToPage(){
    document.location.href = "details2_1.html"
})

doc2.addEventListener('click', function goToPage(){
    document.location.href = "details2_2.html"
})

const logo = document.querySelector('.logo');

logo.addEventListener('click', function goToMain(){
    document.location.href = "https://paulbovtach.github.io/tvoyaosela/"
})