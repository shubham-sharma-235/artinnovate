let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const progressBar = document.querySelector('.progress');
let slideInterval;

function showSlide(index) {
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  const newTransformValue = -currentSlide * 100;
  document.querySelector('.slides').style.transform = `translateX(${newTransformValue}%)`;

  // Reset progress bar
  resetProgressBar();
}

// Function to animate the progress bar
function resetProgressBar() {
  progressBar.style.transition = 'none';
  progressBar.style.width = '0';
  
  setTimeout(() => {
    progressBar.style.transition = 'width 5s linear'; // Adjusted to 5 seconds
    progressBar.style.width = '100%';
  }, 50);
}

// Automatic slide change every 5 seconds
function startAutoSlide() {
  slideInterval = setInterval(() => {
    showSlide(currentSlide + 1);
  }, 5000); // Changed from 3000 to 5000 milliseconds (5 seconds)
}

// Manual slide navigation
function moveSlide(direction) {
  clearInterval(slideInterval); // Stop auto slide on manual interaction
  showSlide(currentSlide + direction);
  startAutoSlide(); // Restart auto slide after manual change
}

// Initialize progress bar and start slideshow
showSlide(currentSlide);
startAutoSlide();


// ------------------------------------------

var divs = ["Menu1", "Menu2", "Menu3", "Menu4"];
var visibleDivId = null;
function toggleVisibility(divId) {
  if(visibleDivId === divId) {
    //visibleDivId = null;
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
  var i, divId, div;
  for(i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if(visibleDivId === divId) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}

// ----------------------------------------------

document.addEventListener('DOMContentLoaded',() => {
const accordions = document.querySelectorAll('.accordions__item');

accordions.forEach(el => {
    el.addEventListener('click', (e) =>{
        const self = e.currentTarget;
        const control = self.querySelector('.accordions__control');
        const content = self.querySelector('.accordions__content');

        self.classList.toggle('open');

        if(self.classList.contains('open')){
            control.setAttribute('aria-expanded', true);
            content.setAttribute('aria-hidden', false);
            content.style.maxHeight = content.scrollHeight + 'px';
        }else{
            control.setAttribute('aria-expanded', false);
            content.setAttribute('aria-hidden', true);
            content.style.maxHeight = null;
        }
    });
    });
})

