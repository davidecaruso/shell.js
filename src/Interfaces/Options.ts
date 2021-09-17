import { Style, Theme } from './index'

export interface Options {
    user: string;
    host: string;
    path: string;
    style: Style;
    theme: Theme;
    typed?: any;
    responsive: boolean;
    commands: string[];
    root: boolean;
}
