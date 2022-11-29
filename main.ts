input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 5; index++) {
        pedestriancount += -1
        basic.showString("" + (pedestriancount))
    }
    RED()
    basic.pause(1000)
    GREEN()
    for (let index = 0; index < 15; index++) {
        green_countdown += -1
        basic.showString("" + (green_countdown))
    }
    basic.pause(1000)
    YELLOW()
    basic.pause(1000)
})
function RED () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function GREEN () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
}
input.onButtonPressed(Button.B, function () {
    RED()
    basic.pause(1000)
})
function YELLOW () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
let range: neopixel.Strip = null
let pedestriancount = 0
let green_countdown = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P4, 4, NeoPixelMode.RGB)
strip.setBrightness(20)
green_countdown = 15
pedestriancount = 5
basic.forever(function () {
	
})
