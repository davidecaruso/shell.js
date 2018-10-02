export interface BuilderInterface {
    addContent(): this;
    addStatusBar(): this;
    build(): string;
}
