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
bckgrndImg.addEventListener('load', function() {
    header.style.visibility = 'visible';
    header.className = 'fadeIn';
})
bckgrndImg.src = './images/mainsea.jpg';

// toggling view mode for info
for (let i = 0; i < info.length; i ++) {
    info[i].addEventListener('click', () => {
        info[i].scrollTo({ top: 0 });
            for(let j = 0; j < partial.length; j++) {
                if(partial[j].className === 'lrg-partial') {
                    partial[j].className = 'partial';
                } else {
                    partial[j].className = 'lrg-partial';
                }
            };
                if(info[i].className === 'view-info') {
                    info[i].className = 'info';
                } else {
                    info[i].className = 'view-info';
                }
            })       
}



// open items
for (let i = 0; i < galItem.length; i++) {
    galItem[i].addEventListener('click', () => {
        close.className = 'styledClose';
        gallery.className = gallery.className.replace(/slideBack/gi, '');
        gallery.className = 'galSlide';
        contact.className = 'contact-moved';
        // open sections
        for(let j = 0; j < galSec.length; j++) {
            if(i == j) {
                galSec[i].className = 'show';
            }
        }
                        
    })
}


// close sections
close.addEventListener('click', () => {
 gallery.scrollIntoView({ behavior: 'smooth' });
 close.className = close.className.replace(/styledClose/gi, '');
 close.className = 'close';
 gallery.className = gallery.className.replace(/galSlide/gi, 'slideBack');
 contact.className = contact.className.replace(/contact-moved/gi, '');
 for(let i = 0; i < galSec.length; i++) {
     galSec[i].className = galSec[i].className.replace(/show/gi, 'gal-sec');
 }
})

// expand images
for(let i = 0; i < gridItem.length; i++) {
    gridItem[i].addEventListener('click', function() {
        if(gridItem[i].className != 'lrg-img') {
            gridItem[i].className = 'lrg-img';
        } else {
            gridItem[i].className = 'grid-itm';
        }
    })
}

