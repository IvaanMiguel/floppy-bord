import { SCREEN_WIDTH } from '../constants.js'

export default class Background {
  x = 0
  y = 0

  constructor(w, h, sprite) {
    this.w = w
    this.h = h
    this.sprite = sprite
  }

  update() {
    this.x--

    if (SCREEN_WIDTH + this.x === 0) this.x = 0
  }

  draw(p) {
    p.image(this.sprite, this.x + SCREEN_WIDTH, this.y)
    p.image(this.sprite, this.x, this.y)
  }
}
