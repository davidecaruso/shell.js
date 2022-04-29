type Engine = 'default' | 'macos' | 'ubuntu' | 'windows'
type Theme = 'dark' | 'light'

type Executable = {
    input: string
    output: <C = Pick<Config, 'user' | 'host' | 'path' | 'root'> | undefined>(
        context: C
    ) => { context: C; value: string }
}
type Command = string | Executable

export type Config = {
    user: string
    host: string
    path: string
    root: boolean
    commands: ReadonlyArray<Command>
    style: {
        engine: Engine
        theme: Theme
        responsive: boolean
        shadow: boolean
    }
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
    commands: [],
    style: {
        engine: 'default',
        responsive: true,
        shadow: true,
        theme: 'dark',
    },
    typing: undefined,
}

export const isTyped = ({ typing }: Pick<Config, 'typing'>): boolean =>
    Boolean(typing && typeof typing.ctor === 'function')
export const isResponsive = ({ style }: Pick<Config, 'style'>): boolean => style.responsive
export const hasShadow = ({ style }: Pick<Config, 'style'>): boolean => style.shadow
export const isExecutable = (command: Command): command is Executable => !(typeof command === 'string')

export const buildConfig = (config: Partial<Config>): Config => {
    const {
        path,
        style: { engine },
    } = { ...defaultConfig, ...config }
    return {
        ...defaultConfig,
        ...config,
        path: engine === 'windows' && path === defaultConfig.path ? (config.path = 'C:\\Windows\\system32\\') : path,
    }
}
