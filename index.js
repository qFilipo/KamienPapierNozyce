function stone() {
    document.getElementById("player").style.backgroundImage = "url('stone.png')"
    document.getElementById("player").disabled=true;
    setTimeout(genAi, 1000,1)
}

function paper() {
    document.getElementById("player").style.backgroundImage = "url('paper.png')"
    setTimeout(genAi, 1000,2)
}

function scissors() {
    document.getElementById("player").style.backgroundImage = "url('scissors.png')"
    setTimeout(genAi, 1000,3)
}

function genAi(val){
    let random=Math.ceil(Math.random()*3)
    if (random == 1){
        document.getElementById("ai").style.backgroundImage = "url('stone.png')"
        setTimeout(displayResult, 500,val,1)
    } else if (random == 2){
        document.getElementById("ai").style.backgroundImage = "url('paper.png')"
        setTimeout(displayResult, 500,val,2)
    } else{
        document.getElementById("ai").style.backgroundImage = "url('scissors.png')"
        setTimeout(displayResult, 500,val,3)
    }
}

let resPla=0
let resAi=0

function displayResult(val1, val2){
    let winner=document.getElementById("winner")
    let pla=document.getElementById("res-player")
    let ai=document.getElementById("res-comp") 
    if (val1 == 1 && val2 ==2){
        win(2)
    }
    else if (val1 == 1 && val2 ==3){
        win(1)
    }
    else if (val1 == 2 && val2 ==1){
        win(1)
    }
    else if (val1 == 2 && val2 ==3){
        win(2)
    }
    else if (val1 == 3 && val2 ==1){
        win(2)
    }
    else if (val1 == 3 && val2 ==2){
        win(1)
    }
    else{
        win(0)
    }
    function win(res){
        if (res == 1){
            winner.textContent = "You win!"
            winner.style.opacity = "100%"
            setTimeout(function(){
                winner.style.opacity = "0%"
                resPla++
                pla.textContent = resPla
            }, 1000)
        }
        else if (res ==2){
            winner.textContent = "You lose!"
            winner.style.opacity = "100%"
            setTimeout(function(){
                winner.style.opacity = "0%"
                resAi++
                ai.textContent = resAi
            }, 1000)
        }
        else{
            winner.textContent = "DRAW!"
            winner.style.opacity = "100%"
            setTimeout(function(){
                winner.style.opacity = "0%"
            }, 1000)
        }
    }

    setTimeout(history, 500, val1,val2)
}

function history(val1, val2){
    console.log(val1)
    console.log(val2)
    let h=document.getElementById("hist")

    h.children[4].children[0].style.backgroundImage=h.children[3].children[0].style.backgroundImage
    h.children[4].children[1].style.backgroundImage=h.children[3].children[1].style.backgroundImage

    h.children[3].children[0].style.backgroundImage=h.children[2].children[0].style.backgroundImage
    h.children[3].children[1].style.backgroundImage=h.children[2].children[1].style.backgroundImage

    h.children[2].children[0].style.backgroundImage=h.children[1].children[0].style.backgroundImage
    h.children[2].children[1].style.backgroundImage=h.children[1].children[1].style.backgroundImage

    h.children[1].children[0].style.backgroundImage=h.children[0].children[0].style.backgroundImage
    h.children[1].children[1].style.backgroundImage=h.children[0].children[1].style.backgroundImage

    if (val1 == 1)
        h.children[0].children[1].style.backgroundImage="url('stone.png')"
    else if (val1 == 2){
        h.children[0].children[1].style.backgroundImage="url('paper.png')"
    }
    else{
        h.children[0].children[1].style.backgroundImage="url('scissors.png')"
    }

    if (val2 == 1)
        h.children[0].children[0].style.backgroundImage="url('stone.png')"
    else if (val2 == 2){
        h.children[0].children[0].style.backgroundImage="url('paper.png')"
    }
    else{
        h.children[0].children[0].style.backgroundImage="url('scissors.png')"
    }
}