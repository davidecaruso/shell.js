import {Options, Style} from "../Interfaces/";
import {OsxBuilder, UbuntuBuilder, WindowsBuilder, DefaultBuilder, BuilderInterface} from "./";

export class BuilderFactory {
    public create(options: Options): BuilderInterface {
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
