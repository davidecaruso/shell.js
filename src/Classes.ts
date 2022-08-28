import type { Config } from './Config'
import { defaultConfig, hasShadow, isResponsive, isTyped } from './Config'

export const shellClass = 'shell'
export const responsiveShellClass = `${shellClass}--responsive`
export const shadowedShellClass = `${shellClass}--shadow`
export const typedShellClass = `${shellClass}--typed`
export const statusBarClass = 'status-bar'
export const shellStatusBarClass = `${shellClass}__${statusBarClass}`
export const statusBarButtonsClass = `${statusBarClass}__buttons`
export const statusBarIconClass = `${statusBarClass}__icon`
export const statusBarTitleClass = `${statusBarClass}__title`
export const shellContentClass = `${shellClass}__content`
export const buttonClass = 'button'
export const minimizeButtonClass = `${buttonClass}--minimize`
export const enlargeButtonClass = `${buttonClass}--enlarge`
export const closeButtonClass = `${buttonClass}--close`
export const minimizeButtonIconClass = `icon-minimize`
export const enlargeButtonIconClass = `icon-enlarge`
export const closeButtonIconClass = `icon-close`
export const dotButtonIconClass = `icon-dot`
export const lineClass = 'line'
export const activeLineClass = `${lineClass}--active`
export const rootLineClass = `${lineClass}--root`
export const linePrefixClass = `${lineClass}__prefix`
export const lineCommandClass = `${lineClass}__command`
export const lineInputCommandClass = `${lineCommandClass}--input`
export const lineOutputCommandClass = `${lineCommandClass}--output`
export const lineIdleCommandClass = `${lineCommandClass}--idle`
export const cursorClass = 'typed-cursor'

export const buildClasses =
    (config: Partial<Config>) =>
    (elClassName: string): string => {
        const classNames = [
            shellClass,
            `${shellClass}--${config?.engine ?? defaultConfig?.engine}`,
            `${shellClass}--${config?.theme ?? defaultConfig?.theme}`,
            isResponsive(config) ? responsiveShellClass : '',
            hasShadow(config) ? shadowedShellClass : '',
            isTyped(config) ? typedShellClass : '',
        ].filter(Boolean)
        return [
            ...elClassName
                .split(' ')
                .map(c => c.trim())
                .filter(c => !classNames.includes(c)),
            ...classNames,
        ]
            .join(' ')
            .trim()
    }
