const correctPasscode = "123456";

let input = "";

const dots = document.querySelectorAll(".dot");
const buttons = document.querySelectorAll(".numbers button");
const card = document.querySelector(".card");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.textContent;

        if (button.classList.contains("delete")) {

            input = input.slice(0, -1);
            updateDots();
            return;

        }

        if (button.classList.contains("enter")) {

            checkPassword();
            return;

        }

        if (input.length < 6) {

            input += value;
            updateDots();

            if (input.length === 6) {

                setTimeout(checkPassword,300);

            }

        }

    });

});

function updateDots(){

    dots.forEach((dot,index)=>{

        if(index < input.length){

            dot.classList.add("active");

        }else{

            dot.classList.remove("active");

        }

    });

}

function checkPassword(){

    if(input === correctPasscode){

        card.style.transform="scale(1.05)";
        card.style.transition=".5s";

        setTimeout(()=>{

            window.location.href="memory.html";

        },700);

    }else{

        card.classList.add("shake");

        setTimeout(()=>{

            card.classList.remove("shake");

            input="";
            updateDots();

        },600);

    }

}
