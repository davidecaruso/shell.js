import {
    buttonClass,
    shellStatusBarClass,
    statusBarButtonsClass,
    statusBarIconClass,
    statusBarTitleClass,
} from './Classes'
import { isMacOs, isRoot, isWindows } from './Config'
import type { Config } from './Config'

const statusBarButtons = (config: Pick<Config, 'style'>): string =>
    isWindows(config)
        ? `<button class="${buttonClass} ${buttonClass}--minimize"><i class="icon-minimize"></i></button>` +
          `<button class="${buttonClass} ${buttonClass}--enlarge"><i class="icon-enlarge"></i></button>` +
          `<button class="${buttonClass} ${buttonClass}--close"><i class="icon-close"></i></button>`
        : isMacOs(config)
        ? `<button class="${buttonClass} ${buttonClass}--close"><i class="icon-dot"></i></button>` +
          `<button class="${buttonClass} ${buttonClass}--minimize"><i class="icon-minimize"></i></button>` +
          `<button class="${buttonClass} ${buttonClass}--enlarge"><i class="icon-enlarge"></i></button>`
        : `<button class="${buttonClass} ${buttonClass}--close"><i class="icon-close"></i></button>` +
          `<button class="${buttonClass} ${buttonClass}--minimize"><i class="icon-minimize"></i></button>` +
          `<button class="${buttonClass} ${buttonClass}--enlarge"><i class="icon-enlarge"></i></button>`

const statusBarIcon = (config: Pick<Config, 'style'>) => (isWindows(config) ? '<i class="icon-command"></i>' : '')

const statusBarTitle = (config: Pick<Config, 'style' | 'path' | 'host' | 'user' | 'root'>): string =>
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
