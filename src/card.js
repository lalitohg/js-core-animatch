import { ANIMALS, PRESENTS, COLORS } from './constants';
import { InvalidAnimalValueError } from './errors/invalid_animal_value_error';
import { InvalidPresentValueError } from './errors/invalid_present_value_error';
import { InvalidColorValueError } from './errors/invalid_color_value_error';

export class Card {
    constructor(
        animal,
        present,
        hatColor,
        eyeGlassesColor,
        scarfColor,
        topColor,
        bottomColor,
        shoesColor
    ) {
        if (!Card.validateAgainstConstantValues(ANIMALS, animal)) {
            throw new InvalidAnimalValueError(animal);
        }

        if (!Card.validateAgainstConstantValues(PRESENTS, present)) {
            throw new InvalidPresentValueError(present);
        }

        if (
            !Card.validateAgainstConstantValues(COLORS, [
                hatColor,
                eyeGlassesColor,
                scarfColor,
                topColor,
                bottomColor,
                shoesColor
            ])
        ) {
            throw new InvalidColorValueError([
                hatColor,
                eyeGlassesColor,
                scarfColor,
                topColor,
                bottomColor,
                shoesColor
            ]);
        }

        Object.assign(this, {
            animal,
            present,
            hatColor,
            eyeGlassesColor,
            scarfColor,
            topColor,
            bottomColor,
            shoesColor
        });
    }

    static validateAgainstConstantValues(constantSet, valueToCheck) {
        const expectedValues = Object.values(constantSet);
        if (!Array.isArray(valueToCheck)) {
            let valueFoundIndex = expectedValues.indexOf(valueToCheck);
            if (valueFoundIndex < 0) {
                return false;
            }
        } else {
            let invalidValues = [];
            valueToCheck.forEach(value => {
                if (expectedValues.indexOf(value) < 0) {
                    invalidValues.push(value);
                }
            });
            if (invalidValues.length > 0) {
                return false;
            }
        }

        return true;
    }

    static validateCardSet(cards) {
        const validType = Array.isArray(cards);
        let validContentType = true;
        if (cards.length > 0) {
            for (let i = cards.length - 1; i >= 0; i--) {
                if (!(cards[i] instanceof Card)) {
                    validContentType = false;
                    break;
                }
            }
        }
        return validType && validContentType;
    }
}
