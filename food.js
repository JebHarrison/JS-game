import { onSnake, expandSnake } from './snake.js'


let food = { x:10, y: 1 }
const EXPANTON_RATE = 5

export function update(){
  if (onSnake(food)) {
      expandSnake(EXPANTON_RATE)
      food = { x: 20, y: 10 }
  }
}

export function draw(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)

}

function getRandomFoodPosition() {
    let newFoodPosition 
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}
