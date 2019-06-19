import { InvalidCardDataError } from '../src/errors/invalid_card_data_error';
import { assert, expect, should } from 'chai';
should();

describe('Test Custom errors', function() {
    describe('Test InvalidCardDataError', function() {
        it('should display expected error message', function() {
            const error = new InvalidCardDataError('{foo:1}');
            expect(error).to.have.property('message');
            expect(error.message).to.equal('Invalid cards data {foo:1}');
        });
    });
    
});
