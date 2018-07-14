// Gallery selectors
const gallery = document.querySelector('.gallery-box');
const close = document.querySelector('.close');
const sea = document.querySelector('.sea');
const land = document.querySelector('.land');
const other = document.querySelector('.other');

// info selectors
const info = document.querySelectorAll('.info');
const galItem = document.querySelectorAll('.gal-item');
const galSec = document.querySelectorAll('.gal-sec');
const partial = document.querySelectorAll('.partial');

// gallery image selector
const gridItem = document.querySelectorAll('.grid-itm');
const galBleh = document.querySelector('.gal-bleh');

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
        close.classList.add('show');
        close.classList.add('styledClose');
        gallery.classList.add('galSlide');
        gallery.classList.remove('slideBack');
        // open sections
            galSec.forEach((section, index) => {
                if(this.index == index) {
                    section.classList.add('show');
                }
            })
        });
    });

// close sections
close.addEventListener('click', () => {
 gallery.scrollIntoView({ behavior: 'smooth' });
 close.classList.remove('show');
 close.classList.remove('styledClose');
 gallery.classList.remove('galSlide');
 gallery.classList.add('slideBack');
 sea.classList.remove('show');
 land.classList.remove('show');
 other.classList.remove('show');
})

// expand images
gridItem.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('lrg-img');
    })
    
})