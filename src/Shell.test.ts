import { expect } from 'chai'
import { JSDOM } from 'jsdom'
import Shell from './Shell'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GLOBAL: any = global
GLOBAL.window = new JSDOM(`<!doctype html><html><body></body></html>`).window
GLOBAL.document = window.document

describe('Shell', () => {
    describe('init', () => {
        describe('with a wrong element selector ', () => {
            it('should throw error', () => {
                expect(() => Shell('wrong-selector')).to.throw(`Invalid selector given "wrong-selector"`)
                expect(document.body.innerHTML).to.be.equal('')
            })
        })

        describe('with a valid element selector', () => {
            let div: Element
            const id = 'shell'
            const selector = `#${id}`

            beforeEach(() => {
                div = document.createElement('div')
                div.setAttribute('id', id)
                document.body.appendChild(div)
            })

            describe('with default configuration', () => {
                it('should apply default configuration', () => {
                    expect(Shell(selector)).to.not.be.undefined
                    expect(div.classList.contains('shell')).to.be.true
                    expect(div.classList.contains('shell--default')).to.be.true
                    expect(div.classList.contains('shell--dark')).to.be.true
                    expect(div.classList.contains('shell--responsive')).to.be.true
                    expect(div.classList.contains('shell--shadow')).to.be.true
                    expect(!div.classList.contains('shell--typed')).to.be.true
                    expect(
                        document.body.querySelectorAll(
                            `#${id}.shell.shell--default.shell--dark.shell--responsive.shell--shadow`
                        )[0]
                    ).to.not.be.undefined
                })
            })

            afterEach(() => {
                document.body.removeChild(div)
            })
        })
    })

    describe('type', () => {
        let div: Element
        const id = 'shell'
        const selector = `#${id}`

        beforeEach(() => {
            div = document.createElement('div')
            div.setAttribute('id', id)
            document.body.appendChild(div)
        })

        it('should print correct number o commands (plus idle)', () => {
            const shell = Shell(selector)
            shell.type(['foo', 'bar', 'baz'])

            expect(document.body.querySelectorAll(`#${id} .line`).length).to.be.equal(3 + 1)
        })

        afterEach(() => {
            document.body.removeChild(div)
        })
    })

    describe('clear', () => {
        let div: Element
        const id = 'shell'
        const selector = `#${id}`

        beforeEach(() => {
            div = document.createElement('div')
            div.setAttribute('id', id)
            document.body.appendChild(div)
        })

        it('should clear all previous command (except for idle)', () => {
            const shell = Shell(selector)

            shell.type(['foo', 'bar', 'baz'])

            expect(document.body.querySelectorAll(`#${id} .line`).length).to.be.equal(3 + 1)

            shell.clear()

            expect(document.body.querySelectorAll(`#${id} .line`).length).to.be.equal(1)
        })

        afterEach(() => {
            document.body.removeChild(div)
        })
    })
})
