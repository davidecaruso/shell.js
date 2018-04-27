import "../sass/main.scss"
import {BuilderFactory, Director} from "./Classes";
import {Options} from "./Interfaces";
import {Style, Theme} from "./Enums";
import {$, arrDiff} from "./util";

module.exports = class Shell {
    private readonly director: Director;
    private readonly el: Element;
    private readonly factory: BuilderFactory;
    private readonly name = "shell";
    private options: Options = {
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

    /**
     * Shell.js constructor
     * @param {string} selector
     * @param {Options} options
     */
    constructor(selector: string, options: Options) {
        // If element exists
        if ($(selector).length) {
            this.el = $(selector)[0];
            this.director = new Director();
            this.factory = new BuilderFactory();

            // Merge options
            this.options = {...this.options, ...options};

            // Hardcode for Windows
            if (this.options.style === "windows" && this.options.path === "~") {
                this.options.path = "C:\\Windows\\system32\\";
            }

            this.init();
        }
    }

    private addClassNames() {
        let classes = [
            this.name,
            this.options.style,
            this.options.theme
        ];

        if (this.options.responsive) {
            classes.push("responsive");
        }
        if (this.options.typed) {
            classes.push("typed");
        }

        // Get current classes of the element
        let currentClasses = this.el.className.split(" ").filter(className => className !== "");
        // Remove duplicates
        currentClasses = arrDiff(currentClasses, classes);
        // Add classes to element
        this.el.className = `${currentClasses.join(" ")} ${classes.join(" ")}`;
    }

    private bindTyping(): void {
        // Typed.js integration
        if (this.options.typed && typeof this.options.typed === "function") {
            let commandsNum = $(".line", this.el).length;

            // Execute commands
            if (commandsNum) {
                this.type(0, commandsNum);
            }
        } else {
            // Typed.js was not found, remove class
            this.el.className = this.el.className.replace(" typed", "");
        }
    }

    /**
     * Build the HTML structure and execute commands.
     */
    private init(): void {
        this.addClassNames();
        let builder = this.factory.create(this.options);
        this.el.innerHTML = this.director.build(builder);
        this.bindTyping();
    }

    /**
     * Type terminal commands.
     */
    private type(index, commandsNum): void {
        let typed = this.options.typed;
        let line = $(`.line-${index}`, this.el);
        let command = $(".command", line[0]);
        let commandText = command[0].innerHTML;
        let speed = "^800";

        // Show the line
        line[0].className = `active ${line[0].className}`;

        if (command[0].className.indexOf("output") === -1 && index < commandsNum - 1) {

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
                    line[0].removeChild($(".typed-cursor", line[0])[0]);
                    this.type((index + 1), commandsNum);
                }
            });

        } else if (index <= commandsNum - 2) {
            // After the bash output go type next line
            this.type((index + 1), commandsNum);
        }
    };
};
