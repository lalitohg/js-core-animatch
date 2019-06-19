export class InvalidAnimalValueError extends Error{
    constructor(value) {
        const message = `Invalid value for animal: ${value}`;
        super(message);
    }
}