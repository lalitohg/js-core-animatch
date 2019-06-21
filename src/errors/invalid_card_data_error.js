export class InvalidCardDataError extends Error {
    constructor(stringifiedData) {
        const message = `Invalid cards data ${stringifiedData}`;
        super(message);
    }
}
