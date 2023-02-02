export class Card {
    // properties are used, so you can see them the object in script and what you assign to it
    constructor (properties) {
        this.rank = properties.rank
        this.suit = properties.suit
        this.element = document.createElement('div')
        this.faceDown = false;
        this.refreshElement()
    }

    refreshElement = () => {
        this.element.classList.add("card");
        this.element.classList.add(this.suit);
        this.element.innerHTML = `
        <h2 class="rank">${this.rank}</h2>
        `
        //event listener for increasing rank
        // this.element.querySelector("h2").addEventListener("click", this.increaseRank)

        // if statement about the state of the card should be here
        // thats how react works
        if (this.faceDown) {
            this.element.classList.add("face-down");
        } else {
            this.element.classList.remove("face-down");
        }
        // adding event listener for fliping card 
        this.element.addEventListener("mouseenter", this.flipCard);
        this.element.addEventListener("mouseleave", this.flipCard);
    }

    // Increasing rank
    // increaseRank = () => {
    //     this.rank ++;
    //     this.refreshElement();
    //     console.log(this.rank);
    // }

    // fliping card - only changes the status of facedown and the calls
    // refreshelement on the element and rebuilds it again with new value
    flipCard = () => {
        this.faceDown = !this.faceDown
        this.refreshElement();
    }
    }
