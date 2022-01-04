let lastRenderTime = 0 
const SNAKE_SPEED = 1


function main(currentTime) {
   
 window.requestAnimationFrame(main)
 if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
 const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000

 
 console.log(currentTime)
 lastRenderTime = currentTime
}

window.requestAnimationFrame(main)