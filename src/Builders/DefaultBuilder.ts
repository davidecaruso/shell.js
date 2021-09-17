import { CommandParams, Options } from '../Interfaces'
import { Content, Shell, StatusBar, StatusBarButtons, StatusBarTitle } from '../Shell'
import { BuilderInterface } from './BuilderInterface'

export class DefaultBuilder implements BuilderInterface {
    protected shell: Shell
    protected options: Options
    protected readonly _char: string = '$'
    protected readonly cursor: string = '&nbsp;'

    /**
     * Get the Shell char,
     *
     * @return {string}
     */
    get char(): string {
        return this.options.root ? '#' : this._char
    }

    /**
     * Get the Shell user,
     *
     * @return {string}
     */
    get user(): string {
        return this.options.root ? 'root' : this.options.user
    }

    /**
     * DefaultBuilder constructor.
     * @param {Options} options Object of options.
     *
     * @return {void}
     */
    constructor(options: Options) {
        this.options = options
        this.shell = new Shell(options)
    }

    /**
     * Build the Shell.
     *
     * @return {Shell}
     */
    build(): Shell {
        return this.shell
    }

    /**
     * Add the status bar to the Shell.
     *
     * @return {BuilderInterface}
     */
    addStatusBar(): this {
        let buttons = new StatusBarButtons(
            `<button class="button button--close"><i class="icon-close"></i></button>` +
            `<button class="button button--minimize"><i class="icon-minimize"></i></button>` +
            `<button class="button button--enlarge"><i class="icon-enlarge"></i></button>`,
        )
        let title = new StatusBarTitle(`${this.user}@${this.options.host}: ${this.options.path}`)

        this.shell.statusBar = new StatusBar(buttons, title)

        return this
    }

    /**
     * Add the content to the Shell.
     *
     * @return {BuilderInterface}
     */
    addContent(): this {
        let content = ''
        let counter = 0

        let loginParams = this.login(counter)

        if (Object.keys(loginParams).length) {
            content += this.buildLine(loginParams)
            counter++
        }

        // If have some commands...
        if (this.options.commands.length) {
            this.options.commands.forEach(command => {
                // check if there is an object, and if object is valid
                if (typeof command === 'object' && command['input']) {
                    var outputLines: string[] = command['output']
                    command = command['input']
                }
                let params: CommandParams = {
                    command,
                    counter,
                    output: undefined,
                }

                // Build line
                content += this.buildLine(params)

                // If command contains "sudo" become root user
                if (/sudo/.test(command)) {
                    counter++
                    params.counter = counter
                    params = this.sudo(params)
                    content += this.buildLine(params)
                }

                // If command contains "exit" logout from root
                if (/exit/.test(command)) {
                    counter++
                    params.counter = counter
                    params = this.logout(params)
                    content += this.buildLine(params)
                }

                // If there is an output
                if (outputLines) {
                    for (const outputLine of outputLines) {
                        counter++
                        params.counter = counter
                        params.command = outputLine
                        params.output = true
                        content += this.buildLine(params)
                    }
                }

                counter++
            })
            content += this.buildLine({ counter, empty: true })
        }

        this.shell.content = new Content(content)

        return this
    }

    /**
     * Build the line prefix.
     *
     * @return {string}
     */
    protected getPrefix(): string {
        return `<span class="line__prefix">` +
            `<span class="user">${this.user}@</span>` +
            `<span class="host">${this.options.host}</span>` +
            `<span class="colon">:</span>` +
            `<span class="path">${this.options.path}</span>` +
            `<span class="char">${this.char}</span>` +
            `&nbsp;</span>`
    }

    /**
     * Get effect of login behaviour.
     * @param {number} counter The index of the command.
     *
     * @return {CommandParams}
     */
    protected login(counter: number): CommandParams {
        return {}
    }

    /**
     * Get effect of sudo behaviour.
     * @param {CommandParams} params Params for the command.
     *
     * @return {CommandParams}
     */
    protected sudo(params: CommandParams): CommandParams {
        this.options.root = true
        params.command = `[sudo] password for ${this.options.user}:`
        params.output = true
        return params
    }

    /**
     * Get effect of logout behaviour.
     * @param {CommandParams} params Params for the command.
     *
     * @return {CommandParams}
     */
    protected logout(params: CommandParams): CommandParams {
        this.options.root = false
        params.command = 'logout'
        params.output = true
        return params
    }

    /**
     * Build the HTML structure of a single terminal line.
     *
     * @return {string}
     */
    private buildLine(params: CommandParams): string {
        let classes = [`line`]
        let counter = params.counter

        // Default parameters
        params = {
            ...{
                counter: 0,
                empty: false,
                command: undefined,
                output: false,
            },
            ...params,
        }

        // Add/remove "root" class
        if (this.options.root) {
            classes.push(`line--root`)
        } else {
            let idx = classes.indexOf(`line--root`)
            if (idx != -1) {
                classes = classes.splice(idx, 1)
            }
        }

        let line = `<div class="${classes.join(' ')}" data-index="${counter}">`

        if (params.empty) {
            // Add "active" class
            if (!this.options.typed) {
                classes.push(`line--active`)
            }
            line += `${this.getPrefix()}` +
                `<span class="command"><span class="typed-cursor">${this.cursor}</span></span>`
        } else {
            if (params.command) {
                line += (params.output ? '' : this.getPrefix()) +
                    `<span class="command` + (params.output ? ` line--output` : '') + `">${params.command}</span>`
            }
        }
        line += '</div>'

        return line
    }
}
