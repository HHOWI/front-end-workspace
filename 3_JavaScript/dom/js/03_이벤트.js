// window.addEventListener('DOMContentLoaded', function(){
//     const h1 = document.querySelector('h1');
//     console.log(h1);
// });

const h1 = document.querySelector('h1');

// const img1 = document.querySelector('.container img:nth-child(1)');
// const img2 = document.querySelector('.container img:nth-child(2)');
// const img3 = document.querySelector('.container img:nth-child(3)');
// const img4 = document.querySelector('.container img:nth-child(4)');
// const img5 = document.querySelector('.container img:nth-child(5)');

// const imgList = document.querySelectorAll('.container img');

const container = document.querySelector('.container');
 
h1.addEventListener('click', function(){
    h1.style.backgroundColor = "skyblue";
    h1.innerText = "으아아아악";
});

function removeHandler(event) { // 이벤트 객체
    console.log(event.currentTarget);
    if(event.target!==container){
        event.target.style.display = 'none';
    }  
    
}

container.addEventListener('click', removeHandler);

// for(let i=0; i<imgList.length; i++){
//     imgList[i].addEventListener('click', removeHandler);
// }
