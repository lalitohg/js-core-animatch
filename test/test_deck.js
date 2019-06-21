import { assert, expect, should } from 'chai';
should();

import { Card } from '../src/card';
import { Deck } from '../src/deck';
import { COLORS, ANIMALS, PRESENTS } from '../src/constants';

function testCardsAreDifferent(cardA, cardB) {
    return (
        (cardA.animal !== cardB.animal) ||
        (cardA.present !== cardB.present) ||
        (cardA.hatColor !== cardB.hatColor) ||
        (cardA.eyeGlassesColor !== cardB.eyeGlassesColor) ||
        (cardA.scarfColor !== cardB.scarfColor) ||
        (cardA.topColor !== cardB.topColor) ||
        (cardA.bottomColor !== cardB.bottomColor) ||
        (cardA.shoesColor !== cardB.shoesColor)
    );
}

describe('Test Deck class', function() {
    it('should create Deck with default card data', function() {
        let deck = new Deck();
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

    describe('Test suffle', function() {
        it('should arrenge cards in other order', function() {
            const deck = new Deck();
            const originalCardSet = [...deck.cards];
            deck.shuffle();
            const shuffledCardSet = [...deck.cards];
            console.log("original", originalCardSet)
            console.log("shuffled", shuffledCardSet)

            assert.equal(originalCardSet.length, shuffledCardSet.length);

            assert.isTrue(testCardsAreDifferent(originalCardSet[0], shuffledCardSet[0]));
        });
    });

    describe('Test getTopCard', function() {
        it('should get a different card from top of the deck every time', function() {
            const deck = new Deck();
            const originalDeckLength = deck.cards.length;
            const firstCardFromTop = deck.getTopCard();
            expect(deck.cards.length).to.equal(originalDeckLength - 1);
            const secondCardFromTop = deck.getTopCard();
            expect(deck.cards.length).to.equal(originalDeckLength - 2);
            assert.isTrue(testCardsAreDifferent(firstCardFromTop, secondCardFromTop));
        });
    });
});
