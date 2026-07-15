// ================= MUSIC =================

const music = document.getElementById("music");

window.addEventListener("load", () => {

    music.play().catch(() => {

        document.body.addEventListener("click", () => {

            music.play();

        }, { once: true });

    });

});

// ================= IMAGE PREVIEW =================

const photos = document.querySelectorAll(".photo");
const overlay = document.getElementById("overlay");
const bigImage = document.getElementById("bigImage");

photos.forEach(photo => {

    photo.addEventListener("click", () => {

        bigImage.src = photo.querySelector("img").src;
        overlay.classList.add("active");

    });

});

overlay.addEventListener("click", () => {

    overlay.classList.remove("active");

});

// ================= SCROLL TO BOOK =================

const nextPage = document.getElementById("nextPage");

nextPage.addEventListener("click", () => {

    document.querySelector(".book-section").scrollIntoView({

        behavior: "smooth"

    });

});

// ================= FLIP BOOK =================

const papers = document.querySelectorAll(".paper");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let current = 0;

function updateButtons(){

    prevBtn.disabled = current === 0;

    nextBtn.disabled = current === papers.length;

}

updateButtons();

nextBtn.addEventListener("click",()=>{

    if(current < papers.length){

        papers[current].classList.add("flipped");

        current++;

        updateButtons();

        // بعد آخر صفحة
        if(current === papers.length){

            setTimeout(()=>{

                document.body.classList.add("fade-out");

            },700);

            setTimeout(()=>{

                window.location.href="jar.html";

            },1500);

        }

    }

});

prevBtn.addEventListener("click",()=>{

    if(current > 0){

        current--;

        papers[current].classList.remove("flipped");

        updateButtons();

    }

});

// ================= KEYBOARD SUPPORT =================

document.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowRight"){

        nextBtn.click();

    }

    if(e.key==="ArrowLeft"){

        prevBtn.click();

    }

});

// ================= CLOSE IMAGE WITH ESC =================

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        overlay.classList.remove("active");

    }

});
