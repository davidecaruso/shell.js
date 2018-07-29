import "../sass/main.scss";
import {BuilderFactory} from "./Builders/";
import {Options} from "./Interfaces";
import {$, defaultClassName, defaultOptions} from "./Helpers/";
import {arrDiff} from "./Helpers";

module.exports = class Shell {
    private readonly el: Element;
    private readonly factory: BuilderFactory;
    private readonly options: Options = defaultOptions;

    /**
     * Shell.js constructor
     * @param {string} selector
     * @param {Options} options
     */
    constructor(selector: string, options: Options) {
        // If element exists
        if ($(selector).length) {
            this.el = $(selector)[0];
            this.factory = new BuilderFactory();

            // Merge options
            this.options = {...this.options, ...options};

            this.init();
        }
    }

    /**
     * Build the HTML structure and execute commands.
     */
    private init(): void {
        let builder = this.factory.create(this.options);
        this.addClasses();
        builder.addStatusBar();
        builder.addContent();
        this.el.innerHTML = builder.get();

        // Typed.js integration
        if (this.options.typed && typeof this.options.typed === "function") {
            let commandsNum = $(`.${defaultClassName}__line`, this.el).length;

            // Execute commands
            if (commandsNum) {
                this.type(0, commandsNum);
            }
        } else {
            // Typed.js was not found, remove class
            this.el.className =
                this.el.className.replace(` ${defaultClassName}--typed`, "");
        }
    }

    addClasses(): void {
        let classes = [defaultClassName];

        if (this.options.style !== "default") {
            classes.push(`${defaultClassName}--${this.options.style}`);
        }

        if (this.options.theme !== "dark") {
            classes.push(`${defaultClassName}--${this.options.theme}`);
        }

        if (this.options.responsive) {
            classes.push(`${defaultClassName}--responsive`);
        }

        if (this.options.typed) {
            classes.push(`${defaultClassName}--typed`);
        }

        // Get current classes of the element
        let currentClasses = this.el.className.split(" ")
        .filter(className => className !== "");

        // Remove duplicates
        currentClasses = arrDiff(currentClasses, classes);

        // Add classes to element
        this.el.className = `${currentClasses.join(" ")} ${classes.join(" ")}`;
    }

    /**
     * Type terminal commands.
     */
    private type(index, commandsNum): void {
        let typed = this.options.typed;
        let line = $(`.${defaultClassName}__line[data-index=${index}]`, this.el);
        let speed = "^800";

        if (line.length) {
            let command = $(`.${defaultClassName}__command`, line[0]);
            let commandText = command[0].innerHTML;

            // Show the line
            line[0].className = `${defaultClassName}__line--active
            ${line[0].className}`;

            if (command[0].className.indexOf(`${defaultClassName}__line--output`)
                === -1 && index < commandsNum - 1) {
                // Empty the command
                command[0].innerHTML = "";

                new typed(command[0], {
                    strings: [speed + commandText],
                    typeSpeed: 50,
                    loop: false,
                    contentType: "html",
                    cursorChar: "&nbsp;",
                    showCursor: true,
                    onStringTyped: () => {
                        // Removes cursor from each line except for the last one
                        line[0].removeChild(
                            $(`.${defaultClassName}__typed-cursor`, line[0])[0]
                        );
                        this.type((index + 1), commandsNum);
                    }
                });

            } else if (index <= commandsNum - 2) {
                // After the bash output go type next line
                this.type((index + 1), commandsNum);
            }
        }
    };
};
