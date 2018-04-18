import {Options} from "./Options";
export interface Builder {
    addStatusBar(): string;
    addContent(): string;
    get(): string
}
