import { Options, Style } from '../Interfaces'
import { BuilderInterface, DefaultBuilder, OsxBuilder, UbuntuBuilder, WindowsBuilder } from './index'

export class BuilderFactory {
    /**
     * Create a new builder instance basing on the passed options.
     * @param {Options} options
     *
     * @return {BuilderInterface}
     */
    public create(options: Options): BuilderInterface {
        switch (options.style) {
            case Style.OSX:
                return new OsxBuilder(options)
            case Style.UBUNTU:
                return new UbuntuBuilder(options)
            case Style.WINDOWS:
                return new WindowsBuilder(options)
            default:
                return new DefaultBuilder(options)
        }
    }
}
