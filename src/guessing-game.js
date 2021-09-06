class GuessingGame {
    constructor() {
        this.average
    }

    setRange(min, max) {
        this.min = min
        this.max = max
    }

    guess() {
        this.average = Math.ceil((this.max - this.min) / 2 + this.min)
        return this.average
    }

    lower() {
        this.max = this.average
        return this.max
    }

    greater() {
        this.min = this.average
        return this.min
    }
}

module.exports = GuessingGame;
