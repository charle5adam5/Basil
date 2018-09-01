// Gallery selectors
const gallery = document.querySelector('.gallery-box');
const close = document.querySelector('.close');
const contact = document.querySelector('.contact-wrap');


// info selectors
const info = document.querySelectorAll('.info');
const read = document.querySelectorAll('.read');
const galItem = document.querySelectorAll('.gal-item');
const galSec = document.querySelectorAll('.gal-sec');
const partial = document.querySelectorAll('.partial');

// gallery image selector
const gridSec = document.querySelectorAll('.grid-sec');
const gridItm = document.querySelectorAll('.grid-itm');
const viewBtn = document.querySelectorAll('.view-btn');
 
let header = document.querySelector('.header');
let bckgrndImg = new Image();
bckgrndImg.addEventListener('load', function() {
    header.style.visibility = 'visible';
    header.className = 'fadeIn';
})
bckgrndImg.src = './images/mainsea.jpg';

// toggling view mode for info
for (let i = 0, j = 0; i < info.length, j < read.length; i ++, j++) {
    read[j].addEventListener('click', function() {
        info[i].scrollTo({ top: 0 });
                if(i == j && info[i].className !== 'view-info') {
                    this.textContent = 'close';
                    info[i].setAttribute("class", "view-info");
                } else {
                    this.textContent = 'read';
                    info[i].setAttribute("class", "info");
                }
                for(let i = 0; i < partial.length; i++) {
                    if(partial[i].className !== 'lrg-partial') {
                        partial[i].setAttribute("class", "lrg-partial");
                    } else {
                        partial[i].setAttribute("class", "partial");
                    }
                }
            })       
}



// open items
for (let i = 0; i < galItem.length; i++) {
    galItem[i].addEventListener('click', () => {
        close.setAttribute("class", "styledClose");
        gallery.setAttribute("class", "galSlide");
        contact.setAttribute("class", "contact-moved");
        // open sections
        for(let j = 0; j < galSec.length; j++) {
            if(i == j) {
                galSec[i].setAttribute("class", "show");
            }
        }
                        
    })
}


// close sections
close.addEventListener('click', () => {
 gallery.scrollIntoView({ behavior: 'smooth' });
 close.setAttribute("class", "close");
 gallery.setAttribute("class", "slideBack");
 contact.setAttribute("class", "");
 for(let i = 0; i < galSec.length; i++) {
     galSec[i].setAttribute("class", "gal-sec");
 }
 for(let i = 0, j = 0, k = 0; 
    i < viewBtn.length, j < gridSec.length, k < gridItm.length;
    i++, j++, k++) {
        viewBtn[i].setAttribute("class", "");
        gridSec[j].setAttribute("class", "grid-sec");
        gridItm[k].setAttribute("class", "grid-itm");
        showGrid();
    }
})


// expand images
const grid = document.querySelectorAll('.gal-grid');
function hideGrid() {
    for(let i = 0; i < grid.length; i++) {
            grid[i].style.visibility = 'hidden';
    }
}
function showGrid() {
    for(let i = 0; i < grid.length; i++) {
            grid[i].style.visibility = 'visible';
    }
}

for(let i = 0, j = 0, k = 0; 
    i < viewBtn.length, j < gridSec.length, k < gridItm.length;
    i++, j++, k++) {
    viewBtn[i].addEventListener('click', function() {
            if(i == j && gridSec[j].className != 'lrg-sec') {
                viewBtn[i].setAttribute("class", "view-style");
                gridSec[j].setAttribute("class", "lrg-sec");
                gridItm[k].setAttribute("class", "lrg-img");
                hideGrid();
                this.textContent = "close";
                gridSec[j].scrollIntoView({ behavior: 'smooth' });
            } else {
                viewBtn[i].setAttribute("class", "");
                gridSec[j].setAttribute("class", "grid-sec");
                gridItm[k].setAttribute("class", "grid-itm");
                showGrid();
                this.textContent = "view";
            }
    })
}

