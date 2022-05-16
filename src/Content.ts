import { cursorClass, lineClass, lineCommandClass, linePrefixClass, shellContentClass } from './Classes'
import { Command, exec, idle, input, IO, isExecutable, isInput, isOutput, login, output } from './Command'
import type { Config } from './Config'
import { isRoot, isTyped, isWindows } from './Config'

const prefix = ({ context }: Pick<IO, 'context'>): string =>
    `<span class="${linePrefixClass}">` +
    (isWindows(context)
        ? `<span class="path">${context.path}</span>` + `<span class="char">${isRoot(context) ? '#' : '&gt;'}</span>`
        : `<span class="user">${isRoot(context) ? 'root' : context.user}@</span>` +
          `<span class="host">${context.host}</span>` +
          `<span class="colon">:</span>` +
          `<span class="path">${context.path}</span>` +
          `<span class="char">${isRoot(context) ? '#' : '$'}</span>` +
          `&nbsp;`) +
    '</span>'

const line = (io: IO): string =>
    `<div class="${[
        lineClass,
        isRoot(io.context) ? `${lineClass}--root` : '',
        !isTyped(io.context) ? `${lineClass}--active` : '',
    ].join(' ')}">` +
    (isInput(io)
        ? `${prefix(io)}<span class="${lineCommandClass}">${io.value}</span>`
        : isOutput(io)
        ? `<span class="${lineCommandClass} ${lineCommandClass}--output">${io.value}</span>`
        : `${prefix(io)}<span class="${lineCommandClass}"><span class="${cursorClass}">&nbsp;</span></span>`) +
    '</div>'

const lines =
    (config: Config) =>
    (commands: ReadonlyArray<Command>): string =>
        line(login(config)(new Date())) +
        commands
            .map(value => {
                if (isExecutable(value)) {
                    const command = input(config)(value.input)
                    const result = value.output(config)
                    config = { ...config, ...command.context, ...result?.context }
                    return line(command) + line(output(config)(result.value))
                } else {
                    const command = input(config)(value)
                    const result = exec(command)
                    config = { ...config, ...command.context, ...result?.context }
                    return line(command) + (result ? line(result) : '')
                }
            })
            .join('') +
        line(idle(config)())

export const buildContent =
    (config: Config) =>
    (commands: ReadonlyArray<Command>): string =>
        `<div class="${shellContentClass}">${lines(config)(commands)}</div>`
