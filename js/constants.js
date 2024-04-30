export const SCREEN_WIDTH = 432
export const SCREEN_HEIGHT = 678

export const PIPE_WIDTH = 156 / 2
export const PIPE_HEIGHT  = 480

export const PlayerFrame = {
  FLYING_1: 'flying-1',
  FLYING_2: 'flying-2',
  FLYING_3: 'flying-3',
}

export const PlayerKeyframe = {
  [PlayerFrame.FLYING_1]: { x: 0, y: 0, w: 51, h: 36, timer: 12 },
  [PlayerFrame.FLYING_2]: { x: 0, y: 36, w: 51, h: 36, timer: 12 },
  [PlayerFrame.FLYING_3]: { x: 0, y: 72, w: 51, h: 36, timer: 12 }
}

export const PlayerAnimation = [
  PlayerKeyframe[PlayerFrame.FLYING_1],
  PlayerKeyframe[PlayerFrame.FLYING_2],
  PlayerKeyframe[PlayerFrame.FLYING_3],
  PlayerKeyframe[PlayerFrame.FLYING_2]
]
