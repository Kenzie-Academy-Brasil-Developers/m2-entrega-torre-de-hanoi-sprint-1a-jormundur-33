const towers = [...document.getElementsByClassName('column')]
const firstTower = document.getElementById('first-column')
console.log(towers)
const checkChildren = firstTower.childElementCount
console.log(checkChildren)

function createDiscs() {
    const thirdDisc = document.createElement('div')
    thirdDisc.setAttribute('class', 'third-disc')
    firstTower.appendChild(thirdDisc)
    const secondDisc = document.createElement('div')
    secondDisc.setAttribute('class', 'second-disc')
    firstTower.appendChild(secondDisc)
    const firstDisc = document.createElement('div')
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
    console.log(targetEvent)

}


towers.forEach(id => {
    id.addEventListener('click', towersClickHandle)
})
