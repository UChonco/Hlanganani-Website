function openLogin(){
    
    document.getElementById("openlogin").style.display = "flex"
    document.getElementById("opensignup").style.display = "none"
}


function closeLogin(){
    document.getElementById("openlogin").style.display = "none"
}


function opensignup(){
    
    document.getElementById("opensignup").style.display = "flex"
    document.getElementById("openlogin").style.display = "none"
}

function closesignup(){
    document.getElementById("opensignup").style.display = "none"
}


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}