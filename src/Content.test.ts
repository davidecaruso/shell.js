import { expect } from 'chai'
import { Config, defaultConfig } from './Config'
import { buildContent, buildEmptyLine, buildLines, login } from './Content'

describe('Content', () => {
    describe('login', () => {
        const date = new Date()
        describe('with "ubuntu" engine', () => {
            it('should return empty string', () => {
                expect(login({ ...defaultConfig, engine: 'ubuntu' })(date)).to.be.deep.equal('')
            })
        })
        describe('with "windows" engine', () => {
            it('should return empty string', () => {
                expect(login({ ...defaultConfig, engine: 'windows' })(date)).to.be.deep.equal('')
            })
        })
        describe('with "default" engine', () => {
            it('should return empty string', () => {
                expect(login({ ...defaultConfig, engine: 'default' })(date)).to.be.deep.equal('')
            })
        })
        describe('with "macos" engine', () => {
            it('should return login string', () => {
                expect(login({ ...defaultConfig, engine: 'macos' })(date)).to.be.not.equal('')
            })
        })
    })

    describe('buildContent', () => {
        describe('with "default" engine', () => {
            it('should generate correct content', () => {
                expect(buildContent(defaultConfig)).to.be.equal('<div class="shell__content"></div>')
            })
        })
        describe('with "ubuntu" engine', () => {
            it('should generate correct content', () => {
                expect(buildContent({ ...defaultConfig, engine: 'ubuntu' })).to.be.equal(
                    '<div class="shell__content"></div>'
                )
            })
        })
        describe('with "windows" engine', () => {
            it('should generate correct content', () => {
                expect(buildContent({ ...defaultConfig, engine: 'windows' })).to.be.equal(
                    '<div class="shell__content"></div>'
                )
            })
        })
        describe('with "macos" engine', () => {
            it('should generate correct content', () => {
                const config: Config = { ...defaultConfig, engine: 'macos' }
                expect(buildContent(config)).to.be.equal(
                    '<div class="shell__content">' + login(config)(new Date()) + '</div>'
                )
            })
        })
    })

    describe('buildLines', () => {
        describe('with list of string commands', () => {
            describe('with "default" engine', () => {
                it('should generate correct lines', () => {
                    expect(buildLines(defaultConfig)(['foo', 'bar', 'baz'])).to.be.equal(
                        '<div class="line">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command line__command--input">foo</span>' +
                            '</div>' +
                            '<div class="line">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command line__command--input">bar</span>' +
                            '</div>' +
                            '<div class="line">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command line__command--input">baz</span>' +
                            '</div>'
                    )
                })
            })
            describe('with "ubuntu" engine', () => {
                it('should generate correct lines', () => {
                    expect(buildLines({ ...defaultConfig, engine: 'ubuntu' })(['foo', 'bar', 'baz'])).to.be.equal(
                        '<div class="line">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command line__command--input">foo</span>' +
                            '</div>' +
                            '<div class="line">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command line__command--input">bar</span>' +
                            '</div>' +
                            '<div class="line">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command line__command--input">baz</span>' +
                            '</div>'
                    )
                })
            })
            describe('with "windows" engine', () => {
                it('should generate correct lines', () => {
                    expect(buildLines({ ...defaultConfig, engine: 'windows' })(['foo', 'bar', 'baz'])).to.be.equal(
                        '<div class="line">' +
                            '<span class="line__prefix">' +
                            '<span class="path">~</span>' +
                            '<span class="char">&gt;</span>' +
                            '</span>' +
                            '<span class="line__command line__command--input">foo</span>' +
                            '</div>' +
                            '<div class="line">' +
                            '<span class="line__prefix">' +
                            '<span class="path">~</span>' +
                            '<span class="char">&gt;</span>' +
                            '</span>' +
                            '<span class="line__command line__command--input">bar</span>' +
                            '</div>' +
                            '<div class="line">' +
                            '<span class="line__prefix">' +
                            '<span class="path">~</span>' +
                            '<span class="char">&gt;</span>' +
                            '</span>' +
                            '<span class="line__command line__command--input">baz</span>' +
                            '</div>'
                    )
                })
            })
            describe('with "macos" engine', () => {
                it('should generate correct lines', () => {
                    const config: Config = { ...defaultConfig, engine: 'macos' }
                    expect(buildLines(config)(['foo', 'bar', 'baz'])).to.be.equal(
                        '<div class="line">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command line__command--input">foo</span>' +
                            '</div>' +
                            '<div class="line">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command line__command--input">bar</span>' +
                            '</div>' +
                            '<div class="line">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command line__command--input">baz</span>' +
                            '</div>'
                    )
                })
            })
        })

        describe('with sudo/exec commands', () => {
            describe('with "default" engine', () => {
                it('should generate correct lines', () => {
                    expect(buildLines(defaultConfig)(['foo', 'sudo', 'bar', 'exit', 'baz'])).to.be.equal(
                        '<div class="line">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command line__command--input">foo</span>' +
                            '</div>' +
                            '<div class="line">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command line__command--input">sudo</span>' +
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
                            '<span class="line__command line__command--input">bar</span>' +
                            '</div>' +
                            '<div class="line line--root">' +
                            '<span class="line__prefix">' +
                            '<span class="user">root@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">#</span>&nbsp;</span>' +
                            '<span class="line__command line__command--input">exit</span>' +
                            '</div>' +
                            '<div class="line">' +
                            '<span class="line__command line__command--output">logout</span>' +
                            '</div>' +
                            '<div class="line">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command line__command--input">baz</span>' +
                            '</div>'
                    )
                })
            })
            describe('with "ubuntu" engine', () => {
                it('should generate correct lines', () => {
                    expect(
                        buildLines({ ...defaultConfig, engine: 'ubuntu' })(['foo', 'sudo', 'bar', 'exit', 'baz'])
                    ).to.be.equal(
                        '<div class="line">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command line__command--input">foo</span>' +
                            '</div>' +
                            '<div class="line">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command line__command--input">sudo</span>' +
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
                            '<span class="line__command line__command--input">bar</span>' +
                            '</div>' +
                            '<div class="line line--root">' +
                            '<span class="line__prefix">' +
                            '<span class="user">root@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">#</span>&nbsp;</span>' +
                            '<span class="line__command line__command--input">exit</span>' +
                            '</div>' +
                            '<div class="line">' +
                            '<span class="line__command line__command--output">logout</span>' +
                            '</div>' +
                            '<div class="line">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command line__command--input">baz</span>' +
                            '</div>'
                    )
                })
            })
            describe('with "windows" engine', () => {
                it('should generate correct lines', () => {
                    expect(
                        buildLines({ ...defaultConfig, engine: 'windows' })(['foo', 'sudo', 'bar', 'exit', 'baz'])
                    ).to.be.equal(
                        '<div class="line">' +
                            '<span class="line__prefix">' +
                            '<span class="path">~</span>' +
                            '<span class="char">&gt;</span></span>' +
                            '<span class="line__command line__command--input">foo</span>' +
                            '</div>' +
                            '<div class="line">' +
                            '<span class="line__prefix">' +
                            '<span class="path">~</span>' +
                            '<span class="char">&gt;</span></span>' +
                            '<span class="line__command line__command--input">sudo</span>' +
                            '</div>' +
                            '<div class="line">' +
                            '<span class="line__command line__command--output">bash: sudo: command not found</span>' +
                            '</div>' +
                            '<div class="line">' +
                            '<span class="line__prefix">' +
                            '<span class="path">~</span>' +
                            '<span class="char">&gt;</span></span>' +
                            '<span class="line__command line__command--input">bar</span>' +
                            '</div>' +
                            '<div class="line">' +
                            '<span class="line__prefix">' +
                            '<span class="path">~</span>' +
                            '<span class="char">&gt;</span></span>' +
                            '<span class="line__command line__command--input">exit</span>' +
                            '</div>' +
                            '<div class="line">' +
                            '<span class="line__command line__command--output">bash: exit: command not found</span>' +
                            '</div>' +
                            '<div class="line">' +
                            '<span class="line__prefix">' +
                            '<span class="path">~</span>' +
                            '<span class="char">&gt;</span></span>' +
                            '<span class="line__command line__command--input">baz</span>' +
                            '</div>'
                    )
                })
            })
            describe('with "macos" engine', () => {
                it('should generate correct lines', () => {
                    const config: Config = { ...defaultConfig, engine: 'macos' }
                    expect(buildLines(config)(['foo', 'sudo', 'bar', 'exit', 'baz'])).to.be.equal(
                        '<div class="line">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command line__command--input">foo</span>' +
                            '</div>' +
                            '<div class="line">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command line__command--input">sudo</span>' +
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
                            '<span class="line__command line__command--input">bar</span>' +
                            '</div>' +
                            '<div class="line line--root">' +
                            '<span class="line__prefix">' +
                            '<span class="user">root@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">#</span>&nbsp;</span>' +
                            '<span class="line__command line__command--input">exit</span>' +
                            '</div>' +
                            '<div class="line">' +
                            '<span class="line__command line__command--output">logout</span>' +
                            '</div>' +
                            '<div class="line">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command line__command--input">baz</span>' +
                            '</div>'
                    )
                })
            })
        })

        describe('with custom commands', () => {
            describe('with "default" engine', () => {
                it('should generate correct lines', () => {
                    expect(
                        buildLines(defaultConfig)([
                            'foo',
                            {
                                input: 'bar',
                                output: () => ({ context: {}, value: 'baz' }),
                            },
                        ])
                    ).to.be.equal(
                        '<div class="line">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command line__command--input">foo</span>' +
                            '</div>' +
                            '<div class="line">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command line__command--input">bar</span>' +
                            '</div>' +
                            '<div class="line">' +
                            '<span class="line__command line__command--output">baz</span>' +
                            '</div>'
                    )
                })
            })
            describe('with "ubuntu" engine', () => {
                it('should generate correct lines', () => {
                    expect(
                        buildLines({ ...defaultConfig, engine: 'ubuntu' })([
                            'foo',
                            {
                                input: 'bar',
                                output: () => ({ context: {}, value: 'baz' }),
                            },
                        ])
                    ).to.be.equal(
                        '<div class="line">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command line__command--input">foo</span>' +
                            '</div>' +
                            '<div class="line">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command line__command--input">bar</span>' +
                            '</div>' +
                            '<div class="line">' +
                            '<span class="line__command line__command--output">baz</span>' +
                            '</div>'
                    )
                })
            })
            describe('with "windows" engine', () => {
                it('should generate correct lines', () => {
                    expect(
                        buildLines({ ...defaultConfig, engine: 'windows' })([
                            'foo',
                            {
                                input: 'bar',
                                output: () => ({ context: {}, value: 'baz' }),
                            },
                        ])
                    ).to.be.equal(
                        '<div class="line">' +
                            '<span class="line__prefix">' +
                            '<span class="path">~</span>' +
                            '<span class="char">&gt;</span></span>' +
                            '<span class="line__command line__command--input">foo</span>' +
                            '</div>' +
                            '<div class="line">' +
                            '<span class="line__prefix">' +
                            '<span class="path">~</span>' +
                            '<span class="char">&gt;</span></span>' +
                            '<span class="line__command line__command--input">bar</span>' +
                            '</div>' +
                            '<div class="line">' +
                            '<span class="line__command line__command--output">baz</span>' +
                            '</div>'
                    )
                })
            })
            describe('with "macos" engine', () => {
                it('should generate correct lines', () => {
                    const config: Config = { ...defaultConfig, engine: 'macos' }
                    expect(
                        buildLines(config)([
                            'foo',
                            {
                                input: 'bar',
                                output: () => ({ context: {}, value: 'baz' }),
                            },
                        ])
                    ).to.be.equal(
                        '<div class="line">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command line__command--input">foo</span>' +
                            '</div>' +
                            '<div class="line">' +
                            '<span class="line__prefix">' +
                            '<span class="user">user@</span>' +
                            '<span class="host">host</span>' +
                            '<span class="colon">:</span>' +
                            '<span class="path">~</span>' +
                            '<span class="char">$</span>&nbsp;</span>' +
                            '<span class="line__command line__command--input">bar</span>' +
                            '</div>' +
                            '<div class="line">' +
                            '<span class="line__command line__command--output">baz</span>' +
                            '</div>'
                    )
                })
            })
        })
    })

    describe('buildEmptyLine', () => {
        describe('with "default" engine', () => {
            it('should generate empty line', () => {
                expect(buildEmptyLine(defaultConfig)).to.be.equal(
                    '<div class="line">' +
                        '<span class="line__prefix">' +
                        '<span class="user">user@</span>' +
                        '<span class="host">host</span>' +
                        '<span class="colon">:</span>' +
                        '<span class="path">~</span>' +
                        '<span class="char">$</span>&nbsp;</span>' +
                        '<span class="line__command line__command--idle"><span class="typed-cursor">&nbsp;</span>' +
                        '</span>' +
                        '</div>'
                )
            })
        })
        describe('with "ubuntu" engine', () => {
            it('should generate empty line', () => {
                expect(buildEmptyLine({ ...defaultConfig, engine: 'ubuntu' })).to.be.equal(
                    '<div class="line">' +
                        '<span class="line__prefix">' +
                        '<span class="user">user@</span>' +
                        '<span class="host">host</span>' +
                        '<span class="colon">:</span>' +
                        '<span class="path">~</span>' +
                        '<span class="char">$</span>&nbsp;</span>' +
                        '<span class="line__command line__command--idle"><span class="typed-cursor">&nbsp;</span>' +
                        '</span>' +
                        '</div>'
                )
            })
        })
        describe('with "windows" engine', () => {
            it('should generate empty line', () => {
                expect(buildEmptyLine({ ...defaultConfig, engine: 'windows' })).to.be.equal(
                    '<div class="line">' +
                        '<span class="line__prefix">' +
                        '<span class="path">~</span>' +
                        '<span class="char">&gt;</span></span>' +
                        '<span class="line__command line__command--idle"><span class="typed-cursor">&nbsp;</span>' +
                        '</span>' +
                        '</div>'
                )
            })
        })
        describe('with "macos" engine', () => {
            it('should generate empty line', () => {
                const config: Config = { ...defaultConfig, engine: 'macos' }
                expect(buildEmptyLine(config)).to.be.equal(
                    '<div class="line">' +
                        '<span class="line__prefix">' +
                        '<span class="user">user@</span>' +
                        '<span class="host">host</span>' +
                        '<span class="colon">:</span>' +
                        '<span class="path">~</span>' +
                        '<span class="char">$</span>&nbsp;</span>' +
                        '<span class="line__command line__command--idle"><span class="typed-cursor">&nbsp;</span>' +
                        '</span>' +
                        '</div>'
                )
            })
        })
    })
})
