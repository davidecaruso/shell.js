import { expect } from 'chai'
import { Config, defaultConfig } from '../src/Config'
import { buildStatusBar } from '../src/StatusBar'

describe('StatusBar', () => {
    describe('buildStatusBar', () => {
        describe('with "ubuntu" engine', () => {
            const config: Config = { ...defaultConfig, style: { ...defaultConfig.style, engine: 'ubuntu' } }
            it('should generate correct status bar', () => {
                expect(buildStatusBar(config)).to.be.equal(
                    '<div class="shell__status-bar">' +
                        '<div class="status-bar__icon"></div>' +
                        '<div class="status-bar__buttons">' +
                        '<button class="button button--close"><i class="icon-close"></i></button>' +
                        '<button class="button button--minimize"><i class="icon-minimize"></i></button>' +
                        '<button class="button button--enlarge"><i class="icon-enlarge"></i></button>' +
                        '</div>' +
                        '<div class="status-bar__title">user@host: ~</div>' +
                        '</div>'
                )
            })
        })
        describe('with "macos" engine', () => {
            const config: Config = { ...defaultConfig, style: { ...defaultConfig.style, engine: 'macos' } }
            it('should generate correct status bar', () => {
                expect(buildStatusBar(config)).to.be.equal(
                    '<div class="shell__status-bar">' +
                        '<div class="status-bar__icon"></div>' +
                        '<div class="status-bar__buttons">' +
                        '<button class="button button--close"><i class="icon-dot"></i></button>' +
                        '<button class="button button--minimize"><i class="icon-minimize"></i></button>' +
                        '<button class="button button--enlarge"><i class="icon-enlarge"></i></button>' +
                        '</div>' +
                        '<div class="status-bar__title">user &ndash; sh &ndash; 80x24</div>' +
                        '</div>'
                )
            })
        })
        describe('with "default" engine', () => {
            const config: Config = { ...defaultConfig, style: { ...defaultConfig.style, engine: 'default' } }
            it('should generate correct status bar', () => {
                expect(buildStatusBar(config)).to.be.equal(
                    '<div class="shell__status-bar">' +
                        '<div class="status-bar__icon"></div>' +
                        '<div class="status-bar__buttons">' +
                        '<button class="button button--close"><i class="icon-close"></i></button>' +
                        '<button class="button button--minimize"><i class="icon-minimize"></i></button>' +
                        '<button class="button button--enlarge"><i class="icon-enlarge"></i></button>' +
                        '</div>' +
                        '<div class="status-bar__title">user@host: ~</div>' +
                        '</div>'
                )
            })
        })
        describe('with "windows" engine', () => {
            const config: Config = { ...defaultConfig, style: { ...defaultConfig.style, engine: 'windows' } }
            it('should generate correct status bar', () => {
                expect(buildStatusBar(config)).to.be.equal(
                    '<div class="shell__status-bar">' +
                        '<div class="status-bar__icon"><i class="icon-command"></i></div>' +
                        '<div class="status-bar__buttons">' +
                        '<button class="button button--minimize"><i class="icon-minimize"></i></button>' +
                        '<button class="button button--enlarge"><i class="icon-enlarge"></i></button>' +
                        '<button class="button button--close"><i class="icon-close"></i></button>' +
                        '</div>' +
                        '<div class="status-bar__title">Command Prompts</div>' +
                        '</div>'
                )
            })
        })
    })
})
