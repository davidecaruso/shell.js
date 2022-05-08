import { cursorClass, lineClass, lineCommandClass, linePrefixClass, shellContentClass } from './Classes'
import type { Config } from './Config'
import { isExecutable, isTyped } from './Config'
import type { IO } from './IO'
import { exec, idle, input, isInput, isOutput, login, output } from './IO'

const prefix = ({ context }: IO): string =>
    `<span class="${linePrefixClass}">` +
    (() => {
        switch (context.style.engine) {
            case 'windows':
                return (
                    `<span class="path">${context.path}</span>` +
                    `<span class="char">${context.root ? '#' : '&gt;'}</span>`
                )

            default:
                return (
                    `<span class="user">${context.root ? 'root' : context.user}@</span>` +
                    `<span class="host">${context.host}</span>` +
                    `<span class="colon">:</span>` +
                    `<span class="path">${context.path}</span>` +
                    `<span class="char">${context.root ? '#' : '$'}</span>` +
                    `&nbsp;`
                )
        }
    })() +
    '</span>'

const line = (io: IO): string =>
    `<div class="${[
        lineClass,
        io.context.root ? `${lineClass}--root` : '',
        !isTyped(io.context) ? `${lineClass}--active` : '',
    ].join(' ')}">` +
    (isInput(io)
        ? `${prefix(io)}<span class="${lineCommandClass}">${io.value}</span>`
        : isOutput(io)
        ? `<span class="${lineCommandClass} ${lineCommandClass}--output">${io.value}</span>`
        : `${prefix(io)}<span class="${lineCommandClass}"><span class="${cursorClass}">&nbsp;</span></span>`) +
    '</div>'

const lines = (config: Config): string =>
    line(login(config)) +
    config.commands
        .map(value => {
            if (isExecutable(value)) {
                const command = input(config)(value.input)
                const result = value.output(config)
                config = result?.context || command.context
                return line(command) + line(output(config)(result.value))
            } else {
                const command = input(config)(value)
                const result = exec(command)
                config = result?.context || command.context
                return line(command) + (result ? line(result) : '')
            }
        })
        .join('') +
    line(idle(config)())

export const buildContent = (config: Config): string => `<div class="${shellContentClass}">${lines(config)}</div>`
