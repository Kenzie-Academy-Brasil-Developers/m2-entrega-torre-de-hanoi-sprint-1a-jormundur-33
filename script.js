const towers = [...document.getElementsByClassName('column')]
const firstTower = document.getElementById('first-column')
const thirdTower = document.getElementById('third-column')
const thirdDisc = document.createElement('div')
const secondDisc = document.createElement('div')
const firstDisc = document.createElement('div')




console.log(firstTower)
console.log(towers)


function createDiscs() {
    thirdDisc.setAttribute('class', 'third-disc')
    firstTower.appendChild(thirdDisc)
    secondDisc.setAttribute('class', 'second-disc')
    firstTower.appendChild(secondDisc)
    firstDisc.setAttribute('class', 'first-disc')
    firstTower.appendChild(firstDisc)
    console.log(firstDisc)

    // const secondDisc = document.createElement('div')
    // const thirdDisc = document.createElement('div')
}
createDiscs()

let firstDiscTest = document.getElementsByClassName('first-disc')

console.log(firstDiscTest)

function towersClickHandle(event) {
    let targetEvent = event.currentTarget;
    let count = targetEvent.childElementCount
    let whichChild = targetEvent.lastChild
    thirdTower.appendChild(whichChild)
    console.log(whichChild)
    console.log(targetEvent)
    console.log(count)
    if (thirdTower.childElementCount === 3) {

        alert('You win!')
    }

}


towers.forEach(id => {
    id.addEventListener('click', towersClickHandle)
})






// If the first child width of a tower is greater than the first child width 
// of the other chosen tower, the greatest width disc shan't be moved.