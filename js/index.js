
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
let headerr = document.querySelector('.navigation');
let logo1 = document.querySelector('.logo img'); // Target the img element within .logo
let logo2 = document.querySelector('.logo2 img'); // Target the img element within .logo2
let logoImages = ['images/logo.png', 'images/logo2.png']; // Array of logo images
let currentLogoIndex = 0; // Index of the current logo image


// Initial setup to hide one of the logos
logo1.style.opacity = 1;
logo2.style.opacity = 0;

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  });

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navigation .navbar a');

window.addEventListener('scroll', () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
  
    sections.forEach(section => {
      let top = window.scrollY;
      let height = section.offsetHeight;
      let offset = section.offsetTop - 150;
      let id = section.getAttribute('id');
  
      if (top >= offset && top < offset + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
        });
        document.querySelector(`.navigation .navbar a[href="#${id}"]`).classList.add('active');
      }
    });

  // Change logo image and header background color
  if (window.scrollY > 700) {
    headerr.style.backgroundColor = '#fff';
    //header.style.margin = '0px';
    logo1.style.opacity = 0;
     logo2.style.opacity = 1;
  } else {
    headerr.style.backgroundColor = 'transparent';
     logo1.style.opacity = 1;
    logo2.style.opacity = 0;
    // header.style.marginTop = '20px';
  }
});

// Change the logo image when clicked
logo1.addEventListener('click', () => {
  currentLogoIndex = (currentLogoIndex + 1) % logoImages.length;
  logo1.src = logoImages[currentLogoIndex];
});




let layer1 = document.getElementById('layer1');
let layer11 = document.getElementById('layer1.1');
let layer6 = document.getElementById('layer6');
let layer7 = document.getElementById('layer7');
let layer8 = document.getElementById('layer8');
let layer2 = document.getElementById('layer2');
let layer3 = document.getElementById('layer3'); 
let layer4 = document.getElementById('layer4');
let layer5 = document.getElementById('layer5');

window.addEventListener('scroll', function (){
    let value = window.scrollY;

    
    layer1.style.top = value * 0.5 + 'px';
    layer7.style.top = value * 0.8 + 'px';
    layer8.style.top = value * 0.8 + 'px';
    layer2.style.top = value * 0.6 + 'px';
    layer3.style.top = value * 0.7 + 'px';
    layer4.style.top = value * 0.8 + 'px';
    layer5.style.top = value * 0.9 + 'px';
   
})