import { PIPE_HEIGHT, PIPE_WIDTH, SCREEN_WIDTH } from '../constants.js'

export default class Pipe {
  y = 0

  constructor(x, sprites) {
    this.sprites = sprites
    this.x = x
    this.y = this.getElevation()
  }

  update() {
    this.x -= 3

    if (this.x + PIPE_WIDTH <= 0) {
      this.x = SCREEN_WIDTH
      this.y = this.getElevation()
    }
  }

  draw(p) {
    p.image(this.sprites.get(0, 0, PIPE_WIDTH, PIPE_HEIGHT), this.x, -175 + this.y)
    p.image(this.sprites.get(PIPE_WIDTH, 0, PIPE_WIDTH, PIPE_HEIGHT), this.x, 425 + this.y)
  }

  getElevation() {
    return Math.floor(Math.random() * (150 - (-150) + 1) + (-150));
  }
}