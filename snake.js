export const SNAKE_SPEED = 1
const snakebody = [{x: 11, y:11}]

export function update(){
    console.log('update snake')
}

export function draw(gameBoard){
    snakebody.forEach(segmant => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segmant.x
        snakeElement.style.gridColumnStart = segmant.y
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}
