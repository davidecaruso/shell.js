import { buildClasses, lineCommandClass, cursorClass, lineClass } from './Classes'
import type { Config } from './Config'
import { buildConfig } from './Config'
import { buildContent } from './Content'
import { buildStatusBar } from './StatusBar'

const type = (config: Config, el: Element, index: number): void => {
    if (!config.typing || !config.typing.ctor) {
        // if (!typing) {
        return
    }

    if (config.style.engine === 'macos') {
        console.log('DHUEHDUEHUDE', el, index)
    }
    // const _type = type({ typing })(el)
    const commandsNum = el.querySelectorAll(`.${lineClass}`).length || 0
    if (commandsNum > 0) {
        const line = el.querySelectorAll(`.${lineClass}[data-index="${index}"]`)

        if (line.length) {
            const commandEl = line[0].querySelectorAll(`.${lineCommandClass}`)
            const commandContent = commandEl[0].innerHTML

            // Show the line
            line[0].className = `${lineClass}--active ${line[0].className}`

            // If is an output command AND is not the last command, type it
            if (!commandEl[0].className.includes(`${lineCommandClass}--output`) && index < commandsNum - 1) {
                // Empty the command
                commandEl[0].innerHTML = ''

                // Create a new instance of Typed.js
                // new typing?.ctor(commandEl[0], {
                new config.typing.ctor(commandEl[0], {
                    // new typing.ctor(commandEl[0], {
                    typeSpeed: 90,
                    loop: false,
                    cursorChar: '&nbsp;',
                    showCursor: true,
                    ...config.typing.opts,
                    // ...typing.opts,
                    strings: [`${commandContent}^${config.typing.opts?.delay ?? 600}`],
                    // strings: [`${commandContent}^${typing.opts?.delay ?? 600}`],
                    contentType: 'html',
                    onStringTyped: () => {
                        // Remove cursor from each line except for the last one
                        line[0].removeChild(line[0].querySelectorAll(`.${cursorClass}`)[0])
                        // Let's type the next line
                        type(config, el, ++index)
                    },
                })
            } else if (index <= commandsNum - 2) {
                // After the bash output let's type next line
                type(config, el, ++index)
            }
        }
    }
}

const build =
    (config: Config) =>
    (el: Element): Element => {
        el.className = buildClasses(config)(el.className.split(' '))
        el.innerHTML = buildStatusBar(config) + buildContent(config)

        return el
    }

export default (el: Element, config: Partial<Config>) => {
    const _config = buildConfig(config)
    const _el = build(_config)(el)

    return { type: () => type(_config, _el, 0) }
}
