import { InvalidCardDataError } from '../src/errors/invalid_card_data_error';
import { InvalidAnimalValueError } from '../src/errors/invalid_animal_value_error';
import { InvalidPresentValueError } from '../src/errors/invalid_present_value_error';
import { InvalidColorValueError } from '../src/errors/invalid_color_value_error';
import { assert, expect, should } from 'chai';
should();

describe('Test Custom errors', function() {
    describe('Test InvalidCardDataError', function() {
        it('should display expected error message', function() {
            const cardDataMock = JSON.stringify({foo:1});
            const error = new InvalidCardDataError(cardDataMock);
            expect(error).to.have.property('message');
            expect(error.message).to.equal(`Invalid cards data ${cardDataMock}`);
        });
    });

    describe('Test InvalidAnimalValueError', function() {
        it('should display expected error message', function() {
            const animalValueMock = 'anaconda';
            const error = new InvalidAnimalValueError(animalValueMock);
            expect(error).to.have.property('message');
            expect(error.message).to.equal(`Invalid value for animal: ${animalValueMock}`);
        });
    });

    describe('Test InvalidPresentValueError', function() {
        it('should display expected error message', function() {
            const presentValueMock = 'anaconda';
            const error = new InvalidPresentValueError(presentValueMock);
            expect(error).to.have.property('message');
            expect(error.message).to.equal(`Invalid value for present: ${presentValueMock}`);
        });
    });

    describe('Test InvalidColorValueError', function() {
        it('should display expected error message', function() {
            const colorsValueMock = [99,99,99,99,99,99];
            const error = new InvalidColorValueError(colorsValueMock);
            expect(error).to.have.property('message');
            expect(error.message).to.equal(`Invalid value for colors: ${colorsValueMock.join()}`);
        });
    });
    
});
