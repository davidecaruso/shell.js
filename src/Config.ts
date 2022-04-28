type Style = 'default' | 'macos' | 'ubuntu' | 'windows'

type Theme = 'dark' | 'light'

type Command = string

type Typed = new (...args: unknown[]) => unknown

export type Config = {
    user: string
    host: string
    path: string
    root: boolean
    style: Style
    theme: Theme
    typed?: Typed
    responsive: boolean
    commands: ReadonlyArray<Command>
}

export const defaultConfig: Config = {
    commands: [],
    user: 'user',
    host: 'host',
    path: '~',
    responsive: true,
    root: false,
    style: 'default',
    theme: 'dark',
    typed: undefined,
}
