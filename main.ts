microbitApp.onButtonOption(ButtonOption.Right, function () {
    cuteBot.motors(25, -25)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff8000)
    basic.pause(200)
    cuteBot.closeheadlights()
    basic.pause(200)
})
microbitApp.onButtonOption(ButtonOption.Down, function () {
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
    cuteBot.motors(microbitApp.getSliderX() * -1, microbitApp.getSliderZ() * -1)
})
microbitApp.onButtonReleased(function () {
    cuteBot.stopcar()
    cuteBot.closeheadlights()
})
microbitApp.onButtonOption(ButtonOption.Left, function () {
    cuteBot.motors(-25, 25)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xff8000)
    basic.pause(200)
    cuteBot.closeheadlights()
    basic.pause(200)
})
microbitApp.onButtonOption(ButtonOption.Up, function () {
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x00ff00)
    cuteBot.motors(microbitApp.getSliderX(), microbitApp.getSliderZ())
})
cuteBot.stopcar()
cuteBot.closeheadlights()
basic.forever(function () {
    if (microbitApp.getToggleState(ToggleOption.Toggle1) == 1) {
        microbitApp.sendValueOnceToApp(cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters))
    } else {
        microbitApp.sendStringToApp("Toggle 1 to show range")
    }
})
