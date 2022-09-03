import {
    activeLineClass,
    buildClasses,
    cursorClass,
    lineClass,
    lineCommandClass,
    lineIdleCommandClass,
    lineInputCommandClass,
    shellContentClass,
} from './Classes'
import type { Command } from './Command'
import type { Config, Typing } from './Config'
import { buildConfig, defaultConfig, isTyped } from './Config'
import { buildContent, buildEmptyLine, buildLines } from './Content'
import { buildStatusBar } from './StatusBar'

const exec =
    (el: Element, typing: Typing) =>
    (index: number): void => {
        const self = exec(el, typing)

        const line = el.querySelectorAll(`.${lineClass}:nth-child(${index})`)[0] ?? null
        if (!line) {
            const linesCount = el.querySelectorAll(`.${lineClass}`).length
            return linesCount && index + 1 <= linesCount ? self(++index) : undefined
        }

        const command = line.querySelectorAll(`.${lineCommandClass}`)[0] ?? null
        if (!command) {
            return
        }

        const commandContent = command.innerHTML
        line.className = `${line.className} ${activeLineClass}`
        if (command.className.includes(lineInputCommandClass)) {
            command.innerHTML = ''
            new typing.ctor(command, {
                typeSpeed: 90,
                cursorChar: '&nbsp;',
                showCursor: true,
                ...typing.opts,
                loop: false,
                contentType: 'html',
                strings: [`${commandContent}^${typing.opts?.delay ?? 600}`],
                onComplete: () => self(++index),
                onStringTyped: (): void => {
                    if (line.querySelectorAll(`.${cursorClass}`)[0]) {
                        line.removeChild(line.querySelectorAll(`.${cursorClass}`)[0])
                    }
                },
            })
        } else {
            self(++index)
        }
    }

const Shell = (selector: string, opts: Partial<Config> = defaultConfig) => {
    const config = buildConfig(opts)

    const el = document.querySelectorAll(selector)[0] ?? null
    if (!el) {
        throw new Error(`Invalid selector given "${selector}"`)
    }

    el.className = buildClasses(config)(el.className)
    el.innerHTML = buildStatusBar(config) + buildContent(config)

    const type = (commands: ReadonlyArray<Command>): void => {
        const content = el.querySelectorAll(`.${shellContentClass}`)[0]
        const currentLinesCount = content.querySelectorAll(`.${lineClass}`).length

        content.querySelectorAll(`.${lineIdleCommandClass}`).forEach(e => {
            if (e.parentNode) {
                content.removeChild(e.parentNode)
            }
        })

        content.innerHTML = content.innerHTML + buildLines(config)(commands) + buildEmptyLine(config)

        if (isTyped(config)) {
            return exec(content, config.typing)(currentLinesCount)
        }

        el.querySelectorAll(`.${lineClass}`).forEach(line => (line.className = `${line.className} ${activeLineClass}`))
    }

    const clear = (): void => {
        const content = el.querySelectorAll(`.${shellContentClass}`)[0]
        content.innerHTML = buildEmptyLine(config)
        content
            .querySelectorAll(`.${lineClass}`)
            .forEach(line => (line.className = `${line.className} ${activeLineClass}`))
    }

    return { type, clear }
}

export default Shell
