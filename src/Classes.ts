import type { Config } from './Config'
import { defaultConfig, hasShadow, isResponsive, isTyped } from './Config'

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
    (config: Partial<Config>) =>
    (elClassName: ReadonlyArray<string> = []): ReadonlyArray<string> => {
        const classNames = [
            shellClass,
            `${shellClass}--${config.style?.engine ?? defaultConfig.style?.engine}`,
            `${shellClass}--${config.style?.theme ?? defaultConfig.style?.theme}`,
            isResponsive(config) ? `${shellClass}--responsive` : '',
            hasShadow(config) ? `${shellClass}--shadow` : '',
            isTyped(config) ? `${shellClass}--typed` : '',
        ].filter(Boolean)
        return [...elClassName.filter(c => !classNames.includes(c)), ...classNames]
    }
