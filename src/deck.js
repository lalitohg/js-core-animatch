import { DEFAULT_CARDS_DATA} from './default_cards_data';
import { InvalidCardDataError } from './errors/invalid_card_data_error';

export class Deck {
    constructor(cards = null) {
        if (!cards) {
            this.cards = DEFAULT_CARDS_DATA;
        } else if (!Deck.validateCardsData(cards)) {
            throw new InvalidCardDataError(JSON.stringify(cards));
        } else {
            this.cards = cards;
        }
    }

    static validateCardsData(cardsData) {
        if (!Array.isArray(cardsData) || !cardsData.length) {
            return false;
        }
        return true;
    }
}
