import { Shell } from '../Shell'

export interface BuilderInterface {
    /**
     * Add the status bar to the Shell.
     *
     * @return {BuilderInterface}
     */
    addStatusBar(): this;

    /**
     * Add the content to the Shell.
     *
     * @return {BuilderInterface}
     */
    addContent(): this;

    /**
     * Build the Shell.
     *
     * @return {Shell}
     */
    build(): Shell;
}
