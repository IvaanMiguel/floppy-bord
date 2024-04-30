import { PlayerAnimation, SCREEN_HEIGHT } from '../constants.js'

export default class Bird {
  animationFrame = 0
  animationTimer = 0
  isJumping = false
  jumpTimer = 0
  jumpDuration = 0.1
  jumpSpeed = 400

  constructor(sprites) {
    this.x = 90
    this.y = SCREEN_HEIGHT / 3
    this.fallSpeed = 20
    this.sprites = sprites
  }

  update(time, p) {
    this.updateAnimation(time, p)
    this.updatePosition(time, p)
  }

  draw(p) {
    const animation = PlayerAnimation[this.animationFrame]

    p.image(this.sprites.get(animation.x, animation.y, animation.w, animation.h), this.x, this.y)
  }

  updateAnimation(time, p) {
    if (time.previous < this.animationTimer) return

    this.animationFrame += 1
    if (this.animationFrame >= PlayerAnimation.length) this.animationFrame = 0

    this.animationTimer = time.previous + (PlayerAnimation[this.animationFrame].timer * p.deltaTime)
  }

  updatePosition(time) {
    if (this.isJumping) {
      this.y -= this.jumpSpeed * time.secondsPassed
      this.jumpTimer += time.secondsPassed

      if (this.jumpTimer >= this.jumpDuration) {
        this.isJumping = false
        this.jumpTimer = 0
        this.fallSpeed = 20
      }
    } else {
      this.y += this.fallSpeed * 1.2 * time.secondsPassed

      if (this.fallSpeed < 1000) this.fallSpeed += 10
    }
  }

  jump() {
    if (!this.isJumping) {
      this.isJumping = true
      this.jumpTimer = 0
      this.jumpSpeed = 400
    }
  }
}

