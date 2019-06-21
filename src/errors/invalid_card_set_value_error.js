export class InvalidCardSetValueError extends Error {
    constructor(value) {
        value = JSON.stringify(value);
        super(`Invalid cards set value. Expecting [Card] and got: ${value}`);
    }
}
