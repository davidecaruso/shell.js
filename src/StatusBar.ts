import {
    buttonClass,
    shellStatusBarClass,
    statusBarButtonsClass,
    statusBarIconClass,
    statusBarTitleClass,
} from './Classes'
import type { Config } from './Config'

const statusBarButtons = ({ style: { engine } }: Pick<Config, 'style'>): string => {
    switch (engine) {
        case 'windows':
            return (
                `<button class="${buttonClass} ${buttonClass}--minimize"><i class="icon-minimize"></i></button>` +
                `<button class="${buttonClass} ${buttonClass}--enlarge"><i class="icon-enlarge"></i></button>` +
                `<button class="${buttonClass} ${buttonClass}--close"><i class="icon-close"></i></button>`
            )

        case 'macos':
            return (
                `<button class="${buttonClass} ${buttonClass}--close"><i class="icon-dot"></i></button>` +
                `<button class="${buttonClass} ${buttonClass}--minimize"><i class="icon-minimize"></i></button>` +
                `<button class="${buttonClass} ${buttonClass}--enlarge"><i class="icon-enlarge"></i></button>`
            )

        default:
            return (
                `<button class="${buttonClass} ${buttonClass}--close"><i class="icon-close"></i></button>` +
                `<button class="${buttonClass} ${buttonClass}--minimize"><i class="icon-minimize"></i></button>` +
                `<button class="${buttonClass} ${buttonClass}--enlarge"><i class="icon-enlarge"></i></button>`
            )
    }
}

const statusBarIcon = ({ style: { engine } }: Pick<Config, 'style'>) => {
    switch (engine) {
        case 'windows':
            return '<i class="icon-command"></i>'

        default:
            return ''
    }
}

const statusBarTitle = ({
    host,
    path,
    user,
    root,
    style: { engine },
}: Pick<Config, 'style' | 'path' | 'host' | 'user' | 'root'>): string => {
    switch (engine) {
        case 'windows':
            return 'Command Prompts'

        case 'macos':
            return `${root ? 'root' : user} &ndash; sh &ndash; 80x24`

        default:
            return `${root ? 'root' : user}@${host}: ${path}`
    }
}

export const buildStatusBar = (config: Config): string =>
    `<div class="${shellStatusBarClass}">
        <div class="${statusBarIconClass}">${statusBarIcon(config)}</div>
        <div class="${statusBarButtonsClass}">${statusBarButtons(config)}</div>
        <div class="${statusBarTitleClass}">${statusBarTitle(config)}</div>
    </div>`
