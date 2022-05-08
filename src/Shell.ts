import { buildClasses, lineCommandClass, cursorClass, lineClass } from './Classes'
import type { Config } from './Config'
import { buildConfig, isTyped } from './Config'
import { buildContent } from './Content'
import { buildStatusBar } from './StatusBar'

const type =
    ({ typing }: Pick<Config, 'typing'>) =>
    (el: Element) =>
    (index: number = 0): void => {
        const self = type({ typing })(el)
        const lines = el.querySelectorAll(`.${lineClass}`)
        const line = lines[index]
        if (!isTyped({ typing }) || !line) {
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

const build =
    (config: Config) =>
    (el: Element): void => {
        el.className = buildClasses(config)(el.className.split(' '))
        el.innerHTML = buildStatusBar(config) + buildContent(config)
    }

export default (el: Element, config: Partial<Config>) => {
    const cfg = buildConfig(config)
    build(cfg)(el)
    return { type: type(cfg)(el) }
}
