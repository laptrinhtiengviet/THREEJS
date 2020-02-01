import Game from './Game.js'

var game = new Game()
Loop()
function Loop(){
    game.gameUpdate()
    requestAnimationFrame(Loop)
}