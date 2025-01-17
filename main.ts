input.onButtonPressed(Button.A, function () {
    contador = 10
})
let contador = 0
contador = 10
basic.forever(function () {
    basic.showNumber(contador)
    contador += -1
    if (contador < 1) {
        contador = 10
    }
    basic.pause(100)
})
