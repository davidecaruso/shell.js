import {should} from "should";
import {expect} from "chai";
import Typed from "typed.js";
const JSDOM = (require("jsdom")).JSDOM;
const GLOBAL:any = global;
GLOBAL.window = new JSDOM(`<!doctype html><html><body></body></html>`).window;
GLOBAL.document = window.document;
let Shell = require("../src/js/main");

describe("Shell", () => {
    it("should initialize without error", () => {
        expect(new Shell()).to.be.an.instanceof(Shell);
    });

    describe("\"el\" property", () => {
        context("when no CSS selector is passed", () => {
            it("should not exist", () => {
                expect(new Shell()).to.not.have.property("el");
            });
        });

        context("when CSS selector of unexisting element is passed", () => {
            it("should not exist", () => {
                expect(new Shell("wrong-selector")).to.not.have.property("el");
            });
        });

        context("when CSS selector of existing element is passed", () => {
            let div;

            before(() => {
                div = document.createElement("div");
                div.setAttribute("id", "shell");
                document.body.appendChild(div);
            });

            it("should exist", () => {
                expect(new Shell("#shell")).to.have.property("el");
            });

            it("should be equal to the DOM element", () => {
                let shell = new Shell("#shell");
                expect(shell.el).to.not.be.undefined;
                expect(shell.el).to.equal(div);
            });

            describe("HTML element", () => {
                it("should have classes", () => {
                    expect(div.classList.contains("shell")).to.be.true;
                });
            });

            after(() => {
                document.body.removeChild(div);
            });
        });
    });

    describe("\"options\" property", () => {
        it("should exist", () => {
            expect(new Shell()).to.have.property("options");
        });

        it("should be not empty", () => {
            expect(new Shell()).to.have.property("options").that.is.not.empty;
        });

        it("should have own properties", () => {
            expect(new Shell().options).to.have.all.keys(
                "commands",
                "host",
                "path",
                "responsive",
                "root",
                "style",
                "theme",
                "typed",
                "user"
            );
        });

        context("when no options have been passed", () => {
            let shell;
            before(() => {
                shell = new Shell();
            });
            it("should have default values for properties", () => {
                expect(shell.options.commands).to.be.an("array").that.is.empty;
                expect(shell.options.host).to.be.a("string").that.is.equal("host");
                expect(shell.options.path).to.be.a("string").that.is.equal("~");
                expect(shell.options.responsive).to.be.a("boolean").that.is.true;
                expect(shell.options.root).to.be.a("boolean").that.is.false;
                expect(shell.options.style).to.be.a("string").that.is.equal("default");
                expect(shell.options.typed).to.be.null;
                expect(shell.options.user).to.be.a("string").that.is.equal("user");
            });
        });

        context("when options have been passed", () => {
            let div, shell;

            before(() => {
                div = document.createElement("div");
                div.setAttribute("id", "shell");
                document.body.appendChild(div);
            });

            describe("\"options.style\" property", () => {
                context("case \"default\"", () => {
                    before(() => {
                        shell = new Shell('#shell', {style: 'default'});
                    });

                    describe("HTML element", () => {
                        it("should have class", () => {
                            expect(div.classList.contains("default")).to.be.false;
                        });
                    });
                });
                context("case \"osx\"", () => {
                    before(() => {
                        shell = new Shell('#shell', {style: 'osx'});
                    });

                    describe("HTML element", () => {
                        it("should have class", () => {
                            expect(div.classList.contains("osx")).to.be.true;
                        });
                    });
                });

                context("case \"ubuntu\"", () => {
                    before(() => {
                        shell = new Shell('#shell', {style: 'ubuntu'});
                    });

                    describe("HTML element", () => {
                        it("should have class", () => {
                            expect(div.classList.contains("ubuntu")).to.be.true;
                        });
                    });
                });

                context("case \"windows\"", () => {
                    before(() => {
                        shell = new Shell('#shell', {style: 'windows'});
                    });

                    describe("HTML element", () => {
                        it("should have class", () => {
                            expect(div.classList.contains("windows")).to.be.true;
                        });
                    });
                });
            });

            describe("\"options.commands\" property", () => {
        //         context('when present', () => {
        //             it('should have commands', () => {
        //                 let shell = new Shell('#shell', {commands: ['foo', 'bar']});
        //                 expect(shell.options.commands.length).to.equal(2);
        //             });
        //             context('when one command contains "sudo"', () => {
        //                 context('if style is "ubuntu" or "default"', () => {
        //                     it('should print an additional line', () => {
        //                         let shell = new Shell('#shell', {style: 'ubuntu', commands: ['sudo']});
        //                         expect(shell.el[0].innerHTML).to.match(/class="command output">\[sudo\] password/);
        //                     });
        //                 });
        //                 context('if style is "osx"', () => {
        //                     it('should print an additional line', () => {
        //                         let shell = new Shell('#shell', {style: 'osx', commands: ['sudo']});
        //                         expect(shell.el[0].innerHTML).to.match(/class="command output">Password:/);
        //                     });
        //                 });
        //                 context('if style is "windows"', () => {
        //                     it('should print an additional line', () => {
        //                         let shell = new Shell('#shell', {style: 'windows', commands: ['sudo']});
        //                         expect(shell.el[0].innerHTML).to.match(/class="command output">bash: sudo: command not found/);
        //                     });
        //                 });
        //             });
        //             context('when one command contains "exit"', () => {
        //                 context('if style is "windows"', () => {
        //                     it('should print an additional line', () => {
        //                         let shell = new Shell('#shell', {style: 'windows', commands: ['exit']});
        //                         expect(shell.el[0].innerHTML).to.match(/class="command output">bash: exit: command not found</);
        //                     });
        //                 });
        //                 context('else', () => {
        //                     it('should print an additional line', () => {
        //                         let shell = new Shell('#shell', {commands: ['exit']});
        //                         expect(shell.el[0].innerHTML).to.match(/class="command output">logout</);
        //                     });
        //                 });
        //             });
        //         });
        //     });
        //
        //     describe('Responsive', () => {
        //         context('when true', () => {
        //             it('element should have "responsive" class', () => {
        //                 let shell = new Shell('#shell', {responsive: true});
        //                 expect(shell.el[0].className).to.contains('responsive');
        //             });
        //         });
        //     });
        //
        //     describe('Root', () => {
        //         context('when true', () => {
        //             it('user prefix should be root', () => {
        //                 let shell = new Shell('#shell', {root: true});
        //                 expect(shell.buildPrefix()).to.match(/class="user">root@<\//);
        //             });
        //         });
        //     });
        //
        //     describe('Typed', () => {
        //         context('when is not false', () => {
        //             it('should be a function', () => {
        //                 let shell = new Shell('#shell', {typed: Typed});
        //             });
        //             context('when there are commands', () => {
        //                 it('should be invoked', () => {
        //                     let shell = new Shell('#shell', {typed: Typed, commands: ['foo', 'bar', 'sudo foobar']});
        //                 });
        //             });
        //         });
            });

            after(() => {
                document.body.removeChild(div);
            });
        });
    });

    // describe('Methods', () => {
    //     describe('buildStatusBar()', () => {
    //         context('when invoked', () => {
    //             it('should return HTML string', () => {
    //                 expect(typeof (new Shell()).buildStatusBar()).to.equal('string');
    //             });
    //         });
    //     });
    //     describe('buildContent()', () => {
    //         context('when invoked', () => {
    //             it('should return HTML string', () => {
    //                 expect(typeof (new Shell()).buildContent()).to.equal('string');
    //             });
    //         });
    //     });
    //     describe('buildLine()', () => {
    //         context('when invoked', () => {
    //             it('should return HTML string', () => {
    //                 expect(typeof (new Shell()).buildLine()).to.equal('string');
    //             });
    //         });
    //     });
    //     describe('buildPrefix()', () => {
    //         context('when invoked', () => {
    //             it('should return HTML string', () => {
    //                 expect(typeof (new Shell()).buildPrefix()).to.equal('string');
    //             });
    //         });
    //     });
    // });
});
