import { assert, expect, should } from 'chai';
should();

import { Card } from '../src/card';
import { COLORS, ANIMALS, PRESENTS } from '../src/constants';

describe('Test Card class', function () {
    it('should create a new card with right parameters', function () {
        let card = new Card(
            ANIMALS.panda,
            PRESENTS.balloons,
            COLORS.blue,
            COLORS.blue,
            COLORS.blue,
            COLORS.blue,
            COLORS.blue,
            COLORS.blue
        );
        expect(card.animal).equals(ANIMALS.panda);
    });

    describe('Reject invalid values for constructor', function () {
        it('Should reject bad animal value', function() {
            function createCard() {
                return new Card('ostritch', 'maracas', 999, 999, 999, 999, 999, 999);
            }
    
            expect(() => createCard()).to.throw(Error, 'Invalid value for animal: ostritch');
        });

        it('Should reject bad present value', function() {
            function createCard() {
                return new Card(ANIMALS.panda, 'maracas', 999, 999, 999, 999, 999, 999);
            }
    
            expect(() => createCard()).to.throw(Error, 'Invalid value for present: maracas');
        });

        it('Should reject bad color value', function() {
            function createCard() {
                return new Card(ANIMALS.panda, PRESENTS.balloons, 999, 999, 999, 999, 999, 999);
            }
    
            expect(() => createCard()).to.throw(Error, 'Invalid value for colors: 999,999,999,999,999,999');
        });
        
    });

    describe('Test constructor values validations', function () {
        it('should reject invalid animal values', function () {
            assert.isFalse(Card.validateAgainstConstantValues(ANIMALS, 'dingo'));
            assert.isTrue(Card.validateAgainstConstantValues(ANIMALS, ANIMALS.panda));
        });

        it('should reject invalid present values', function () {
            assert.isFalse(Card.validateAgainstConstantValues(PRESENTS, 'jack in the box'));
            assert.isTrue(Card.validateAgainstConstantValues(PRESENTS, PRESENTS.balloons));
        });

        it('should reject invalid colors values', function () {
            assert.isFalse(Card.validateAgainstConstantValues(COLORS, ['magenta']));
            assert.isTrue(Card.validateAgainstConstantValues(COLORS, [COLORS.blue]));
        });
    });
});