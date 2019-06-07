import { assert, expect, should } from 'chai';
should();

import { Card } from '../src/card';
import { Deck } from '../src/deck';
import { COLORS, ANIMALS, PRESENTS } from '../src/constants';

describe('Test Deck class', function() {
    it('should create Deck with default card data', function() {
        let deck = new Deck();
        console.log("------------------",deck.cards);
        expect(deck).to.have.property('cards').and.have.property('length').equal(4);
    });

    it('should crate deck with provided card data', function() {
        const cardsData = [new Card(ANIMALS.panda, PRESENTS.balloons, COLORS.blue, COLORS.blue, COLORS.blue, COLORS.blue, COLORS.blue, COLORS.blue,)];
        let deck = new Deck(cardsData);
        expect(deck).to.have.property('cards').and.have.property('length').equal(1);
    });
    
    describe('Test bad constructor input', function() {
        it('should throw on invalid card data', function() {
            function createDeck(cards) {
                return new Deck(cards);
            }
            expect(() => createDeck([])).to.throw(Error, 'Invalid cards data []');
        });
    });
});