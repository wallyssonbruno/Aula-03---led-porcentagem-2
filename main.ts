input.onButtonPressed(Button.A, function () {
    led.plotBrightness(2, 2, randint(0, 250))
})
input.onButtonPressed(Button.B, function () {
    if (led.pointBrightness(2, 2) * (100 / 250) < 25) {
        basic.showNumber(led.pointBrightness(0, 0) * (100 / 250))
        basic.showString("%")
        basic.clearScreen()
    } else if (led.pointBrightness(2, 2) * (100 / 250) <= 50) {
        basic.showNumber(led.pointBrightness(2, 2) * (100 / 250))
        basic.showString("%")
        basic.clearScreen()
    } else if (led.pointBrightness(2, 2) * (100 / 250) <= 75) {
        basic.showNumber(led.pointBrightness(2, 2) * (100 / 250))
        basic.showString("%")
        basic.clearScreen()
    } else {
        basic.showNumber(led.pointBrightness(2, 2) * (100 / 250))
        basic.showString("%")
        basic.clearScreen()
    }
})
