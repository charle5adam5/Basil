// Gallery selectors
const gallery = document.querySelector('.gallery-box');
const close = document.querySelector('.close');
const contact = document.querySelector('.contact-wrap');


// info selectors
const info = document.querySelectorAll('.info');
const galItem = document.querySelectorAll('.gal-item');
const galSec = document.querySelectorAll('.gal-sec');
const partial = document.querySelectorAll('.partial');

// gallery image selector
const gridItem = document.querySelectorAll('.grid-itm');
 
let header = document.querySelector('.header');
let bckgrndImg = new Image();
bckgrndImg.onload = () => {
    header.style.visibility = 'visible';
    header.classList.add('fadeIn');
}
bckgrndImg.src = './images/mainsea.jpg';

// toggling view mode for info
info.forEach(item => {
    item.addEventListener('click', () => {
        partial.forEach(img => {
            img.classList.toggle('lrg-partial');
        })
            item.classList.toggle('view-info');
            item.scrollTo({ top: 0 });
    })
})


// open items
galItem.forEach((item, index) => {
    item.addEventListener('click', () => {
        this.index = index;
        close.classList.add('styledClose');
        gallery.classList.add('galSlide');
        gallery.classList.remove('slideBack');
        contact.classList.add('contact-moved');
        // open sections
            galSec.forEach((section, index) => {
                    if(this.index == index) {
                        section.classList.add('show');
                }
        })
    })
})

// close sections
close.addEventListener('click', () => {
 gallery.scrollIntoView({ behavior: 'smooth' });
 close.classList.remove('styledClose');
 gallery.classList.remove('galSlide');
 gallery.classList.add('slideBack');
 contact.classList.remove('contact-moved');
 galSec.forEach(section => {
     section.classList.remove('show');
    })
})

// expand images
gridItem.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('lrg-img');
    })
})