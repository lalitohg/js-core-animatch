import { DEFAULT_CARDS_DATA} from './default_cards_data';
import { InvalidCardDataError } from './errors/invalid_card_data_error';

export class Deck {
    constructor(cards = null) {
        this.reset(cards);
    }

    static validateCardsData(cardsData) {
        if (!Array.isArray(cardsData) || !cardsData.length) {
            return false;
        }
        return true;
    }

    shuffle() {
        const halfCardsLength = Math.ceil(this.cards.length / 2);
        const firstHalfCards = this.cards.slice(0, halfCardsLength);
        const secondHalfCards = this.cards.slice(halfCardsLength);
        let shuffledCards = [];

        while(firstHalfCards.length || secondHalfCards.length) {
            if (secondHalfCards.length) {
                shuffledCards.push(secondHalfCards.shift());
            }
            if (firstHalfCards.length) {
                shuffledCards.push(firstHalfCards.shift());
            }
        }

        this.cards = shuffledCards;
    }

    getTopCard() {
        return this.cards.pop();
    }

    reset(cards) {
        if (!cards) {
            this.cards = DEFAULT_CARDS_DATA;
        } else if (!Deck.validateCardsData(cards)) {
            throw new InvalidCardDataError(JSON.stringify(cards));
        } else {
            this.cards = cards;
        }
    }
}
