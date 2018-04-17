export default interface OptionsInterface {
    user: string;
    host: string;
    path: string;
    style: "osx"|"windows"|"ubuntu"|"default";
    theme: "dark"|"light";
    typed?: any;
    responsive: boolean;
    commands: string[];
    root: boolean;
}