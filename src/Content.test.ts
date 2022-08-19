import { expect } from 'chai'
import { login } from './Command'
import { Config, defaultConfig } from './Config'
import { buildContent } from './Content'

describe('Content', () => {
    describe('buildContent', () => {
        describe('with list of string commands', () => {
            describe('with "default" engine', () => {
                it('should generate correct content', () => {
                    expect(buildContent(defaultConfig)(['foo', 'bar', 'baz'])).to.be.equal(
                        '<div class="shell__content">' +
                            '<div class="line ">' +
                            '<span class="line__command line__command--output"></span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command">foo</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command">bar</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command">baz</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command">' +
                            '<span class="typed-cursor">&nbsp;</span>' +
                            '</span>' +
                            '</div>' +
                            '</div>'
                    )
                })
            })
            describe('with "ubuntu" engine', () => {
                it('should generate correct content', () => {
                    expect(buildContent({ ...defaultConfig, engine: 'ubuntu' })(['foo', 'bar', 'baz'])).to.be.equal(
                        '<div class="shell__content">' +
                            '<div class="line ">' +
                            '<span class="line__command line__command--output"></span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command">foo</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command">bar</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command">baz</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command">' +
                            '<span class="typed-cursor">&nbsp;</span>' +
                            '</span>' +
                            '</div>' +
                            '</div>'
                    )
                })
            })
            describe('with "windows" engine', () => {
                it('should generate correct content', () => {
                    expect(buildContent({ ...defaultConfig, engine: 'windows' })(['foo', 'bar', 'baz'])).to.be.equal(
                        '<div class="shell__content">' +
                            '<div class="line ">' +
                            '<span class="line__command line__command--output"></span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="path">~</span>' +
                            '<span class="char">&gt;</span>' +
                            '</span>' +
                            '<span class="line__command">foo</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="path">~</span>' +
                            '<span class="char">&gt;</span>' +
                            '</span>' +
                            '<span class="line__command">bar</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="path">~</span>' +
                            '<span class="char">&gt;</span>' +
                            '</span>' +
                            '<span class="line__command">baz</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="path">~</span>' +
                            '<span class="char">&gt;</span>' +
                            '</span>' +
                            '<span class="line__command">' +
                            '<span class="typed-cursor">&nbsp;</span>' +
                            '</span>' +
                            '</div>' +
                            '</div>'
                    )
                })
            })
            describe('with "macos" engine', () => {
                it('should generate correct content', () => {
                    const config: Config = { ...defaultConfig, engine: 'macos' }
                    expect(buildContent(config)(['foo', 'bar', 'baz'])).to.be.equal(
                        '<div class="shell__content">' +
                            '<div class="line ">' +
                            '<span class="line__command line__command--output">' +
                            login(config)(new Date()).value +
                            '</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command">foo</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command">bar</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command">baz</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command">' +
                            '<span class="typed-cursor">&nbsp;</span>' +
                            '</span>' +
                            '</div>' +
                            '</div>'
                    )
                })
            })
        })

        describe('with sudo/exec commands', () => {
            describe('with "default" engine', () => {
                it('should generate correct content', () => {
                    expect(buildContent(defaultConfig)(['foo', 'sudo', 'bar', 'exit', 'baz'])).to.be.equal(
                        '<div class="shell__content">' +
                            '<div class="line ">' +
                            '<span class="line__command line__command--output"></span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command">foo</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command">sudo</span>' +
                            '</div>' +
                            '<div class="line line--root">' +
                            '<span class="line__command line__command--output">[sudo] password for user:</span>' +
                            '</div>' +
                            '<div class="line line--root">' +
                            '<span class="line__prefix">' +
                            '<span class="user">root@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">#</span>&nbsp;</span>' +
                            '<span class="line__command">bar</span>' +
                            '</div>' +
                            '<div class="line line--root">' +
                            '<span class="line__prefix">' +
                            '<span class="user">root@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">#</span>&nbsp;</span>' +
                            '<span class="line__command">exit</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__command line__command--output">logout</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command">baz</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command">' +
                            '<span class="typed-cursor">&nbsp;</span>' +
                            '</span>' +
                            '</div>' +
                            '</div>'
                    )
                })
            })
            describe('with "ubuntu" engine', () => {
                it('should generate correct content', () => {
                    expect(
                        buildContent({ ...defaultConfig, engine: 'ubuntu' })(['foo', 'sudo', 'bar', 'exit', 'baz'])
                    ).to.be.equal(
                        '<div class="shell__content">' +
                            '<div class="line ">' +
                            '<span class="line__command line__command--output"></span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command">foo</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command">sudo</span>' +
                            '</div>' +
                            '<div class="line line--root">' +
                            '<span class="line__command line__command--output">[sudo] password for user:</span>' +
                            '</div>' +
                            '<div class="line line--root">' +
                            '<span class="line__prefix">' +
                            '<span class="user">root@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">#</span>&nbsp;</span>' +
                            '<span class="line__command">bar</span>' +
                            '</div>' +
                            '<div class="line line--root">' +
                            '<span class="line__prefix">' +
                            '<span class="user">root@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">#</span>&nbsp;</span>' +
                            '<span class="line__command">exit</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__command line__command--output">logout</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command">baz</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command">' +
                            '<span class="typed-cursor">&nbsp;</span>' +
                            '</span>' +
                            '</div>' +
                            '</div>'
                    )
                })
            })
            describe('with "windows" engine', () => {
                it('should generate correct content', () => {
                    expect(
                        buildContent({ ...defaultConfig, engine: 'windows' })(['foo', 'sudo', 'bar', 'exit', 'baz'])
                    ).to.be.equal(
                        '<div class="shell__content">' +
                            '<div class="line ">' +
                            '<span class="line__command line__command--output"></span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="path">~</span>' +
                            '<span class="char">&gt;</span></span>' +
                            '<span class="line__command">foo</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="path">~</span>' +
                            '<span class="char">&gt;</span></span>' +
                            '<span class="line__command">sudo</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__command line__command--output">bash: sudo: command not found</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="path">~</span>' +
                            '<span class="char">&gt;</span></span>' +
                            '<span class="line__command">bar</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="path">~</span>' +
                            '<span class="char">&gt;</span></span>' +
                            '<span class="line__command">exit</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__command line__command--output">bash: exit: command not found</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="path">~</span>' +
                            '<span class="char">&gt;</span></span>' +
                            '<span class="line__command">baz</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="path">~</span>' +
                            '<span class="char">&gt;</span></span>' +
                            '<span class="line__command">' +
                            '<span class="typed-cursor">&nbsp;</span>' +
                            '</span>' +
                            '</div>' +
                            '</div>'
                    )
                })
            })
            describe('with "macos" engine', () => {
                it('should generate correct content', () => {
                    const config: Config = { ...defaultConfig, engine: 'macos' }
                    expect(buildContent(config)(['foo', 'sudo', 'bar', 'exit', 'baz'])).to.be.equal(
                        '<div class="shell__content">' +
                            '<div class="line ">' +
                            '<span class="line__command line__command--output">' +
                            login(config)(new Date()).value +
                            '</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command">foo</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command">sudo</span>' +
                            '</div>' +
                            '<div class="line line--root">' +
                            '<span class="line__command line__command--output">Password: <span class="icon-key"></span></span>' +
                            '</div>' +
                            '<div class="line line--root">' +
                            '<span class="line__prefix">' +
                            '<span class="user">root@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">#</span>&nbsp;</span>' +
                            '<span class="line__command">bar</span>' +
                            '</div>' +
                            '<div class="line line--root">' +
                            '<span class="line__prefix">' +
                            '<span class="user">root@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">#</span>&nbsp;</span>' +
                            '<span class="line__command">exit</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__command line__command--output">logout</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command">baz</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command">' +
                            '<span class="typed-cursor">&nbsp;</span>' +
                            '</span>' +
                            '</div>' +
                            '</div>'
                    )
                })
            })
        })

        describe('with custom commands', () => {
            describe('with "default" engine', () => {
                it('should generate correct content', () => {
                    expect(
                        buildContent(defaultConfig)([
                            'foo',
                            {
                                input: 'bar',
                                output: () => ({ context: {}, value: 'baz' }),
                            },
                        ])
                    ).to.be.equal(
                        '<div class="shell__content">' +
                            '<div class="line ">' +
                            '<span class="line__command line__command--output"></span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command">foo</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command">bar</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__command line__command--output">baz</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command"><span class="typed-cursor">&nbsp;</span>' +
                            '</span>' +
                            '</div>' +
                            '</div>'
                    )
                })
            })
            describe('with "ubuntu" engine', () => {
                it('should generate correct content', () => {
                    expect(
                        buildContent({ ...defaultConfig, engine: 'ubuntu' })([
                            'foo',
                            {
                                input: 'bar',
                                output: () => ({ context: {}, value: 'baz' }),
                            },
                        ])
                    ).to.be.equal(
                        '<div class="shell__content">' +
                            '<div class="line ">' +
                            '<span class="line__command line__command--output"></span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command">foo</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command">bar</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__command line__command--output">baz</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command"><span class="typed-cursor">&nbsp;</span>' +
                            '</span>' +
                            '</div>' +
                            '</div>'
                    )
                })
            })
            describe('with "windows" engine', () => {
                it('should generate correct content', () => {
                    expect(
                        buildContent({ ...defaultConfig, engine: 'windows' })([
                            'foo',
                            {
                                input: 'bar',
                                output: () => ({ context: {}, value: 'baz' }),
                            },
                        ])
                    ).to.be.equal(
                        '<div class="shell__content">' +
                            '<div class="line ">' +
                            '<span class="line__command line__command--output"></span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="path">~</span>' +
                            '<span class="char">&gt;</span></span>' +
                            '<span class="line__command">foo</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="path">~</span>' +
                            '<span class="char">&gt;</span></span>' +
                            '<span class="line__command">bar</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__command line__command--output">baz</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="path">~</span>' +
                            '<span class="char">&gt;</span></span>' +
                            '<span class="line__command"><span class="typed-cursor">&nbsp;</span>' +
                            '</span>' +
                            '</div>' +
                            '</div>'
                    )
                })
            })
            describe('with "macos" engine', () => {
                it('should generate correct content', () => {
                    const config: Config = { ...defaultConfig, engine: 'macos' }
                    expect(
                        buildContent(config)([
                            'foo',
                            {
                                input: 'bar',
                                output: () => ({ context: {}, value: 'baz' }),
                            },
                        ])
                    ).to.be.equal(
                        '<div class="shell__content">' +
                            '<div class="line ">' +
                            '<span class="line__command line__command--output">' +
                            login(config)(new Date()).value +
                            '</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command">foo</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command">bar</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__command line__command--output">baz</span>' +
                            '</div>' +
                            '<div class="line ">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command"><span class="typed-cursor">&nbsp;</span>' +
                            '</span>' +
                            '</div>' +
                            '</div>'
                    )
                })
            })
        })
    })
})
