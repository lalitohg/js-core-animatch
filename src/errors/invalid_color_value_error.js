export class InvalidColorValueError extends Error{
    constructor(colors) {
        const message = `Invalid value for colors: ${colors.join()}`;
        super(message);
    }
}