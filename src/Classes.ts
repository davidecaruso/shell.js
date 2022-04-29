import { hasShadow, isResponsive, isTyped } from './Config'
import type { Config } from './Config'

const shellClass = 'shell'
const statusBarClass = 'status-bar'
const shellStatusBarClass = `${shellClass}__${statusBarClass}`
const statusBarButtonsClass = `${statusBarClass}__buttons`
const statusBarIconClass = `${statusBarClass}__icon`
const statusBarTitleClass = `${statusBarClass}__title`
const shellContentClass = `${shellClass}__content`
const buttonClass = 'button'
const lineClass = 'line'
const linePrefixClass = `${lineClass}__prefix`
const lineCommandClass = `${lineClass}__command`
const cursorClass = 'typed-cursor'

export {
    shellClass,
    shellStatusBarClass,
    statusBarButtonsClass,
    statusBarIconClass,
    statusBarTitleClass,
    shellContentClass,
    lineClass,
    lineCommandClass,
    linePrefixClass,
    buttonClass,
    cursorClass,
}

export const buildClasses =
    (config: Config) =>
    (elClassName: ReadonlyArray<string>): string => {
        const classNames = [
            shellClass,
            `${shellClass}--${config.style.engine}`,
            `${shellClass}--${config.style.theme}`,
            isResponsive(config) ? `${shellClass}--responsive` : '',
            hasShadow(config) ? `${shellClass}--shadow` : '',
            isTyped(config) ? `${shellClass}--typed` : '',
        ]
        return `${elClassName.filter(c => !classNames.includes(c)).join(' ')} ${classNames.join(' ')}`
    }
