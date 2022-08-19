type Engine = 'default' | 'macos' | 'ubuntu' | 'windows'
type Theme = 'dark' | 'light'
type Typing = {
    ctor: new (...args: unknown[]) => unknown
    opts?: Record<string, unknown>
}

export type Config = {
    user: string
    host: string
    path: string
    root: boolean
    engine: Engine
    theme: Theme
    responsive: boolean
    shadow: boolean
    typing?: Typing
}

export const defaultConfig: Config = {
    user: 'user',
    host: 'host',
    path: '~',
    root: false,
    engine: 'default',
    responsive: true,
    shadow: true,
    theme: 'dark',
    typing: undefined,
}

export const isTyped = <C extends Pick<Partial<Config>, 'typing'>>(c: C): c is C & { typing: Typing } =>
    Boolean(c.typing && typeof c.typing.ctor === 'function')

export const isRoot = <C extends Pick<Partial<Config>, 'root'>>(c: C): c is C & { root: true } => Boolean(c.root)

export const isResponsive = <C extends Pick<Partial<Config>, 'responsive'>>(c: C): c is C & { responsive: true } =>
    Boolean(c?.responsive)

export const isWindows = <C extends Pick<Partial<Config>, 'engine'>>(c: C): c is C & { engine: 'windows' } =>
    c?.engine === 'windows'

export const isMacOs = <C extends Pick<Partial<Config>, 'engine'>>(c: C): c is C & { engine: 'macos' } =>
    c?.engine === 'macos'

export const isUbuntu = <C extends Pick<Partial<Config>, 'engine'>>(c: C): c is C & { engine: 'ubuntu' } =>
    c?.engine === 'ubuntu'

export const isDefault = <C extends Pick<Partial<Config>, 'engine'>>(c: C): c is C & { engine: 'default' } =>
    c?.engine === 'default'

export const hasShadow = <C extends Pick<Partial<Config>, 'shadow'>>(c: C): c is C & { shadow: true } =>
    Boolean(c?.shadow)

export const buildConfig = (config: Partial<Config>): Config => {
    const cfg: Config = { ...defaultConfig, ...config }
    return {
        ...cfg,
        path: isWindows(cfg) && cfg.path === defaultConfig.path ? 'C:\\Windows\\system32\\' : cfg.path,
    }
}
