import {
    buttonClass,
    closeButtonClass,
    closeButtonIconClass,
    dotButtonIconClass,
    enlargeButtonClass,
    enlargeButtonIconClass,
    minimizeButtonClass,
    minimizeButtonIconClass,
    shellStatusBarClass,
    statusBarButtonsClass,
    statusBarIconClass,
    statusBarTitleClass,
} from './Classes'
import type { Config } from './Config'
import { isMacOs, isRoot, isWindows } from './Config'

const statusBarButtons = (config: Pick<Config, 'engine'>): string =>
    isWindows(config)
        ? `<button class="${buttonClass} ${minimizeButtonClass}"><i class="${minimizeButtonIconClass}"></i></button>` +
          `<button class="${buttonClass} ${enlargeButtonClass}"><i class="${enlargeButtonIconClass}"></i></button>` +
          `<button class="${buttonClass} ${closeButtonClass}"><i class="${closeButtonIconClass}"></i></button>`
        : isMacOs(config)
        ? `<button class="${buttonClass} ${closeButtonClass}"><i class="${dotButtonIconClass}"></i></button>` +
          `<button class="${buttonClass} ${minimizeButtonClass}"><i class="${minimizeButtonIconClass}"></i></button>` +
          `<button class="${buttonClass} ${enlargeButtonClass}"><i class="${enlargeButtonIconClass}"></i></button>`
        : `<button class="${buttonClass} ${closeButtonClass}"><i class="${closeButtonIconClass}"></i></button>` +
          `<button class="${buttonClass} ${minimizeButtonClass}"><i class="${minimizeButtonIconClass}"></i></button>` +
          `<button class="${buttonClass} ${enlargeButtonClass}"><i class="${enlargeButtonIconClass}"></i></button>`

const statusBarIcon = (config: Pick<Config, 'engine'>) => (isWindows(config) ? '<i class="icon-command"></i>' : '')

const statusBarTitle = (config: Pick<Config, 'engine' | 'path' | 'host' | 'user' | 'root'>): string =>
    isWindows(config)
        ? 'Command Prompts'
        : isMacOs(config)
        ? `${isRoot(config) ? 'root' : config.user} &ndash; sh &ndash; 80x24`
        : `${isRoot(config) ? 'root' : config.user}@${config.host}: ${config.path}`

export const buildStatusBar = (config: Config): string =>
    `<div class="${shellStatusBarClass}">` +
    `<div class="${statusBarIconClass}">${statusBarIcon(config)}</div>` +
    `<div class="${statusBarButtonsClass}">${statusBarButtons(config)}</div>` +
    `<div class="${statusBarTitleClass}">${statusBarTitle(config)}</div>` +
    `</div>`
