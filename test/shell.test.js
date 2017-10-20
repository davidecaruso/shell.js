let should = require('should');
let expect = require('chai').expect;
let jsdom = require('jsdom');
let {JSDOM} = jsdom;
let Typed;
let Shell;
let Defaults;

describe('Shell', () => {
    let {document} = (new JSDOM('<!doctype html><html><body></body></html>')).window;
    global.document = document;
    global.window = document.defaultView;

    before(() => {
        Typed = require('typed.js');
        Shell = require('../src/js/shell');
        Defaults = require('../src/js/defaults')
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

    describe('Options', () => {
        context('when not present', () => {
            it('should be not empty', () => {
                expect(new Shell()).to.have.property('options').that.is.not.empty;
            });
            it('should be equal to default options', () => {
                expect(new Shell().options).to.deep.equal(Defaults.default);
            });
        });

        context('when present', () => {
            let div;
            before(() => {
                div = document.createElement('div');
                div.setAttribute('id', 'shell');
                document.body.appendChild(div);
            });

            describe('Style', () => {
                context('when is "default"', () => {
                    it('line prefix character should be "$"', () => {
                        let shell = new Shell('#shell');
                        expect(shell.buildPrefix()).to.match(/class="char">\$<\//);
                    });
                });
                context('when is "osx"', () => {
                    it('line prefix character should be "$"', () => {
                        let shell = new Shell('#shell', {style: 'osx'});
                        expect(shell.buildPrefix()).to.match(/class="char">\$<\//);
                    });
                });
                context('when is "ubuntu"', () => {
                    it('line prefix character should be "$"', () => {
                        let shell = new Shell('#shell', {style: 'ubuntu'});
                        expect(shell.buildPrefix()).to.match(/class="char">\$<\//);
                    });
                });
                context('when is "windows"', () => {
                    it('line prefix character should be ">"', () => {
                        let shell = new Shell('#shell', {style: 'windows'});
                        expect(shell.buildPrefix()).to.match(/class="char">&gt;<\//);
                    });
                    it('default path should be "C:\\Windows\\system32\\"', () => {
                        let shell = new Shell('#shell', {style: 'windows'});
                        expect(shell.options.style).to.equal('windows');
                        expect(shell.options.path).to.equal('C:\\Windows\\system32\\');
                    });
                });
            });

            describe('Commands', () => {
                context('when present', () => {
                    it('should have commands', () => {
                        let shell = new Shell('#shell', {commands: ['foo', 'bar']});
                        expect(this.options.commands).to.contains('responsive');
                    });
                });
            });

            describe('Responsive', () => {
                context('when true', () => {
                    it('element should have "responsive" class', () => {
                        let shell = new Shell('#shell', {responsive: true});
                        expect(shell.el[0].className).to.contains('responsive');
                    });
                });
            });

            describe('Root', () => {
                context('when true', () => {
                    it('user prefix should be root', () => {
                        let shell = new Shell('#shell', {root: true});
                        expect(shell.buildPrefix()).to.match(/class="user">root@<\//);
                    });
                });
            });

            describe('Typed', () => {
                context('when is not false', () => {
                    it('should be a function', () => {
                        let shell = new Shell('#shell', {typed: Typed});
                    });
                });
            });
        });
    });

    describe('Methods', () => {
        describe('buildStatusBar()', () => {
            context('when invoked', () => {
                it('should return HTML string', () => {
                    expect(typeof (new Shell()).buildStatusBar()).to.equal('string');
                });
            });
        });
        describe('buildContent()', () => {
            context('when invoked', () => {
                it('should return HTML string', () => {
                    expect(typeof (new Shell()).buildContent()).to.equal('string');
                });
            });
        });
        describe('buildLine()', () => {
            context('when invoked', () => {
                it('should return HTML string', () => {
                    expect(typeof (new Shell()).buildLine()).to.equal('string');
                });
            });
        });
        describe('buildPrefix()', () => {
            context('when invoked', () => {
                it('should return HTML string', () => {
                    expect(typeof (new Shell()).buildPrefix()).to.equal('string');
                });
            });
        });
    });
});