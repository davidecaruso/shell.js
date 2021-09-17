import { CommandParams } from '../Interfaces'
import { StatusBar, StatusBarButtons, StatusBarTitle } from '../Shell'
import { strPad } from '../utils'
import { DefaultBuilder } from './index'

export class OsxBuilder extends DefaultBuilder {
    protected readonly columns: number = 80
    protected readonly rows: number = 24

    /**
     * Add the status bar to the Shell.
     *
     * @return {BuilderInterface}
     */
    addStatusBar(): this {
        let buttons = new StatusBarButtons(
            `<button class="button button--close"><i class="icon-dot"></i></button>` +
            `<button class="button button--minimize"><i class="icon-minimize"></i></button>` +
            `<button class="button button--enlarge"><i class="icon-enlarge"></i></button>`,
        )
        let title = new StatusBarTitle(`${this.user} ‒ sh ‒ ${this.columns + 'x' + this.rows}`)

        this.shell.statusBar = new StatusBar(buttons, title)

        return this
    }

    /**
     * Build the line prefix.
     *
     * @return {string}
     */
    protected getPrefix(): string {
        return `<span class="line__prefix">` +
            `<span class="host">${this.options.host}</span>` +
            `<span class="colon">:</span>` +
            `<span class="path">${this.options.path}</span>` +
            `<span class="user"> ${this.user}</span>` +
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
        let date = new Date()
        let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        let hours = strPad(date.getHours().toString(), 2, 'STR_PAD_LEFT')
        let minutes = strPad(date.getMinutes().toString(), 2, 'STR_PAD_LEFT')
        let seconds = strPad(date.getSeconds().toString(), 2, 'STR_PAD_LEFT')

        return {
            command: `Last login: ` +
                `${days[date.getDay()]} ${months[date.getMonth()]} ${hours}:${minutes}:${seconds} on ttys000`,
            output: true,
            counter,
        }
    }

    /**
     * Get effect of sudo behaviour.
     * @param {CommandParams} params Params for the command.
     *
     * @return {CommandParams}
     */
    protected sudo(params: CommandParams): CommandParams {
        params = super.sudo(params)
        params.command = `Password: <span class="icon-key"></span>`
        return params
    }
}
