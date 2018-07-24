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
    header.className = 'fadeIn';
}
bckgrndImg.src = './images/mainsea.jpg';

// toggling view mode for info
info.forEach(item => {
    item.addEventListener('click', () => {
        item.scrollTo({ top: 0 });
        partial.forEach(img => {
            if(img.className === 'lrg-partial') {
                img.className = 'partial';
            } else {
                img.className = 'lrg-partial';
            }
            // img.classList.toggle('lrg-partial');
       
        })
            if(item.className === 'view-info') {
                item.className = 'info';
            } else {
                item.className = 'view-info';
            }
            // item.classList.toggle('view-info');
            
    })
})


// // open items
// galItem.forEach((item, index) => {
//     item.addEventListener('click', () => {
//         this.index = index;
//         close.classList.add('styledClose');
//         gallery.classList.add('galSlide');
//         gallery.classList.remove('slideBack');
//         contact.classList.add('contact-moved');
//         // open sections
//             galSec.forEach((section, index) => {
//                     if(this.index == index) {
//                         section.classList.add('show');
//                 }
//         })
//     })
// })

// open items
galItem.forEach((item, index) => {
    item.addEventListener('click', () => {
        this.index = index;
        close.className = 'styledClose';
        gallery.className = gallery.className.replace(/slideBack/gi, '');
        gallery.className = 'galSlide';
        contact.className = 'contact-moved';
        // open sections
            galSec.forEach((section, index) => {
                    if(this.index == index) {
                        section.className = 'show';
                }
        })
    })
})

// close sections
close.addEventListener('click', () => {
 gallery.scrollIntoView({ behavior: 'smooth' });
 close.className = close.className.replace(/styledClose/gi, '');
 close.className = 'close';
 gallery.className = gallery.className.replace(/galSlide/gi, 'slideBack');
 contact.className = contact.className.replace(/contact-moved/gi, '');
 galSec.forEach(section => {
    section.className = section.className.replace(/show/gi, 'gal-sec');
    })
})

// expand images
gridItem.forEach(item => {
    item.addEventListener('click', () => {
        if(item.className != 'lrg-img') {
            item.className = 'lrg-img';
        } else {
            item.className = 'grid-itm';
        }
    })
})