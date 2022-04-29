import type { Config } from './Config'

export type Input = {
    _type: 'Input'
    value: string
    context: Config
}

export type Output = {
    _type: 'Output'
    value: string
    context: Config
}

export type Idle = {
    _type: 'Idle'
    context: Config
}

export type IO = Input | Output | Idle

export const input =
    (context: Config) =>
    (value: string): Input => ({
        _type: 'Input',
        context,
        value,
    })

export const output =
    (context: Config) =>
    (value: string): Output => ({
        _type: 'Output',
        context,
        value,
    })

export const idle = (context: Config) => (): Idle => ({
    _type: 'Idle',
    context,
})

const is =
    <A extends Input | Output | Idle>(t: A['_type']) =>
    (io: IO): io is A =>
        io._type === t
export const isInput = is<Input>('Input')
export const isOutput = is<Output>('Output')
export const isIdle = is<Idle>('Idle')

export const login = (context: Config): Output => {
    const d = new Date()
    const [month, date, day, hours, minutes, seconds] = [
        d.getMonth(),
        d.getDate(),
        d.getDay(),
        d.getHours().toString(),
        d.getMinutes().toString(),
        d.getSeconds().toString(),
    ]
    return output(context)(
        context.style.engine === 'macos'
            ? `Last login: ${['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][day]} ${
                  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][month]
              } ${date} ${hours.length === 2 ? hours : '0' + hours}:${minutes.length === 2 ? minutes : '0' + minutes}:${
                  seconds.length === 2 ? seconds : '0' + seconds
              } on ttys000`
            : ''
    )
}

const commands: Record<string, (input: Input) => Output | null> = {
    sudo: ({ context }: Input) =>
        context.root
            ? null
            : output({ ...context, ...{ root: context.style.engine !== 'windows' ? true : context.root } })(
                  context.style.engine === 'macos'
                      ? 'Password: <span class="icon-key"></span>'
                      : context.style.engine === 'windows'
                      ? 'bash: sudo: command not found'
                      : `[sudo] password for ${context.user}:`
              ),

    exit: ({ context }: Input) =>
        output({ ...context, ...{ root: context.style.engine !== 'windows' ? false : context.root } })(
            context.style.engine === 'windows' ? 'bash: exit: command not found' : 'logout'
        ),
}

export const exec = (command: Input): Output | null =>
    Object.keys(commands)
        .map(cmd => (Boolean(new RegExp(cmd).test(command.value)) ? commands[cmd](command) : null))
        .filter(Boolean)[0]
