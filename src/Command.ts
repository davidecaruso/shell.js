import { Config, isMacOs, isWindows } from './Config'

export type Input = {
    _type: 'Input'
    value: string
    context: Partial<Config>
}

export type Output = {
    _type: 'Output'
    value: string
    context: Partial<Config>
}

export type Idle = {
    _type: 'Idle'
    context: Partial<Config>
}

export type IO = Input | Output | Idle

type Executable = {
    input: string
    output: <C extends Pick<Config, 'user' | 'host' | 'path' | 'root'>>(
        context: C
    ) => { context: Partial<C> | undefined; value: string }
}

export type Command = string | Executable

export const isExecutable = (command: Command): command is Executable => !(typeof command === 'string')

export const input =
    (context: Partial<Config>) =>
    (value: string): Input => ({
        _type: 'Input',
        context,
        value,
    })

export const output =
    (context: Partial<Config>) =>
    (value: string): Output => ({
        _type: 'Output',
        context,
        value,
    })

export const idle = (context: Partial<Config>) => (): Idle => ({
    _type: 'Idle',
    context,
})

const is =
    <A extends Input | Output | Idle>(t: A['_type']) =>
    (io: Input | Output | Idle): io is A =>
        io._type === t
export const isInput = is<Input>('Input')
export const isOutput = is<Output>('Output')
export const isIdle = is<Idle>('Idle')

const commands: Record<string, (input: Input) => Output | null> = {
    sudo: ({ context }: Input) =>
        context.root
            ? null
            : output({ ...context, ...{ root: !isWindows(context) ? true : context.root } })(
                  isMacOs(context)
                      ? 'Password: <span class="icon-key"></span>'
                      : isWindows(context)
                      ? 'bash: sudo: command not found'
                      : `[sudo] password for ${context.user}:`
              ),

    exit: ({ context }: Input) =>
        output({ ...context, ...{ root: !isWindows(context) ? false : context.root } })(
            isWindows(context) ? 'bash: exit: command not found' : 'logout'
        ),
}

export const exec = (command: Input): Output | null =>
    Object.keys(commands)
        .map(cmd => (new RegExp(cmd).test(command.value) ? commands[cmd](command) : null))
        .filter(Boolean)[0]
