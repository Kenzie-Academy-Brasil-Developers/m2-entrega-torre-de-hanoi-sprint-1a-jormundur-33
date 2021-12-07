function createTowers() {
    let divT1 = document.getElementById('towerDiv1')
    let divT2 = document.getElementById('towerDiv2')
    let divT3 = document.getElementById('towerDiv3')
    let t1 = document.createElement('div')
    let t2 = document.createElement('div')
    let t3 = document.createElement('div')
    t1.classList.add('column')
    t2.classList.add('column')
    t3.classList.add('column')
    t1.setAttribute('id', 'first-column')
    t2.setAttribute('id', 'second-column')
    t3.setAttribute('id', 'third-column')
    console.log(t2, t1, t3)
    divT1.appendChild(t1)
    divT2.appendChild(t2)
    divT3.appendChild(t3)

}
createTowers()



const modal = document.getElementById('winModal')
const towersPlaceHolder = document.querySelector('.back')
const towers = [...document.querySelectorAll('.column')]
const tower1 = document.getElementById('first-column')
const tower2 = document.getElementById('second-column')
const tower3 = document.getElementById('third-column')
const message = document.querySelector('.instruction')
message.innerHTML = 'Click on a tower to select the disc at the top.'
const messageBox = document.querySelector('.messageBox')
const fifthDisc = document.createElement('div')
const fourthDisc = document.createElement('div')
const thirdDisc = document.createElement('div')
const secondDisc = document.createElement('div')
const firstDisc = document.createElement('div')
const countPrint = document.querySelector('.moves')
let movableDisc = undefined;



function createDiscs() {
    thirdDisc.setAttribute('class', 'third-disc')
    tower1.appendChild(thirdDisc)
    secondDisc.setAttribute('class', 'second-disc')
    tower1.appendChild(secondDisc)
    firstDisc.setAttribute('class', 'first-disc')
    tower1.appendChild(firstDisc)
}
createDiscs()


function dificultyIncrease() {
    fifthDisc.setAttribute('class', 'fifth-disc')
    tower1.appendChild(fifthDisc)
    fourthDisc.setAttribute('class', 'fourth-disc')
    tower1.appendChild(fourthDisc)
    thirdDisc.setAttribute('class', 'third-disc')
    tower1.appendChild(thirdDisc)
    secondDisc.setAttribute('class', 'second-disc')
    tower1.appendChild(secondDisc)
    firstDisc.setAttribute('class', 'first-disc')
    tower1.appendChild(firstDisc)
}


let count = 0


function towersClickHandle(event) {
    let targetEvent = event.currentTarget;
    let amoutOfChildren = targetEvent.childElementCount;
    let topDisc = targetEvent.lastElementChild;

    if (movableDisc === undefined) {
        if (topDisc !== null) {

            movableDisc = topDisc
            message.innerHTML = "Selected disc:"
            messageBox.appendChild(movableDisc)



        }
    } else if (amoutOfChildren === 0 ||
        movableDisc.clientWidth < topDisc.clientWidth)

    {
        targetEvent.appendChild(movableDisc)
        movableDisc = undefined;
        message.innerHTML = 'Click on a tower to select the disc at the top.'
        count += 1

        winFunc()

    }
    countPrint.innerHTML = 'Moves: ' + count



}


towers.forEach(id => {
    id.addEventListener('click', towersClickHandle)
})


function winFunc() {
    const countTimer = document.getElementById('timer')
    let timer = 5

    setTimeout(countDown, 1000);

    function countDown() {
        timer--;
        if (timer > 0) {
            setTimeout(countDown, 1000);
        }
        countTimer.innerHTML = `Restarting game in: ${timer} seconds.`
    }

    const winMessage = document.getElementById('win-message')
    if (tower3.childElementCount === 1 &&
        tower2.childElementCount === 0 &&
        tower1.childElementCount === 0) {
        winMessage.innerHTML = 'Congratulations...I guess...'
        modal.style.display = "block";
        setTimeout(function() {
            restartGame()

            console.log(timer)
            modal.style.display = 'none'
        }, 5000)
    } else if (tower3.childElementCount === 5) {
        winMessage.innerHTML = 'Well, that took a while...'
        modal.style.display = "block";
        setTimeout(function() {
            restartGame()

            modal.style.display = 'none'
        }, 5000)
    } else if (tower3.childElementCount === 3 &&
        tower2.childElementCount === 0 &&
        tower1.childElementCount === 0) {
        winMessage.innerHTML = 'Easy, eh?'
        modal.style.display = "block";
        setTimeout(function() {
            restartGame()

            modal.style.display = 'none'
        }, 5000)

    }
}
let difficulty = false
let easyMode = false

function restartGame() {
    count = 0
    countPrint.innerHTML = 'Moves: ' + count
    movableDisc = undefined
    message.innerHTML = 'Click on a tower to select the disc at the top.'
    if (difficulty === true) {
        increaseDifficultyButton()
    } else if (easyMode === true) {
        createDiscs()
    } else {
        createDiscs()
    }


}

function increaseDifficultyButton() {
    count = 0
    countPrint.innerHTML = 'Moves: ' + count
    movableDisc = undefined
    message.innerHTML = 'That will take some time...'
    dificultyIncrease()
    difficulty = true
    easyMode = false
}

function lowerDifficulty() {
    count = 0
    countPrint.innerHTML = 'Moves: ' + count
    movableDisc = undefined
    if (tower1.childElementCount === 3) {
        easyMode = true
        createDiscs()
        tower1.removeChild(thirdDisc)
        tower1.removeChild(secondDisc)
        message.innerHTML = 'Are you serious?!'

    } else if (tower1.childElementCount === 5) {
        difficulty = false
        message.innerHTML = 'Click on a tower to select the disc at the top.'
        tower1.removeChild(fourthDisc)
        tower1.removeChild(fifthDisc)
    }
}