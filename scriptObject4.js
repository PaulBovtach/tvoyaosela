const objectWrapper = document.querySelector('.doc__wrapper');

const doc1 = document.querySelector('.doc_1');
const doc2 = document.querySelector('.doc_2');
const photo1 = document.querySelector('.object__img');
const href1 = document.querySelector('.h1__href');

const mediaQuery = window.matchMedia('(max-width: 768px)')
if (mediaQuery.matches) {
    document.querySelector('.contacts__link').addEventListener('click',function(){
        document.location.href = "mailto:shevchenka5osbb@gmail.com"
    })
} else {
    document.querySelector('.contacts__link').addEventListener('click',function(){
        document.location.href = "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJZWxTKGTtTKNWxWGlnmGQQrMwtFnchwPqHsGmQxqZjsCcLhHcNzlXMmPrXWNhhgnjFcXHL"
    })
}






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
    document.location.href = "details4_1.html"
})

doc2.addEventListener('click', function goToPage(){
    document.location.href = "details4_2.html"
})

const logo = document.querySelector('.logo');

logo.addEventListener('click', function goToMain(){
    document.location.href = "https://paulbovtach.github.io/tvoyaosela/"
})


