export class Dealer {
    constructor(deck, players) {
        Object.assign(this, { deck, players });
    }

    dealWholeDeckEvenlyToAllPlayers() {
        let cycles = Math.floor(this.deck.cards.length / this.players.length);
        while (cycles > 0) {
            this.players.forEach(player => {
                player.addCardsToHand([this.deck.getTopCard()]);
            });
            cycles--;
        }
    }

    dealTopCardFromDeckToPlayer(player) {
        player.addCardsToHand([this.deck.getTopCard()]);
    }
}
