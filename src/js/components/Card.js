export class Card {
    constructor (rank, suit) {
        this.rank = rank
        this.suit = suit
        this.element = document.createElement('div')
        this.faceDown = false;

        this.refreshElement()
    }

    refreshElement = () => {

    }
}