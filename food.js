let food = { x:0, y: 0 }

export function update(){
  
}

export function draw(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.x
    foodElement.style.gridColumnStart = food.y
    foodElement.classList.add('snake')
    gameBoard.appendChild(foodElement)

}
