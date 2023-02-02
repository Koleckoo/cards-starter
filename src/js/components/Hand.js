import { Card } from "./Card";
// class hand that hold two card of class Card
export class Hand {
    constructor() {
        this.element = document.createElement("div");
        // cardData we will loop through
        this.cardData = [
            {rank: 2, suit: "diamond"},
            {rank: 9, suit: "spade"},
            {rank: 9, suit: "heart"},
            {rank: 9, suit: "club"}
        ]
        this.refreshElement();

    }
    // creates two cards using for each loop
    refreshElement = () => {
        this.element.innerHTML = `<button class="button">Drop First</button>`
        this.element.classList.add("cards-container");
        //looping throug carddata
        this.cardData.forEach((cardData) => {
        const card =  new Card(cardData);
        this.element.appendChild(card.element)
    })
        // event listening for clikc on button and droping the first card
        this.element.querySelector("button").addEventListener(("click"), this.dropFirst)
    }

    // method for droping the first card
    dropFirst = () => {
        this.cardData.shift();
        this.refreshElement();

    }
}