import {expect} from "chai";
import * as Typed from "typed.js";

const JSDOM = (require("jsdom")).JSDOM;
const GLOBAL: any = global;
GLOBAL.window = new JSDOM(`<!doctype html><html><body></body></html>`).window;
GLOBAL.document = window.document;

let Shell = require("../src/main");

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

        context("when not have been passed", () => {
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
                expect(shell.options.typed).to.be.undefined;
                expect(shell.options.user).to.be.a("string").that.is.equal("user");
            });
        });

        context("when have been passed", () => {
            let div, shell;

            before(() => {
                div = document.createElement("div");
                div.setAttribute("id", "shell");
                document.body.appendChild(div);
            });

            describe("\"options.style\" property", () => {
                describe("HTML element", () => {
                    context("when style is \"default\"", () => {
                        before(() => {
                            shell = new Shell('#shell', {style: 'default'});
                        });

                        it("should not have \"default\" class", () => {
                            expect(div.classList.contains("default")).to.be.false;
                        });
                    });

                    context("when style is \"osx\"", () => {
                        before(() => {
                            shell = new Shell('#shell', {style: 'osx'});
                        });

                        it("should have \"shell--osx\" class", () => {
                            expect(div.classList.contains("shell--osx")).to.be.true;
                        });
                    });

                    context("when style is \"ubuntu\"", () => {
                        before(() => {
                            shell = new Shell('#shell', {style: 'ubuntu'});
                        });

                        it("should have \"shell--ubuntu\" class", () => {
                            expect(div.classList.contains("shell--ubuntu")).to.be.true;
                        });
                    });

                    context("when style is \"windows\"", () => {
                        before(() => {
                            shell = new Shell('#shell', {style: 'windows'});
                        });

                        it("should have \"shell--windows\" class", () => {
                            expect(div.classList.contains("shell--windows")).to.be.true;
                        });
                    });
                });
            });

            describe("\"options.commands\" property", () => {
                context("when have been passed", () => {
                    it("should be the as same number", () => {
                        shell = new Shell("#shell", {commands: ["foo", "bar"]});
                        expect(shell.options.commands.length).to.equal(2);
                    });
                    it("should be the same", () => {
                        shell = new Shell("#shell", {commands: ["foo", "bar"]});
                        expect(shell.options.commands[0]).to.equal("foo");
                        expect(shell.options.commands[1]).to.equal("bar");
                    });
                });
            });

            describe("\"options.responsive\" property", () => {
                context("when is true", () => {
                    describe("HTML element", () => {
                        it("should have \"shell--responsive\" class", () => {
                            shell = new Shell('#shell', {responsive: true});
                            expect(div.classList.contains("shell--responsive")).to.be.true;
                        });
                    });
                });
            });

            describe("\"options.typed\" property", () => {
                context('when is not false', () => {
                    describe("HTML element", () => {
                        it("should have \"shell--typed\" class", () => {
                            shell = new Shell('#shell', {typed: Typed, commands: ['foo']});
                            expect(div.classList.contains("shell--typed")).to.be.true;
                        });
                    });
                });
            });

            after(() => {
                document.body.removeChild(div);
            });
        });
    });
});
