export interface Builder {
    create(): void;
    addContent(): void;
    addStatusBar(): void;
    get(): string;
}
