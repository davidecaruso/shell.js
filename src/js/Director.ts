import {Builder} from "./Builders/Builder";

export default class Director {
    public build(builder: Builder): string {
        builder.create();
        builder.addStatusBar();
        builder.addContent();
        return builder.get();
    }
}
