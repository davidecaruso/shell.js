import {Builder} from "../Interfaces";

export class Director {
    public build(builder: Builder): string {
        builder.create();
        builder.addStatusBar();
        builder.addContent();
        return builder.get();
    }
}
