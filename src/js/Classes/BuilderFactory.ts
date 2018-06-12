import {Builder, Options} from "../Interfaces";
import {Style} from "../Enums";
import {OsxBuilder, UbuntuBuilder, WindowsBuilder, DefaultBuilder} from "./";

export class BuilderFactory {
    public create(options: Options): Builder {
        switch (options.style) {
            case Style.OSX:
                return new OsxBuilder(options);
            case Style.UBUNTU:
                return new UbuntuBuilder(options);
            case Style.WINDOWS:
                return new WindowsBuilder(options);
            default:
                return new DefaultBuilder(options);
        }
    }
}