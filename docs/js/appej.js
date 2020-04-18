const carouselSlide = document.querySelector('.GaleriaImagenes');
const carouselImage = document.querySelector('.slide');

const prevBtn = document.querySelector('#prevButton');
const nextBtn = document.getElementById('nextButton'); 

let counter=1;
const size = carouselImage.clientWidth;

carouselSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';

nextBtn.addEventListener('click', actuar);

function actuar(){
   carouselSlide.style.transition = "transform 0.4s ease-in-out";
   counter++; 
   console.log(counter);
   carouselSlide.style.transform ='translateX('+ (-size * counter) + 'px)';
   
};