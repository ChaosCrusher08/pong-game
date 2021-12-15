input.onButtonPressed(Button.A, function () {
    if (PADDLEA.get(LedSpriteProperty.X) > 0) {
        PADDLEA.change(LedSpriteProperty.X, -1)
        paddleb.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (PADDLEA.get(LedSpriteProperty.X) < 3) {
        PADDLEA.change(LedSpriteProperty.X, 1)
        paddleb.change(LedSpriteProperty.X, 1)
    }
})
let paddleb: game.LedSprite = null
let PADDLEA: game.LedSprite = null
PADDLEA = game.createSprite(2, 4)
paddleb = game.createSprite(3, 4)
let ball = game.createSprite(randint(0, 4), 0)
let directiony = 1
let directionx = randint(-1, 1)
basic.pause(500)
basic.forever(function () {
    ball.change(LedSpriteProperty.X, directionx)
    ball.change(LedSpriteProperty.Y, directiony)
    if (ball.isTouching(PADDLEA) || ball.isTouching(PADDLEA)) {
        ball.change(LedSpriteProperty.Y, directionx * -1)
        ball.change(LedSpriteProperty.Y, -1)
        directiony = -1
        directionx = randint(-1, 1)
    } else {
        if (ball.get(LedSpriteProperty.Y) <= 0) {
            directiony = 1
            directionx = randint(-1, 1)
        } else if (ball.get(LedSpriteProperty.Y) >= 4) {
            ball.set(LedSpriteProperty.Blink, 1)
            basic.pause(2000)
            game.gameOver()
        }
        if (ball.get(LedSpriteProperty.X) <= 0) {
            directionx = 1
        } else if (ball.get(LedSpriteProperty.X) >= 4) {
            directionx = -1
        }
        basic.pause(500)
    }
})
