import { expect } from 'chai'
import { JSDOM } from 'jsdom'
import Shell from '../src/Shell'

const GLOBAL: any = global
GLOBAL.window = new JSDOM(`<!doctype html><html><body></body></html>`).window
GLOBAL.document = window.document

describe('Shell', () => {
    describe('with a wrong element selector ', () => {
        it('should throw error', () => {
            expect(() => Shell('wrong-selector', [])).to.throw(`Not found: invalid selector given "wrong-selector"`)
            expect(document.body.innerHTML).to.be.equal('')
        })
    })

    describe('with a valid element selector', () => {
        let div: any
        const id = 'shell'
        const selector = `#${id}`

        beforeEach(() => {
            div = document.createElement('div')
            div.setAttribute('id', id)
            document.body.appendChild(div)
        })

        describe('with default configuration', () => {
            it('should apply default configuration', () => {
                expect(Shell(selector, [])).to.not.be.undefined
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
