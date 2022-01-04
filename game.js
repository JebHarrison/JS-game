let lastRenderTime = 0 
const SNAKE_SPEED = 1


function main(currentTime) {
 const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
 if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
 window.requestAnimationFrame(main)
 lastRenderTime = currentTime
 console.log(currentTime)
}

window.requestAnimationFrame(main)