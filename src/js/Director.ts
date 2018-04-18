import {Builder} from "./Interfaces";
export default class Director {
    public build(builder: Builder): string {
        builder.addStatusBar();
        builder.addContent();
        return builder.get();
    }
}