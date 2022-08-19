import { expect } from 'chai'
import { exec, idle, input, isExecutable, isIdle, isInput, isOutput, login, output } from './Command'
import { Config, defaultConfig } from './Config'

describe('Command', () => {
    describe('isExecutable', () => {
        it('should recognize executable commands', () => {
            expect(isExecutable('foo')).to.be.false
            expect(
                isExecutable({
                    input: 'foo',
                    output: () => ({ context: undefined, value: 'bar' }),
                })
            ).to.be.true
        })
    })

    describe('input', () => {
        it('should create an input command', () => {
            expect(input(defaultConfig)('foo')).to.be.deep.equal({
                _type: 'Input',
                context: defaultConfig,
                value: 'foo',
            })
        })
    })

    describe('output', () => {
        it('should create an output command', () => {
            expect(output(defaultConfig)('foo')).to.be.deep.equal({
                _type: 'Output',
                context: defaultConfig,
                value: 'foo',
            })
        })
    })

    describe('idle', () => {
        it('should create an idle command', () => {
            expect(idle(defaultConfig)()).to.be.deep.equal({
                _type: 'Idle',
                context: defaultConfig,
            })
        })
    })

    describe('isInput', () => {
        it('should return if command is input or not', () => {
            expect(
                isInput({
                    _type: 'Input',
                    context: defaultConfig,
                    value: 'foo',
                })
            ).to.be.true
            expect(
                isInput({
                    _type: 'Output',
                    context: defaultConfig,
                    value: 'foo',
                })
            ).to.be.false
            expect(
                isInput({
                    _type: 'Idle',
                    context: defaultConfig,
                })
            ).to.be.false
        })
    })

    describe('isOutput', () => {
        it('should return if command is output or not', () => {
            expect(
                isOutput({
                    _type: 'Output',
                    context: defaultConfig,
                    value: 'foo',
                })
            ).to.be.true
            expect(
                isOutput({
                    _type: 'Input',
                    context: defaultConfig,
                    value: 'foo',
                })
            ).to.be.false
            expect(
                isOutput({
                    _type: 'Idle',
                    context: defaultConfig,
                })
            ).to.be.false
        })
    })

    describe('isIdle', () => {
        it('should return if command is idle or not', () => {
            expect(
                isIdle({
                    _type: 'Idle',
                    context: defaultConfig,
                })
            ).to.be.true
            expect(
                isIdle({
                    _type: 'Output',
                    context: defaultConfig,
                    value: 'foo',
                })
            ).to.be.false
            expect(
                isIdle({
                    _type: 'Input',
                    context: defaultConfig,
                    value: 'foo',
                })
            ).to.be.false
        })
    })

    describe('login', () => {
        const date = new Date()
        describe('with "ubuntu" engine', () => {
            const config: Config = { ...defaultConfig, engine: 'ubuntu' }
            it('should return empty string', () => {
                expect(login(config)(date)).to.be.deep.equal(output(config)(''))
            })
        })
        describe('with "windows" engine', () => {
            const config: Config = { ...defaultConfig, engine: 'windows' }
            it('should return empty string', () => {
                expect(login(config)(date)).to.be.deep.equal(output(config)(''))
            })
        })
        describe('with "default" engine', () => {
            const config: Config = { ...defaultConfig, engine: 'default' }
            it('should return empty string', () => {
                expect(login(config)(date)).to.be.deep.equal(output(config)(''))
            })
        })
        describe('with "macos" engine', () => {
            const config: Config = { ...defaultConfig, engine: 'macos' }
            it('should return login string', () => {
                const result = login(config)(date)
                expect(result).to.not.be.empty
                expect(result.value.slice(result.value.length - 11)).to.be.equal(' on ttys000')
            })
        })
    })

    describe('exec', () => {
        describe('sudo', () => {
            describe('with "ubuntu" engine', () => {
                const config: Config = { ...defaultConfig, engine: 'ubuntu' }
                it('should have root privileges', () => {
                    expect(exec(input(config)('sudo -i'))).to.be.deep.equal(
                        output({ ...config, root: true })(`[sudo] password for ${config.user}:`)
                    )
                })
            })
            describe('with "windows" engine', () => {
                const config: Config = { ...defaultConfig, engine: 'windows' }
                it('should not know "sudo" command', () => {
                    expect(exec(input(config)('sudo -i'))).to.be.deep.equal(
                        output({ ...config, root: false })(`bash: sudo: command not found`)
                    )
                })
            })
            describe('with "default" engine', () => {
                const config: Config = { ...defaultConfig, engine: 'default' }
                it('should have root privileges', () => {
                    expect(exec(input(config)('sudo -i'))).to.be.deep.equal(
                        output({ ...config, root: true })(`[sudo] password for ${config.user}:`)
                    )
                })
            })
            describe('with "macos" engine', () => {
                const config: Config = { ...defaultConfig, engine: 'macos' }
                it('should have root privileges', () => {
                    expect(exec(input(config)('sudo -i'))).to.be.deep.equal(
                        output({ ...config, root: true })(`Password: <span class="icon-key"></span>`)
                    )
                })
            })
        })

        describe('exit', () => {
            describe('with "ubuntu" engine', () => {
                const config: Config = {
                    ...defaultConfig,
                    root: true,
                    engine: 'ubuntu',
                }
                it('should exit from root session', () => {
                    expect(exec(input(config)('exit'))).to.be.deep.equal(output({ ...config, root: false })(`logout`))
                })
            })
            describe('with "windows" engine', () => {
                const config: Config = {
                    ...defaultConfig,
                    root: true,
                    engine: 'windows',
                }
                it('should not know "exit" command', () => {
                    expect(exec(input(config)('exit'))).to.be.deep.equal(
                        output({ ...config, root: true })(`bash: exit: command not found`)
                    )
                })
            })
            describe('with "default" engine', () => {
                const config: Config = {
                    ...defaultConfig,
                    root: true,
                    engine: 'default',
                }
                it('should exit from root session', () => {
                    expect(exec(input(config)('exit'))).to.be.deep.equal(output({ ...config, root: false })(`logout`))
                })
            })
            describe('with "macos" engine', () => {
                const config: Config = {
                    ...defaultConfig,
                    root: true,
                    engine: 'macos',
                }
                it('should exit from root session', () => {
                    expect(exec(input(config)('exit'))).to.be.deep.equal(output({ ...config, root: false })(`logout`))
                })
            })
        })
    })
})
