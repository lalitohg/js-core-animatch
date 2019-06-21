import { assert, expect, should } from 'chai';
should();

import { Card } from '../src/card';
import { COLORS, ANIMALS, PRESENTS } from '../src/constants';
import {InvalidAnimalValueError} from '../src/errors/invalid_animal_value_error';
import {InvalidColorValueError} from '../src/errors/invalid_color_value_error';
import {InvalidPresentValueError} from '../src/errors/invalid_present_value_error';

function createCard(animal, present, hat, eyeglasses, scarf, top, bottom, shoes){
    return new Card(animal, present, hat, eyeglasses, scarf, top, bottom, shoes);
}

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
            expect(() => createCard('ostritch', 'maracas', 999, 999, 999, 999, 999, 999)).to.throw(InvalidAnimalValueError, 'Invalid value for animal: ostritch');
        });

        it('Should reject bad present value', function() {
            expect(() => createCard(ANIMALS.panda, 'maracas', 999, 999, 999, 999, 999, 999)).to.throw(InvalidPresentValueError, 'Invalid value for present: maracas');
        });

        it('Should reject bad color value', function() {
            expect(() => createCard(ANIMALS.panda, PRESENTS.balloons, 999, 999, 999, 999, 999, 999)).to.throw(InvalidColorValueError, 'Invalid value for colors: 999,999,999,999,999,999');
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