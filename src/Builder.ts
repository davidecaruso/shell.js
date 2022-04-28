import {
    buttonClass,
    commandClass,
    cursorClass,
    lineClass,
    shellClass,
    shellContentClass,
    shellStatusBarClass,
    statusBarButtonsClass,
    statusBarIconClass,
    statusBarTitleClass,
} from './Classes'
import type { Command } from './Command'
import { exec, idle, input, login } from './Command'
import type { Config } from './Config'
import { defaultConfig } from './Config'

const buildPrefix = (command: Command): string =>
    `<span class="${lineClass}__prefix">` +
    (command.context.style === 'windows'
        ? `<span class="path">${command.context.path}</span>` +
          `<span class="char">${command.context.root ? '#' : '&gt;'}</span>`
        : `<span class="user">${command.context.root ? 'root' : command.context.user}@</span>` +
          `<span class="host">${command.context.host}</span>` +
          `<span class="colon">:</span>` +
          `<span class="path">${command.context.path}</span>` +
          `<span class="char">${command.context.root ? '#' : '$'}</span>` +
          `&nbsp;`) +
    `</span>`

const buildLine = (
    (counter: number) =>
    (command: Command): string => {
        const line =
            `<div class="${[
                lineClass,
                command.context.root ? `${lineClass}--root` : '',
                !command.context.typed ? `${lineClass}--active` : '',
            ].join(' ')}" data-index="${counter}">` +
            (command._type === 'Input'
                ? `${buildPrefix(command)}<span class="${commandClass}">${command.value}</span>`
                : command._type === 'Output'
                ? `<span class="${commandClass} ${commandClass}--output">${command.value}</span>`
                : `${buildPrefix(
                      command
                  )}<span class="${commandClass}"><span class="${cursorClass}">&nbsp;</span></span>`) +
            '</div>'
        counter++

        return line
    }
)(0)

const buildContent = (config: Config): string =>
    `<div class="${shellContentClass}">${buildLine(login(config))}${config.commands
        .map(value => {
            const command = input(config)(value)
            let content = buildLine(command)

            const result = exec(command)
            if (result) {
                config = result.context
                content += buildLine(result)
            }

            return content
        })
        .join('')}${config.commands.length ? buildLine(idle(config)()) : ''}</div>`

const buildStatusBarButtons = ({ style }: Pick<Config, 'style'>): string =>
    `<div class="${statusBarButtonsClass}">` +
    (style === 'windows'
        ? `<button class="${buttonClass} ${buttonClass}--minimize"><i class="icon-minimize"></i></button>` +
          `<button class="${buttonClass} ${buttonClass}--enlarge"><i class="icon-enlarge"></i></button>` +
          `<button class="${buttonClass} ${buttonClass}--close"><i class="icon-close"></i></button>`
        : style === 'macos'
        ? `<button class="${buttonClass} ${buttonClass}--close"><i class="icon-dot"></i></button>` +
          `<button class="${buttonClass} ${buttonClass}--minimize"><i class="icon-minimize"></i></button>` +
          `<button class="${buttonClass} ${buttonClass}--enlarge"><i class="icon-enlarge"></i></button>`
        : `<button class="${buttonClass} ${buttonClass}--close"><i class="icon-close"></i></button>` +
          `<button class="${buttonClass} ${buttonClass}--minimize"><i class="icon-minimize"></i></button>` +
          `<button class="${buttonClass} ${buttonClass}--enlarge"><i class="icon-enlarge"></i></button>`) +
    `</div>`

const buildStatusBarIcon = ({ style }: Pick<Config, 'style'>): string =>
    style === 'windows' ? `<div class="${statusBarIconClass}"><i class="icon-command"></i></div>` : ''

const buildStatusBarTitle = ({
    style,
    host,
    path,
    user,
    root,
}: Pick<Config, 'style' | 'path' | 'host' | 'user' | 'root'>): string =>
    `<div class="${statusBarTitleClass}">` +
    (style === 'windows'
        ? 'Command Prompt'
        : style === 'macos'
        ? `${root ? 'root' : user} ‒ sh ‒ 80x24`
        : `${root ? 'root' : user}@${host}: ${path}`) +
    `</div>`

const buildStatusBar = (config: Config): string =>
    `<div class="${shellStatusBarClass}">
        ${buildStatusBarButtons(config)}
        ${buildStatusBarIcon(config)}
        ${buildStatusBarTitle(config)}
    </div>`

export const buildHtml = (config: Config) => buildStatusBar(config) + buildContent(config)

export const buildClasses =
    (config: Config) =>
    (elClassName: ReadonlyArray<string>): string => {
        const classNames = [
            shellClass,
            `${shellClass}--${config.style}`,
            `${shellClass}--${config.theme}`,
            config.responsive ? `${shellClass}--responsive` : '',
            config.typed && typeof config.typed === 'function' ? `${shellClass}--typed` : '',
        ]
        return `${elClassName.filter(c => !classNames.includes(c)).join(' ')} ${classNames.join(' ')}`
    }

export const buildConfig = (config: Partial<Config>): Config => {
    const { path, style } = { ...defaultConfig, ...config }
    return {
        ...defaultConfig,
        ...config,
        path: style === 'windows' && path === defaultConfig.path ? (config.path = 'C:\\Windows\\system32\\') : path,
    }
}
