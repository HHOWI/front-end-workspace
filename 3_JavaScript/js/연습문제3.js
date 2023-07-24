// console.log(Math.floor(Math.random() * 3) + 1);

const click = document.querySelector('.click');
const span = document.querySelector('.click span');
const restart = document.querySelector('.restart');
const imgList = document.querySelectorAll('.main-image img');
const result = document.querySelector('.main-result');

let count = 0;

function clickHandler() {
    span.innerHTML = ++count;
    const random = [
        Math.floor(Math.random()*3)+1,
        Math.floor(Math.random()*3)+1,
        Math.floor(Math.random()*3)+1
    ];
    for (let i = 0; i < imgList.length; i++) {
        imgList[i].setAttribute("src", `../resources/spy${random[i]}.jpg`); 
    }
    if(random[0] === random[1] && random[0] === random[2]) {
        result.innerHTML = "승리!";
        click.setAttribute("disabled", "disabled");
    }
    
}

function restartHandler() {
    for(let i=0; i<imgList.length; i++) {
        imgList[i].setAttribute("src", "../resources/spy1.jpg");
    }

    count = 0;
    span.innerHTML = "";
    result.innerHTML = "";
    click.removeAttribute("disabled");
}

click.addEventListener('click', clickHandler)
restart.addEventListener('click', restartHandler)
