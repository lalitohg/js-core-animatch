import { Card } from './card';
import { InvalidCardSetValueError } from './errors/invalid_card_set_value_error';

export class Player {
    constructor(name) {
        this.name = Player.cleanName(name);
        this.cardsInHand = [];
    }

    static cleanName(name) {
        name = name || ''; // default if empty
        if (typeof name !== 'string') {
            name = ''; // default if not string
        }
        return name;
    }

    addCardsToHand(cards) {
        if (!Card.validateCardSet(cards)) {
            throw new InvalidCardSetValueError(cards);
        }
        this.cardsInHand.push(...cards);
    }
}
