import '../assets/style/main.scss'
import { BuilderFactory } from './Builders'
import { Options, Style, Theme } from './Interfaces'
import { $ } from './utils'

module.exports = class Shell {
    private readonly el: Element
    private readonly factory: BuilderFactory
    private readonly options: Options = {
        commands: [],
        host: 'host',
        path: '~',
        responsive: true,
        root: false,
        style: Style.DEFAULT,
        theme: Theme.DARK,
        typed: undefined,
        user: 'user',
    }

    /**
     * Shell.js constructor.
     * @param {string}  selector The CSS selector for the element.
     * @param {Options} options  Object of options.
     *
     * @return {void}
     */
    constructor(selector: string, options: Options) {
        // If element exists
        if ($(selector).length) {
            this.el = $(selector)[0]
            this.factory = new BuilderFactory()

            // Merge passed options with default options
            this.options = { ...this.options, ...options }

            // Initialize Shell.js
            this.init()
        }
    }

    /**
     * Build the HTML structure and execute commands.
     *
     * @return {void}
     */
    private init(): void {
        // Basing on the passed options, create a Shell builder
        let builder = this.factory.create(this.options)

        // Build the Shell
        let shell = builder.addStatusBar().addContent().build()

        // Get current classes of the element
        let currentClasses = this.el.className.split(' ').filter(className => {
            return className !== '' && shell.classes.indexOf(className) === -1
        })

        // Add classes to element
        this.el.className = `${currentClasses.join(' ')} ${shell.classes.join(' ')}`

        // Build the HTML
        this.el.innerHTML = shell.toString()

        // Typed.js integration
        if (this.options.typed && typeof this.options.typed === 'function') {
            this.type(0, $(`.line`, this.el).length || 0)
        }
    }

    /**
     * Type terminal commands.
     * @param {number} index       The index of the command to type
     * @param {number} commandsNum The number of the commands to execute
     *
     * @return {void}
     */
    private type(index: number, commandsNum: number): void {
        if (commandsNum > 0) {
            let line = $(`.line[data-index="${index}"]`, this.el)
            let delay = 600

            // If line exists
            if (line.length) {
                // Get the command
                let commandEl = $(`.command`, line[0])
                let commandContent = commandEl[0].innerHTML

                // Show the line
                line[0].className = `line--active ${line[0].className}`

                // If is an output command AND is not the last command, type it
                if (commandEl[0].className.indexOf(`line--output`) === -1 && index < commandsNum - 1) {
                    // Empty the command
                    commandEl[0].innerHTML = ''

                    // Create a new instance of Typed.js
                    new this.options.typed(commandEl[0], {
                        strings: [`${commandContent}^${delay}`],
                        typeSpeed: 90,
                        loop: false,
                        contentType: 'html',
                        cursorChar: '&nbsp;',
                        showCursor: true,
                        onStringTyped: () => {
                            // Remove cursor from each line except for the last one
                            line[0].removeChild($(`.typed-cursor`, line[0])[0])
                            // Let's type the next line
                            this.type((index + 1), commandsNum)
                        },
                    })

                } else if (index <= commandsNum - 2) {
                    // After the bash output let's type next line
                    this.type((index + 1), commandsNum)
                }
            }
        }
    };
}
