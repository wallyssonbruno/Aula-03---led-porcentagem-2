let LUZ = 0
input.onButtonPressed(Button.A, function () {
    LUZ = 0
    led.plotBrightness(2, 2, randint(0, 250))
    LUZ = led.pointBrightness(2, 2)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(LUZ / 250 * 100)
    basic.showString("%")
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(LUZ)
})
