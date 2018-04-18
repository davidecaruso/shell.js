import {Style} from "./Enums";
import {Builder} from "./Interfaces";
import {UbuntuBuilder} from "./UbuntuBuilder";
export default class Factory {
    public create(style: Style): Builder {
        // switch (style) {
        //     default:
                return new UbuntuBuilder();
        // }
    }
}