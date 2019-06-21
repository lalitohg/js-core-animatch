import { assert, expect, should } from 'chai';
should();

import { Dealer } from '../src/dealer';
import { Card } from '../src/card';
import { Deck } from '../src/deck';
import { Player } from '../src/player';

function fillCards(n) {
    let cards = [];
    while (n > 0) {
        cards.push(new Card(1,1,1,1,1,1,1,1));
        n--;
    }
    return cards;
}

function fillPlayers(n) {
    let players = [];
    while (n > 0) {
        players.push(new Player());
        n--;
    }
    return players;
}

describe('Test Dealer class', function() {
    describe('Test constructor', function() {
        it('should create a dealer', function() {
            const dealer = new Dealer(new Deck(), fillPlayers(2));
            expect(dealer).to.have.property("deck");
            expect(dealer).to.have.property("players");
            assert.exists(dealer.deck.cards);
            assert.exists(dealer.players[0].name);
            assert.equal(dealer.players.length, 2);
        });
    });

    describe('Test dealWholeDeckEvenlyToAllPlayers', function() {
        it('should deal all cards in deck to all players evenly', function() {
            let cards = fillCards(10);
            let players = fillPlayers(3);
            const dealer = new Dealer(new Deck(cards), players);

            assert.equal(cards.length, dealer.deck.cards.length);
            assert.equal(players.length, dealer.players.length);
            expect(dealer.players[0].cardsInHand).to.have.property('length').equal(0);
            expect(dealer.players[1].cardsInHand).to.have.property('length').equal(0);
            expect(dealer.players[2].cardsInHand).to.have.property('length').equal(0);

            dealer.dealWholeDeckEvenlyToAllPlayers();
            assert.equal(dealer.deck.cards.length, 1);
            assert.equal(dealer.players[0].cardsInHand.length, 3);
            assert.equal(dealer.players[1].cardsInHand.length, 3);
            assert.equal(dealer.players[2].cardsInHand.length, 3);
        });
    });

    describe('Test dealTopCardFromDeckToPlayer', function() {
        it('should get top card from deck and place it on players hand', function() {
            const dealer = new Dealer(new Deck(), fillPlayers(3));
            const originalDeckSize = dealer.deck.cards.length;
            dealer.dealTopCardFromDeckToPlayer(dealer.players[0]);
            assert.notEqual(originalDeckSize, dealer.deck.cards.length);
            assert.equal(dealer.players[0].cardsInHand.length, 1);
            assert.equal(dealer.players[1].cardsInHand.length, 0);
            assert.equal(dealer.players[2].cardsInHand.length, 0);
        });
    });
});
