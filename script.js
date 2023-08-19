
let btn = document.querySelector('button')
btn.addEventListener('click', function() {
   playGame()
})

function playGame(){
    let main = document.querySelector('#main')
    main.innerHTML = `<div id="panel">
    <div id="panel-top">
        <div class="top">
            <h2>Hit</h2>
            <div class="box">5
            </div>
        </div>
        <div class="top">
            <h2>Timer</h2>
            <div class="box">60
            </div>
        </div>
        <div class="top">
            <h2>Score</h2>
            <div class="box">0
            </div>
        </div>
    </div>
    <div id="panel-bottom">

    </div>
</div>`
function makeBubble() {
    var prev = "";
    for(let i = 1; i<=108; i++) {
        prev += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
    }
    // console.log(prev);

    let pbtm = document.querySelector('#panel-bottom')
    pbtm.innerHTML = prev;
}
makeBubble()

let timer = 60
let timerBox = document.querySelectorAll('.box')[1];
function runTimer() {
    var timing = setInterval(function(){
        if(timer > 0) {
            timer--
            timerBox.textContent = timer;
        } else{
            clearInterval(timing);
            let pbtm = document.querySelector('#panel-bottom')
            pbtm.innerHTML = `<h1>Score ${score}</h1>`
            pbtm.appendChild(document.createElement('br'))
            let butt = document.createElement('button')
            butt.appendChild(document.createTextNode("START AGAIN"))
            butt.style.backgroundColor = "#F3CA20";
            butt.style.color = "#322E2F";
            butt.style.height = "50px";
            butt.style.cursor = "pointer";
            pbtm.appendChild(butt)
            butt.addEventListener('click', playGame)
        }     
    }, 1000)
}
runTimer()

let hit = document.querySelectorAll('.box')[0];
function getNewHit() {
    randomNo = Math.floor(Math.random()*10)
    hit.textContent = randomNo;
}
getNewHit()

let score = 0;
let sc = document.querySelectorAll('.box')[2];
function increaseScore() {
    score += 10;
    sc.textContent = score;
}


let panelBottom = document.querySelector('#panel-bottom')
panelBottom
.addEventListener('click', function(event) {
    if(event.target.textContent === hit.textContent) {
        increaseScore()
        makeBubble()
        getNewHit()
    }
})
}



