export interface Builder {
    create(): void;
    addContent(): void;
    addStatusBar(): void;
    getPrefix(): string;
    get(): string;
}
