let should = require('should');
let expect = require('chai').expect;
let jsdom = require('jsdom');
let {JSDOM} = jsdom;
let Shell;
describe('Shell', () => {
    let {document} = (new JSDOM('<!doctype html><html><body></body></html>')).window;
    global.document = document;
    global.window = document.defaultView;

    before(() => {
        Shell = require('../src/js/shell');
    });

    it('should initialize without error', () => {
        (() => expect(new Shell()).to.be.an.instanceof(Shell) ).should.not.throw();
    });

    describe('Element', () => {
        context('when not present', () => {
            it('should be empty', () => {
                expect(new Shell()).to.have.property('el', null);
            });
        });

        context('when present', () => {
            let div;
            let shell;

            before(() => {
                div = document.createElement('div');
                div.setAttribute('id', 'shell');
                document.body.appendChild(div);
                shell = new Shell('#shell');
            });

            it('should be the DOM object of the element', () => {
                expect(shell.el[0]).to.not.be.undefined;
                expect(shell.el[0]).to.equal(div);
            });
        });
    });
});