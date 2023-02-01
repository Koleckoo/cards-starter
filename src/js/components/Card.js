export class Card {
    constructor (rank, suit) {
        this.rank = rank
        this.suit = suit
        this.element = document.createElement('div')
        this.faceDown = false;

        this.refreshElement()
    }

    refreshElement = () => {
        this.element.classList.add("card");
        this.element.classList.add(this.suit);
        this.element.innerHTML = `
            <h2 class="rank">${this.rank}</div>
        `
        console.log(this.faceDown);
        if (this.faceDown) {
            this.element.classList.add("face-down")
        } else {
            this.element.classList.remove("face-down")
        }

        this.element.querySelector(".rank").addEventListener("click", this.increaseRank)
        // this.element.addEventListener('mouseenter', this.flipCard)
        // this.element.addEventListener('mouseleave', this.flipCard)
    }

    flipCard = () => {
        this.faceDown = !this.faceDown
        this.refreshElement()
    }

    increaseRank = () => {
        this.rank ++
        this.refreshElement()
    }
}