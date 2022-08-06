import { expect } from 'chai'
import {
    defaultConfig,
    hasShadow,
    isDefault,
    isMacOs,
    isResponsive,
    isRoot,
    isTyped,
    isUbuntu,
    isWindows,
} from './Config'

describe('Config', () => {
    describe('defaultConfig', () => {
        it('should be equal to the given', () => {
            expect(defaultConfig).to.be.deep.equal({
                user: 'user',
                host: 'host',
                path: '~',
                root: false,
                style: {
                    engine: 'default',
                    responsive: true,
                    shadow: true,
                    theme: 'dark',
                },
                typing: undefined,
            })
        })
    })

    describe('isTyped', () => {
        it('should return correct value', () => {
            expect(isTyped({})).to.be.false
            expect(isTyped({ typing: undefined })).to.be.false
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            expect(isTyped({ typing: { ctor: (() => {}) as never } })).to.be.true
        })
    })

    describe('isRoot', () => {
        it('should return correct value', () => {
            expect(isRoot({})).to.be.false
            expect(isRoot({ root: false })).to.be.false
            expect(isRoot({ root: true })).to.be.true
        })
    })

    describe('isResponsive', () => {
        it('should return correct value', () => {
            expect(isResponsive({})).to.be.false
            expect(isResponsive({ style: { responsive: false } })).to.be.false
            expect(isResponsive({ style: { responsive: true } })).to.be.true
        })
    })

    describe('isWindows', () => {
        it('should return correct value', () => {
            expect(isWindows({})).to.be.false
            expect(isWindows({ style: { engine: 'ubuntu' } })).to.be.false
            expect(isWindows({ style: { engine: 'windows' } })).to.be.true
        })
    })

    describe('isMacOs', () => {
        it('should return correct value', () => {
            expect(isMacOs({})).to.be.false
            expect(isMacOs({ style: { engine: 'ubuntu' } })).to.be.false
            expect(isMacOs({ style: { engine: 'macos' } })).to.be.true
        })
    })

    describe('isUbuntu', () => {
        it('should return correct value', () => {
            expect(isUbuntu({})).to.be.false
            expect(isUbuntu({ style: { engine: 'macos' } })).to.be.false
            expect(isUbuntu({ style: { engine: 'ubuntu' } })).to.be.true
        })
    })

    describe('isDefault', () => {
        it('should return correct value', () => {
            expect(isDefault({})).to.be.false
            expect(isDefault({ style: { engine: 'ubuntu' } })).to.be.false
            expect(isDefault({ style: { engine: 'default' } })).to.be.true
        })
    })

    describe('hasShadow', () => {
        it('should return correct value', () => {
            expect(hasShadow({})).to.be.false
            expect(hasShadow({ style: { shadow: false } })).to.be.false
            expect(hasShadow({ style: { shadow: true } })).to.be.true
        })
    })
})
