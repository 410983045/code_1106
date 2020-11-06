basic.forever(function () {
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= i; j++) {
            led.plot(4 - i, j)
        }
        for (let j = 0; j <= i - 1; j++) {
            led.plot(4 - j, i)
        }
        basic.pause(200)
    }
})
