import { CommandParams, Options } from '../Interfaces'
import { StatusBar, StatusBarButtons, StatusBarIcon, StatusBarTitle } from '../Shell'
import { DefaultBuilder } from './index'

export class WindowsBuilder extends DefaultBuilder {
    protected readonly _char: string = '&gt;'

    /**
     * WindowsBuilder constructor.
     * @param {Options} options Object of options.
     *
     * @return {void}
     */
    constructor(options: Options) {
        super(options)
        if (this.options.path === '~') {
            this.options.path = 'C:\\Windows\\system32\\'
        }
    }

    /**
     * Add the status bar to the Shell.
     *
     * @return {BuilderInterface}
     */
    addStatusBar(): this {
        let buttons = new StatusBarButtons(
            `<button class="button button--minimize"><i class="icon-minimize"></i></button>` +
            `<button class="button button--enlarge"><i class="icon-enlarge"></i></button>` +
            `<button class="button button--close"><i class="icon-close"></i></button>`,
        )
        let icon = new StatusBarIcon(`<i class="icon-command"></i>`)
        let title = new StatusBarTitle('Command Prompt')

        this.shell.statusBar = new StatusBar(buttons, icon, title)

        return this
    }

    /**
     * Build the line prefix.
     *
     * @return {string}
     */
    protected getPrefix(): string {
        return `<span class="line__prefix">` +
            `<span class="path">${this.options.path}</span>` +
            `<span class="char">${this.char}</span>` +
            `</span>`
    }

    /**
     * Get effect of sudo behaviour.
     * @param {CommandParams} params Params for the command.
     *
     * @return {CommandParams}
     */
    protected sudo(params: CommandParams): CommandParams {
        params = super.sudo(params)
        this.options.root = false
        params.command = `bash: sudo: command not found`
        return params
    }

    /**
     * Get effect of logout behaviour.
     * @param {CommandParams} params Params for the command.
     *
     * @return {CommandParams}
     */
    protected logout(params: CommandParams): CommandParams {
        params = super.sudo(params)
        this.options.root = false
        params.command = `bash: exit: command not found`
        return params
    }
}
