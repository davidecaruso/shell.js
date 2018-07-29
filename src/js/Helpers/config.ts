import {Options, Style, Theme} from "../Interfaces";

export const defaultClassName: string = "shell";
export const defaultOptions: Options = {
    commands: [],
    host: "host",
    path: "~",
    responsive: true,
    root: false,
    style: Style.DEFAULT,
    theme: Theme.DARK,
    typed: null,
    user: "user"
};
