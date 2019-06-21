import { assert, expect, should } from 'chai';
should();

import {Player} from '../src/player';
import { InvalidCardSetValueError } from '../src/errors/invalid_card_set_value_error';
import { Card } from '../src/card';

function addCardsToPlayerHand(player, cards) {
    return player.addCardsToHand(cards);
}

describe('Test Player class', function() {
    describe('Test constructor', function() {
        it('should create a player with right parameters', function() {
            const player = new Player("foo");
            expect(player).to.have.property("name").to.equal("foo");
        });

        it('should create player with default name if none provided', function() {
            const player = new Player();
            expect(player).to.have.property("name").to.equal("");
        });
        

        it('should create player with default name if wrong data type provided', function() {
            const player = new Player(1);
            expect(player).to.have.property("name").to.equal("");
        });
        
    });

    describe('Test addCardsToHand', function() {
        it('should throw error if no array type is provided', function() {
            const player = new Player('foo');
            expect(()=>addCardsToPlayerHand(player, 1)).to.throw(InvalidCardSetValueError).and.have.property('message').to.equal('Invalid cards set value. Expecting [Card] and got: 1');
        });

        it('should throw error if cards array contains any no card items', function() {
            const player = new Player('foo');
            expect(()=>addCardsToPlayerHand(player, [1])).to.throw(InvalidCardSetValueError).and.have.property('message').to.equal('Invalid cards set value. Expecting [Card] and got: [1]');
        });

        it('should keep cards in hand the same if cards array provided is empty', function() {
            const player = new Player('foo');
            assert.equal(player.cardsInHand.length, 0);
            player.addCardsToHand([]);
            assert.equal(player.cardsInHand.length, 0);
        });

        it('should add cards to player hand', function() {
            const player = new Player('foo');
            assert.equal(player.cardsInHand.length, 0);
            player.addCardsToHand([new Card(1,1,1,1,1,1,1,1), new Card(1,1,1,1,1,1,1,1)]);
            assert.equal(player.cardsInHand.length, 2);
        });
    });
    
});
