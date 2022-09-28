// Create by Bonnie Zhu
// Create on Sep 28th
// This program is Hungryness
let hungryness = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        hungryness = hungryness + 1
        basic.showNumber(hungryness)
    } else if (hungryness) {
        hungryness = 0
        basic.showNumber(hungryness)
    }
})
