import {Builder} from "./Interfaces";
export class UbuntuBuilder implements Builder{
    private html: string;
    addContent(): string {
        return "";
    }

    addStatusBar(): string {
        return "";
    }

    get(): string {
        return this.html;
    }
}