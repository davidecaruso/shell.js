import { buildClasses, cursorClass, lineClass, lineCommandClass } from './Classes'
import type { Command } from './Command'
import type { Config } from './Config'
import { buildConfig, defaultConfig, isTyped } from './Config'
import { buildContent } from './Content'
import { buildStatusBar } from './StatusBar'

const type =
    ([el, { typing }]: [Element, Pick<Config, 'typing'>]) =>
    (index: number = 0): void => {
        const self = type([el, { typing }])
        const lines = el.querySelectorAll(`.${lineClass}`)
        if (!isTyped({ typing })) {
            return lines.forEach(line => (line.className = `${lineClass}--active ${line.className}`))
        }

        const line = lines[index]
        if (!line) {
            return
        }

        const command = line.querySelectorAll(`.${lineCommandClass}`)[0] ?? null
        const commandContent = command.innerHTML
        line.className = `${lineClass}--active ${line.className}`

        if (!command.className.includes(`${lineCommandClass}--output`) && index < lines.length - 1) {
            command.innerHTML = ''
            new (typing as any).ctor(command, {
                typeSpeed: 90,
                cursorChar: '&nbsp;',
                showCursor: true,
                ...(typing as any).opts,
                loop: false,
                strings: [`${commandContent}^${(typing as any).opts?.delay ?? 600}`],
                contentType: 'html',
                onStringTyped: () => line.removeChild(line.querySelectorAll(`.${cursorClass}`)[0]),
                onComplete: () => self(++index),
            })
        } else {
            self(++index)
        }
    }

const init =
    (selector: string) =>
    (commands: ReadonlyArray<Command>) =>
    (config: Config): [Element, Config] => {
        const el = document.querySelectorAll(selector)[0] ?? null
        if (!el) {
            throw new Error(`Not found: invalid selector given "${selector}"`)
        }

        el.className = buildClasses(config)(el.className.split(' ')).join(' ')
        el.innerHTML = buildStatusBar(config) + buildContent(config)(commands)

        return [el, config]
    }

export default (selector: string, commands: ReadonlyArray<Command>, config: Partial<Config> = defaultConfig) => ({
    type: type(init(selector)(commands)(buildConfig(config))),
})
