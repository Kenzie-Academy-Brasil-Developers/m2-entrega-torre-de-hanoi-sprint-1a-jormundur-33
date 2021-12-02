const towers = [...document.querySelectorAll('.column')]
    // const towersPlaceHolder = document.querySelector('.columns')
const towersPlaceHolder = document.querySelector('.back')
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

        if (tower3.childElementCount === 1 &&
            tower2.childElementCount === null &&
            tower3.childElementCount === null) {
            message.innerHTML = 'Congratulations...I guess...'

        } else if (tower3.childElementCount === 3) {
            message.innerHTML = 'Easy eh?'
            alert("Victory!");

        } else if (tower3.childElementCount === 5) {
            message.innerHTML = 'Well, that took a while...'
        }

    }
    countPrint.innerHTML = 'Moves: ' + count


    console.log(topDisc)

}


towers.forEach(id => {
    id.addEventListener('click', towersClickHandle)
})



function restartGame() {
    count = 0
    countPrint.innerHTML = 'Moves: ' + count
    movableDisc = undefined
    message.innerHTML = 'Click on a tower to select the disc at the top.'

    createDiscs()
    if (towersPlaceHolder.childElementCount) {
        console.log(true)
    } else {
        console.log(false)
    }

}

function increaDifficultyButton() {
    count = 0
    countPrint.innerHTML = 'Moves: ' + count
    movableDisc = undefined
    message.innerHTML = 'That will take some time...'
    dificultyIncrease()
}

function lowerDifficulty() {
    count = 0
    countPrint.innerHTML = 'Moves: ' + count
    movableDisc = undefined

    if (tower1.childElementCount === 3) {
        createDiscs()
        tower1.removeChild(thirdDisc)
        tower1.removeChild(secondDisc)
        message.innerHTML = 'Are you serious?!'

    } else {
        tower1.removeChild(fourthDisc)
        tower1.removeChild(fifthDisc)
    }
}


function movingDiscs() {
    firstDisc.setAttribute('id', 'disc')
    secondDisc.setAttribute('id', 'disc')
    thirdDisc.setAttribute('id', 'disc')
    fourthDisc.setAttribute('id', 'disc')
    fifthDisc.setAttribute('id', 'disc')

}
movingDiscs();