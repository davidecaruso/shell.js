let expect = require('chai').expect;
let Helpers;
describe('Helpers', () => {
    before(() => {
        Helpers = require('../src/js/helpers')
    });

    describe('str_pad()', () => {
        context('when invoked', () => {
            it('should return a right-padded string', () => {
                expect(Helpers.str_pad('bar', 9, 'foo')).to.equal('barfoofoo');
            });
        });
        context('when invoked with "STR_PAD_LEFT"', () => {
            it('should return a left-padded string', () => {
                expect(Helpers.str_pad('bar', 9, 'foo', 'STR_PAD_LEFT')).to.equal('foofoobar');
            });
        });
        context('when invoked with "STR_PAD_BOTH"', () => {
            it('should return a both-padded string', () => {
                expect(Helpers.str_pad('bar', 9, 'foo', 'STR_PAD_BOTH')).to.equal('foobarfoo');
            });
        });
    });
});