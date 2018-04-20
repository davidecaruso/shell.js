import {Builder, Options} from "./Interfaces";
import {UbuntuBuilder} from "./UbuntuBuilder";
export default class Factory {
    public create(options: Options): Builder {
        // switch (options.style) {
        //     default:
                return new UbuntuBuilder(options);
        // }
    }
}
