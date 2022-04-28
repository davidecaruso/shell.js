import { buildClasses, buildConfig, buildHtml } from './Builder'
import { commandClass, cursorClass, lineClass } from './Classes'
import type { Config } from './Config'

const type =
    ({ typed }: Pick<Config, 'typed'>) =>
    (el: Element) =>
    (index: number = 0): void => {
        if (!typed) {
            return
        }

        const _type = type({ typed })(el)
        const commandsNum = el.querySelectorAll(`.${lineClass}`).length || 0
        if (commandsNum > 0) {
            const line = el.querySelectorAll(`.${lineClass}[data-index="${index}"]`)
            const delay = 600
            const typeSpeed = 90

            // If line exists
            if (line.length) {
                // Get the command
                const commandEl = line[0].querySelectorAll(`.command`)
                const commandContent = commandEl[0].innerHTML

                // Show the line
                line[0].className = `${lineClass}--active ${line[0].className}`

                // If is an output command AND is not the last command, type it
                if (!commandEl[0].className.includes(`${commandClass}--output`) && index < commandsNum - 1) {
                    // Empty the command
                    commandEl[0].innerHTML = ''

                    // Create a new instance of Typed.js
                    new typed(commandEl[0], {
                        strings: [`${commandContent}^${delay}`],
                        typeSpeed,
                        loop: false,
                        contentType: 'html',
                        cursorChar: '&nbsp;',
                        showCursor: true,
                        onStringTyped: () => {
                            // Remove cursor from each line except for the last one
                            line[0].removeChild(line[0].querySelectorAll(`.${cursorClass}`)[0])
                            // Let's type the next line
                            _type(++index)
                        },
                    })
                } else if (index <= commandsNum - 2) {
                    // After the bash output let's type next line
                    _type(++index)
                }
            }
        }
    }

const init =
    (config: Config) =>
    (el: Element): Element => {
        el.className = buildClasses(config)(el.className.split(' '))
        el.innerHTML = buildHtml(config)

        return el
    }

export default (el: Element, config: Partial<Config>) => {
    const _config = buildConfig(config)
    const _el = init(_config)(el)
    return {
        type: type(_config)(_el),
    }
}
