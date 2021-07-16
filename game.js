
const player = document.getElementById("player");
const score = document.querySelector("#score");
const gameOver = document.querySelector("#gameOver");
const gameContainer = document.querySelector(".game")



//start / gameover

let isStarted = false;
let isGameover = false;

//score
let interval = null;
let playerScore= 0;

let scoreCount = () => {
    playerScore++;
    score.innerHTML = `SCORE <span>${playerScore}</span>`;
}

//jump 
function jump() {

    if (player.classList != "jump") {
    
        player.classList.add("jump");

    setTimeout(function (){
        player.classList.remove("jump");
    }, 300);
}
}

document.addEventListener("keydown", function (event) {
    jump();
});


// function down






//START
document.addEventListener("keydown", started)


function started(start) {
    

    const generateCacas = () => {
           
        
            const obstacle = document.createElement('div');
            obstacle.classList.add('caca')
            obstacle.classList.add('cacaActive')
            obstacle.style.display ="block";
            gameContainer.appendChild(obstacle);
            obstacle.onanimationend = () => {
                obstacle.remove();
            }
   


                if (playerScore > 30) {
                    setTimeout(()=> {
                    const obstacle = document.createElement("div")
                    obstacle.classList.add('grosCaca')
                    obstacle.classList.add('grosCacaActive')
                    obstacle.style.display ="block";
                    gameContainer.appendChild(obstacle);
                    obstacle.onanimationend = () => {
                        obstacle.remove();
                    }
                }, 1000)
                }
            
                if (playerScore > 50) {
                    setTimeout(()=> {
                    const obstacle = document.createElement("div")
                    obstacle.classList.add('pipi')
                    obstacle.classList.add('pipiActive')
                    obstacle.style.display ="block";
                    gameContainer.appendChild(obstacle);
                    obstacle.onanimationend = () => {
                        obstacle.remove();
                    }
                }, 2000)
                }
            
            
           
                
            }
     
    

    if (start.code === "Space" && !isStarted) {
        // if the game is not started yet
        // call the interval for the scoreCount
        
        isStarted=true

        let cacasInterval = setInterval(generateCacas,2000);
        interval = setInterval(scoreCount, 200);

    } 
    


}

 



//CHECKING IF STILL ALIVE AND IF NOT GAME OVER

let stillAlive = setInterval(function () {
    

    const caca = document.querySelector('.caca');
    const grosCaca = document.querySelector(".grosCaca");
    const pipi = document.querySelector(".pipi");


    const obstacles = [caca,grosCaca,pipi].filter(element => element !== null)

    const isDead = function () {
        
        gameOver.style.display = "block";
        var audio = new Audio('ewww.mp4');
        audio.play();
        clearInterval(interval);

        playerScore = 0;
        
        document.removeEventListener("keydown", started)  

    }
    const rect1 =player.getBoundingClientRect();
  
    for(let obstacle of obstacles){
        const rect2 = obstacle.getBoundingClientRect()
        // console.log(rect2)
        if (rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.y + rect1.height > rect2.y) {
              
        return isDead()
         }  
    
    }
   
    
}, 100)


