// ================= Elements =================

const jar = document.getElementById("jar");
const lid = document.getElementById("lid");
const letter = document.getElementById("letter");
const message = document.getElementById("message");
const restart = document.getElementById("restart");

// الرسالة
const text = `I hope we stay best friends forever.

No matter where life takes us,
I'll always be thankful
for every memory we made together.

You mean more than
you'll ever know. `;

message.textContent = "";

// ================= Open Jar =================

jar.addEventListener("click", () => {

    // منع الضغط أكثر من مرة
    jar.style.pointerEvents = "none";

    // فتح الغطا
    lid.style.transform = "translateY(-70px) rotate(-25deg)";
    lid.style.opacity = "0";

    // الورقة تطلع
    const paper = document.querySelector(".paper-inside");

    paper.animate([
        {
            transform: "translateY(0) scale(1)"
        },
        {
            transform: "translateY(-170px) scale(1.2)"
        }
    ],{
        duration:1200,
        fill:"forwards"
    });

    // إظهار الرسالة
    setTimeout(()=>{

        letter.classList.add("show");

        typeWriter();

    },1200);

});

// ================= Typing Effect =================

let i = 0;

function typeWriter(){

    if(i < text.length){

        message.textContent += text.charAt(i);

        i++;

        setTimeout(typeWriter,40);

    }

}
const playBtn = document.getElementById("playMusic");
const finalSong = document.getElementById("finalSong");

playBtn.addEventListener("click", () => {

    if(finalSong.paused){

        finalSong.play();

        playBtn.innerHTML = "⏸ Pause Music";
        playBtn.classList.add("playing");

    }else{

        finalSong.pause();

        playBtn.innerHTML = "▶ Play Our Song";
        playBtn.classList.remove("playing");

    }

});


// ================= Restart =================

restart.addEventListener("click",()=>{

    window.location.href="index.html";

});
