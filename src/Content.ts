import { lineCommandClass, cursorClass, lineClass, shellContentClass, linePrefixClass } from './Classes'
import { isExecutable, isTyped } from './Config'
import type { IO } from './IO'
import { exec, idle, input, isInput, isOutput, login, output } from './IO'
import type { Config } from './Config'

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

const line = (
    (counter: number) =>
    (io: IO): string => {
        const content =
            `<div class="${[
                lineClass,
                io.context.root ? `${lineClass}--root` : '',
                !isTyped(io.context) ? `${lineClass}--active` : '',
            ].join(' ')}" data-index="${counter}">` +
            (isInput(io)
                ? `${prefix(io)}<span class="${lineCommandClass}">${io.value}</span>`
                : isOutput(io)
                ? `<span class="${lineCommandClass} ${lineCommandClass}--output">${io.value}</span>`
                : `${prefix(io)}<span class="${lineCommandClass}"><span class="${cursorClass}">&nbsp;</span></span>`) +
            '</div>'

        counter++

        return content
    }
)(0)

const run = (config: Config): string =>
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
        .join('')

export const buildContent = (config: Config): string =>
    `<div class="${shellContentClass}">` + line(login(config)) + run(config) + line(idle(config)()) + `</div>`
