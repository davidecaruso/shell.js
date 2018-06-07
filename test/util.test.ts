import * as Util from '../src/js/util';
import { expect } from 'chai';
const JSDOM = (require("jsdom")).JSDOM;
let document;

describe('Util', () => {
    it('should be not empty', () => {
        expect(Util).to.be.not.empty;
    });

    describe('$ function', () => {
        before(() => {
            document = new JSDOM(`<body><div class="foo"><p class="bar">Foobar</p></div></body>`).window.document;
        });
        it('should exist', () => {
            expect(Util.$).exist;
        });
        it('should return value which has "length" property', () => {
            expect("length" in Util.$('random-string', document)).to.true;
        });
        it('should return value which has 0 as value of "length" property', () => {
            expect(Util.$('random-string', document).length).to.be.equal(0);
        });
        it('should return value which has 1 as value of "length" property', () => {
            expect(Util.$('.foo', document).length).to.be.equal(1);
        });
        it('should return value which has one element', () => {
            expect(Util.$('.foo', document)[0]).exist;
        });
        it('should return value which has the expected HTML element', () => {
            expect(Util.$('.foo', document)[0].innerHTML).to.be.equal('<p class="bar">Foobar</p>');
        });
        it('should return value which has the expected HTML element passing also the "parent" selector', () => {
            let parent = Util.$('.foo', document)[0];
            expect(Util.$('.bar', parent)[0].innerHTML).to.be.equal('Foobar');
        });
    });
});

