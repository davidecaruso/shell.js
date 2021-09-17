import * as Util from "../src/utils";
import {expect} from "chai";

const JSDOM = (require("jsdom")).JSDOM;
let document;

describe("Util", () => {

    it("should be not empty", () => {
        expect(Util).to.be.not.empty;
    });

    describe("\"$\" function", () => {
        before(() => {
            document = new JSDOM(`<body><div class="foo"><p class="bar">Foobar</p></div></body>`).window.document;
        });
        it("should exist", () => {
            expect(Util.$).exist;
        });
        context("when selector doesn\'t exist inside the DOM", () => {
            it("should return value which has \"length\" property", () => {
                expect("length" in Util.$("wrong-selector", document)).to.true;
            });
            it("should return value which has 0 as value of \"length\" property", () => {
                expect(Util.$("wrong-selector", document).length).to.be.equal(0);
            });
        });
        context("when selector exists inside the DOM", () => {
            it("should return value which has 1 as value of \"length\" property", () => {
                expect(Util.$(".foo", document).length).to.be.equal(1);
            });
            it("should return value which has one element", () => {
                expect(Util.$(".foo", document)[0]).exist;
            });
            it("should return value which has the expected HTML element", () => {
                expect(Util.$(".foo", document)[0].innerHTML).to.be.equal(`<p class="bar">Foobar</p>`);
            });
        });
        context("when selector exists inside another element", () => {
            it("should return value which has the expected HTML element passing also the \"parent\" selector", () => {
                let parent = Util.$(".foo", document)[0];
                expect(Util.$(".bar", parent)[0].innerHTML).to.be.equal("Foobar");
            });
        });
        after(() => {
            document = null;
        });
    });

    describe("\"strPad\" function", () => {
        it("should exist", () => {
            expect(Util.strPad).exist;
        });
        context("when invoked without type", () => {
            it("should return a right-padded string", () => {
                expect(Util.strPad("bar", 9, "foo")).to.equal("barfoofoo");
            });
        });
        context("when invoked with \"STR_PAD_RIGHT\" type", () => {
            it("should return a right-padded string", () => {
                expect(Util.strPad("bar", 9, "foo", Util.PadType.STR_PAD_RIGHT)).to.equal("barfoofoo");
            });
        });
        context("when invoked with \"STR_PAD_LEFT\" type", () => {
            it("should return a left-padded string", () => {
                expect(Util.strPad("bar", 9, "foo", Util.PadType.STR_PAD_LEFT)).to.equal("foofoobar");
            });
        });
        context("when invoked with \"STR_PAD_BOTH\" type", () => {
            it("should return a both-padded string", () => {
                expect(Util.strPad("bar", 9, "foo", Util.PadType.STR_PAD_BOTH)).to.equal("foobarfoo");
            });
        });
    });
});

