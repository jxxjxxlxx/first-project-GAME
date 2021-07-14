
const player = document.getElementById("player");
const caca = document.querySelector(".caca");
const grosCaca = document.getElementById("grosCaca");
const pipi = document.getElementById("pipi");
const balle = document.getElementById("balle");
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
    }, 500);
}
}

document.addEventListener("keydown", function (event) {
    jump();
});


// function down

//STARTTT

function generateCacas(){



    // create an interval that will create a caca every 5 seconds

    
    // generate random obs 
    //
     setInterval(() => {
        
        const obstacle = document.createElement('div')
        obstacle.classList.add('caca')
        obstacle.classList.add('cacaActive')
        obstacle.style.display ="block"
        gameContainer.appendChild(obstacle);
        
    },5000) 

//    if (!isGameover) {
//        clearInterval(obsControl)
//    }


}


document.addEventListener("keydown", started)

function started(start) {
    
    if (start.code == "Space") {
        caca.style.display = "block"
        caca.classList.add("cacaActive")
        
            // start creating random cacas
        
        let playerScore = 0;
        interval = setInterval(scoreCount, 200);
    } 

    if (playerScore > 50) {
        grosCaca.style.display = "block"
        grosCaca.classList.add("grosCacaActive")
    } 
    if (playerScore > 100) {
        pipi.style.display = "block"
        pipi.classList.add("pipiActive")
    }
    // if (playerScore > 300) {
    //     balle.style.display = "block"
    //     balle.classList.add("balleActive")
    // }



 
};




let stillAlive = setInterval(function () {


    // isGameover=true;
    let playerRect = parseInt(window.getComputedStyle(player).getPropertyValue('top')); //tried the same with getBoundingClientRect didnt work  
    let cacaRect = parseInt(window.getComputedStyle(caca).getPropertyValue('left'));
    let grosCacaRect = parseInt(window.getComputedStyle(grosCaca).getPropertyValue('left'));
    let pipiRect = parseInt(window.getComputedStyle(pipi).getPropertyValue('left'));
    // let balle = parseInt(window.getComputedStyle(balle).getPropertyValue('left'))

    if (cacaRect < 60 && cacaRect > 0 && playerRect > 500) {
        
        gameOver.style.display = "block";
        caca.classList.add("cacaDead");
        grosCaca.classList.add("cacaDead"); 
        pipi.classList.add("cacaDead")
        balle.classList.add("cacaDead")
         // tous les obstacles
        clearInterval(interval);
        playerScore = 0;
        // console.log("shit")
        document.removeEventListener("keydown", started) 
    }


    if (grosCacaRect < 80 && grosCacaRect > 0 && playerRect > 500) {
        
        gameOver.style.display = "block";
        caca.classList.add("cacaDead");
        grosCaca.classList.add("cacaDead");
        pipi.classList.add("cacaDead") 
        clearInterval(interval);
        playerScore = 0;
        document.removeEventListener("keydown", started) 
    }

    if (pipiRect < 80 && pipiRect > 0 && playerRect > 500) {
        
        gameOver.style.display = "block";
        caca.classList.add("cacaDead");
        grosCaca.classList.add("cacaDead");
        pipi.classList.add("cacaDead") 
        clearInterval(interval);
        playerScore = 0;
        document.removeEventListener("keydown", started) 
    }

    // if (balle < 80 && balle > 0 && playerRect > 200) {
        
    //     gameOver.style.display = "block";
    //     caca.classList.add("cacaDead");
    //     grosCaca.classList.add("cacaDead"); 
    //     pipi.classList.add("cacaDead")
    //     clearInterval(interval);
    //     playerScore = 0;
    // }
    
}, 100)


