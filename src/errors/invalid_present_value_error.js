export class InvalidPresentValueError extends Error {
    constructor(value) {
        const message = `Invalid value for present: ${value}`;
        super(message);
    }
}
