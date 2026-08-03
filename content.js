const category = document.querySelector(".category");
const message = document.querySelector(".message");
const button = document.getElementById("randomBtn");
const content = document.getElementById("content");

let lastIndex = -1;
let clicks = 0;

const buttonTexts = [
    "again.",
    "one more.",
    "show me something.",
    "keep going.",
    "another one.",
    "surprise me.",
    "next.",
    "still here."
];

function randomButton(){

    button.textContent =
    buttonTexts[Math.floor(Math.random()*buttonTexts.length)];

}

function showCard(){

    clicks++;

    let index;

    do{

        index=Math.floor(Math.random()*cards.length);

    }while(index===lastIndex);

    lastIndex=index;

    const card=cards[index];

    category.innerHTML=
    `${card.icon} ${card.title}`;

    message.innerHTML=
    card.text.replace(/\n/g,"<br>");

    content.classList.remove("fade");

    void content.offsetWidth;

    content.classList.add("fade");

    randomButton();

    if(clicks===50){

        category.innerHTML="⭐ Legendary";

        message.innerHTML=`
        You've been here
        for quite a while.

        <br><br>

        I hope you found
        something worth keeping.

        <br><br>

        Thanks for staying.
        `;

    }

}

button.addEventListener("click",showCard);
