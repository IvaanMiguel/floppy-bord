import Background from './entities/Background.class.js'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from './constants.js'
import Bird from './entities/Bird.class.js'
import Pipe from './entities/Pipe.class.js'

const mainSketch = (p) => {
  const time = { previous: 0, secondsPassed: 0 }

  let sprites
  let bg
  let bird
  let pipes = []

  p.preload = () => {
    sprites = p.loadImage('../src/sprites.png')
  }

  p.setup = () => {
    p.createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT)

    bg = new Background(SCREEN_WIDTH, SCREEN_HEIGHT, sprites.get(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT))
    bird = new Bird(sprites.get(SCREEN_WIDTH, 0, SCREEN_WIDTH + 52, 108))
    pipes.push(
      new Pipe(SCREEN_WIDTH, sprites.get(SCREEN_WIDTH, 108, 156, 480)),
      new Pipe(SCREEN_WIDTH + 250, sprites.get(SCREEN_WIDTH, 108, 156, 480)),
      // new Pipe(SCREEN_WIDTH + 500, sprites.get(SCREEN_WIDTH, 108, 156, 480)),
    )
  }

  p.draw = () => {
    p.background('black')

    bg.update()
    bird.update(time, p)

    for (const pipe of pipes) {
      pipe.update(time)
    }

    bg.draw(p)
    bird.draw(p)

    for (const pipe of pipes) {
      pipe.draw(p)
    }
    
    time.previous += p.deltaTime
    time.secondsPassed = p.deltaTime / 1000
  }

  p.keyPressed = () => {
    if (p.key === ' ') {
      bird.jump()
    }
  }
}

new p5(mainSketch)
