const expandBtn = document.querySelectorAll(".expand");
const content = document.querySelectorAll(".content");

let clicked = false;
for(let i = 0, j = 0; i < expandBtn.length, j < content.length; i++, j++) {
    expandBtn[i].addEventListener("click", function() {
        clicked = !clicked;
        if(clicked == true) {
            expandBtn[i].innerHTML = "Close";
            content[j].style.display = "block";
        }
        else if(clicked == false) {
            expandBtn[i].innerHTML = "Read";
            content[j].style.display = "none";
        }
    })
}