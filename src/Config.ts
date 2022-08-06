type Engine = 'default' | 'macos' | 'ubuntu' | 'windows'
type Theme = 'dark' | 'light'

export type Config = {
    user: string
    host: string
    path: string
    root: boolean
    style: Partial<{
        engine: Engine
        theme: Theme
        responsive: boolean
        shadow: boolean
    }>
    typing?: {
        ctor: new (...args: unknown[]) => unknown
        opts?: Record<string, unknown>
    }
}

export const defaultConfig: Config = {
    user: 'user',
    host: 'host',
    path: '~',
    root: false,
    style: {
        engine: 'default',
        responsive: true,
        shadow: true,
        theme: 'dark',
    },
    typing: undefined,
}

export const isTyped = ({ typing }: Pick<Partial<Config>, 'typing'>): boolean =>
    Boolean(typing && typeof typing.ctor === 'function')
export const isRoot = ({ root }: Pick<Partial<Config>, 'root'>): boolean => Boolean(root)
export const isResponsive = ({ style }: Pick<Partial<Config>, 'style'>): boolean => Boolean(style?.responsive)
export const isWindows = ({ style }: Pick<Partial<Config>, 'style'>): boolean => style?.engine === 'windows'
export const isMacOs = ({ style }: Pick<Partial<Config>, 'style'>): boolean => style?.engine === 'macos'
export const isUbuntu = ({ style }: Pick<Partial<Config>, 'style'>): boolean => style?.engine === 'ubuntu'
export const isDefault = ({ style }: Pick<Partial<Config>, 'style'>): boolean => style?.engine === 'default'
export const hasShadow = ({ style }: Pick<Partial<Config>, 'style'>): boolean => Boolean(style?.shadow)

export const buildConfig = (config: Partial<Config>): Config => {
    const cfg: Config = { ...defaultConfig, ...config }
    return {
        ...cfg,
        path: isWindows(cfg) && cfg.path === defaultConfig.path ? 'C:\\Windows\\system32\\' : cfg.path,
    }
}
