export interface Builder {
    getPrefix(): string;
    addStatusBar();
    addContent();
    get();
}
