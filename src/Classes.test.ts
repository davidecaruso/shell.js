import { expect } from 'chai'
import {
    buildClasses,
    buttonClass,
    cursorClass,
    lineClass,
    lineCommandClass,
    linePrefixClass,
    shellClass,
    shellContentClass,
    shellStatusBarClass,
    statusBarButtonsClass,
    statusBarIconClass,
    statusBarTitleClass,
} from './Classes'

describe('Classes', () => {
    describe('class names', () => {
        it('should be correct', () => {
            expect(shellClass).to.be.equal('shell')
            expect(shellStatusBarClass).to.be.equal('shell__status-bar')
            expect(statusBarButtonsClass).to.be.equal('status-bar__buttons')
            expect(statusBarIconClass).to.be.equal('status-bar__icon')
            expect(statusBarTitleClass).to.be.equal('status-bar__title')
            expect(shellContentClass).to.be.equal('shell__content')
            expect(lineClass).to.be.equal('line')
            expect(lineCommandClass).to.be.equal('line__command')
            expect(linePrefixClass).to.be.equal('line__prefix')
            expect(buttonClass).to.be.equal('button')
            expect(cursorClass).to.be.equal('typed-cursor')
        })
    })

    describe('buildClasses', () => {
        describe('without current classes', () => {
            it('should return correct classes', () => {
                expect(buildClasses({})()).to.be.deep.equal(['shell', 'shell--default', 'shell--dark'])
                expect(
                    buildClasses({ engine: 'macos', theme: 'light', shadow: true, responsive: false })()
                ).to.be.deep.equal(['shell', 'shell--macos', 'shell--light', 'shell--shadow'])
                expect(
                    buildClasses({ engine: 'windows', theme: 'dark', shadow: false, responsive: true })()
                ).to.be.deep.equal(['shell', 'shell--windows', 'shell--dark', 'shell--responsive'])
                expect(
                    buildClasses({ engine: 'ubuntu', theme: 'light', shadow: true, responsive: false })()
                ).to.be.deep.equal(['shell', 'shell--ubuntu', 'shell--light', 'shell--shadow'])
                expect(
                    buildClasses({ engine: 'ubuntu', theme: 'light', shadow: false, responsive: true })()
                ).to.be.deep.equal(['shell', 'shell--ubuntu', 'shell--light', 'shell--responsive'])
            })
        })
        describe('with current classes', () => {
            it('should return correct classes', () => {
                expect(buildClasses({})(['foo', 'bar', 'baz', 'shell'])).to.be.deep.equal([
                    'foo',
                    'bar',
                    'baz',
                    'shell',
                    'shell--default',
                    'shell--dark',
                ])
                expect(
                    buildClasses({ engine: 'macos', theme: 'light', shadow: true, responsive: false })([
                        'foo',
                        'bar',
                        'baz',
                    ])
                ).to.be.deep.equal(['foo', 'bar', 'baz', 'shell', 'shell--macos', 'shell--light', 'shell--shadow'])
                expect(
                    buildClasses({ engine: 'windows', theme: 'dark', shadow: false, responsive: true })([
                        'foo',
                        'bar',
                        'baz',
                    ])
                ).to.be.deep.equal(['foo', 'bar', 'baz', 'shell', 'shell--windows', 'shell--dark', 'shell--responsive'])
                expect(
                    buildClasses({ engine: 'ubuntu', theme: 'light', shadow: true, responsive: false })([
                        'foo',
                        'bar',
                        'baz',
                    ])
                ).to.be.deep.equal(['foo', 'bar', 'baz', 'shell', 'shell--ubuntu', 'shell--light', 'shell--shadow'])
                expect(
                    buildClasses({ engine: 'ubuntu', theme: 'light', shadow: false, responsive: true })([
                        'foo',
                        'bar',
                        'baz',
                    ])
                ).to.be.deep.equal(['foo', 'bar', 'baz', 'shell', 'shell--ubuntu', 'shell--light', 'shell--responsive'])
            })
        })
    })
})
