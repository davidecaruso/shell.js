;(function ($, window, document, undefined) {

    /// Strict Mode
    'use strict';

    /// Constants
    var NAME = 'shell',
        DEFAULTS = {
            user: "user", /// The user of the shell
            host: "host", /// The host of the shell
            path: "~", /// The current path
            style: "custom", /// The style (custom, ubuntu, osx, windows)
            theme: "dark", /// The theme (dark, light)
            responsive: false, /// If is responsive
            shadow: true, /// Display the shadow
            typed: false, /// Use the Typed.js integration
            commands: [] /// The commands list
        },
        DATE = new Date(),
        DAYS = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
        MONTHS = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
        COMMANDS, CLASSES, STATUSBAR, CONTENT, PREFIX;

    function Plugin (element, options) {

        /// DOM Context
        this.element = element;

        /// Selections
        this.$context = $(element).data('api', this);

        /// Compose Settings Object
        $.extend(this, DEFAULTS, options);

        /// Initialize
        this.initialize();
    }

    /// Fill a string of a determinate length with a char
    function pad(string, length, char) {
        char = char || '0';
        string = string + '';
        return string.length >= length ? string : new Array(length - string.length + 1).join(char) + string;
    }

    /// Builds the prefix of the command
    Plugin.prototype.buildPrefix = function() {

        var prefix = '',
            userName = this.root ? 'root' : this.user,
            bashChar = this.root ? '#' : '$';

        switch(this.style) { /// Which OS

            case "osx":
                prefix = '<span class="host">' + this.host +'</span>:' +
                         '<span class="path">' + this.path + '</span> ' +
                         '<span class="user">' + userName + bashChar + '</span> ';
                break;

            case "windows":
                this.path = this.path !== DEFAULTS.path ? this.path : "C:\\Windows\\system32\\";
                prefix = '<span class="path">' + this.path + '&gt;</span> ';
                break;

            case "ubuntu":
            default:
                prefix = '<span class="user">' + userName + '@</span>' +
                         '<span class="host">' + this.host +'</span>:' +
                         '<span class="path">' + this.path + '</span>' + bashChar + ' ';
                break;

        }

        return prefix;

    };
    
    
    /// Builds the status bar of the shell window
    Plugin.prototype.buildStatusBar = function () {

        var statusBar = '<div class="status-bar">',
            userName = this.root ? 'root' : this.user,
            buttons,
            title;

        switch (this.style) { /// Which OS

            case "osx":
                buttons = '<div class="buttons">' +
                            '<a href="javascript:;" class="close" title="Close"><i class="fa fa-times"></i></a>' +
                            '<a href="javascript:;" class="minimize" title="Minimize"><i class="fa fa-minus"></i></a>' +
                            '<a href="javascript:;" class="enlarge" title="Enlarge"><i class="fa fa-plus"></i></a>' +
                          '</div>';
                title = '<div class="title">' +
                            userName + ' &horbar; sh' +
                        '</div>';
                statusBar += buttons + title;
                break;

            case "windows":
                buttons = '<div class="buttons">' +
                            '<a href="javascript:;" class="minimize" title="Minimize"><i class="fa fa-minus"></i></a>' +
                            '<a href="javascript:;" class="enlarge" title="Enlarge"><i class="fa fa-square-o"></i></a>' +
                            '<a href="javascript:;" class="close" title="Close"><i class="fa fa-times"></i></a>' +
                           '</div>';
                title = '<div class="title">' +
                    '<span class="icon"><i class="fa fa-terminal"></i></span> Command Prompt' +
                    '</div>';
                statusBar += title + buttons;
                break;

            case "ubuntu":
            default:
                buttons = '<div class="buttons">' +
                            '<a href="javascript:;" class="close" title="Close"><i class="fa fa-times"></i></a>' +
                            '<a href="javascript:;" class="minimize" title="Minimize"><i class="fa fa-minus"></i></a>' +
                            '<a href="javascript:;" class="enlarge" title="Enlarge"><i class="fa fa-plus"></i></a>' +
                          '</div>';
                title = '<div class="title">' +
                            userName + '@' + this.host + ': ' + this.path +
                        '</div>';
                statusBar += buttons + title;
                break;

        }

        statusBar += '</div>';

        return statusBar;
    };


    Plugin.prototype.initialize = function () {

        var THIS = this;
        
        if ($(THIS.element).length) {

            /// Commands list
            COMMANDS = THIS.commands;

            /// Classes for HTML element
            CLASSES = (
                "shell " + THIS.style + " " + THIS.theme + " " +
                (THIS.responsive ? "responsive " : "").toString() + " " +
                (THIS.shadow ? "shadow " : "") +
                (THIS.typed ? "typed " : "")
            ).toString();

            /// Build the status bar with title and buttons
            STATUSBAR = THIS.buildStatusBar();

            /// Open the content of the shell
            CONTENT = '<div class="content">';

            /// If style is OSX add a new line with last login
            if (THIS.style === "osx") {

                CONTENT += '' +
                    '<div class="line">' +
                        '<span class="command">Last login: ' + DAYS[DATE.getDay()] + ' ' + MONTHS[DATE.getMonth()] +
                        ' ' + pad(DATE.getHours(), 2) + ':' + pad(DATE.getMinutes(), 2) + ':' +
                        pad(DATE.getSeconds(), 2) + ' on ttys000</span>' +
                    '</div>';

            }

            /// If have some commands...
            if (typeof COMMANDS === "object" && COMMANDS[0]) {

                var c = 0, i = 0;
                THIS.root = false;
                PREFIX = THIS.buildPrefix();

                /// Print each command
                $.each(COMMANDS, function( index, value ) {

                    CONTENT += '' +
                        '<div class="line line-' + c + (THIS.root ? ' root' : '') + '">' + PREFIX +
                            '<span class="command">' + value + '</span>' +
                        '</div>';

                    if (THIS.style !== "windows") {

                        /// If command contains "sudo" become root user
                        if (/sudo/.test(value)) {

                            c = c + 1;
                            THIS.root = true;
                            PREFIX = THIS.buildPrefix();
                            STATUSBAR = THIS.buildStatusBar();
                            CONTENT += '' +
                                '<div class="line line-' + c + ' sudo">' +
                                    '[sudo] password for ' + THIS.user + ':<span class="command"></span>' +
                                '</div>';

                        }

                        /// If command contains "exit" logout from root
                        if (/exit/.test(value)) {

                            c = c + 1;
                            THIS.root = false;
                            PREFIX = THIS.buildPrefix();
                            STATUSBAR = THIS.buildStatusBar();
                            CONTENT += '<div class="line line-' + c + ' logout">logout</div>';

                        }

                    }

                    /// Adds a new empty line of command at the end
                    if( i == COMMANDS.length - 1 ) {

                        PREFIX = THIS.buildPrefix();
                        STATUSBAR = THIS.buildStatusBar();
                        CONTENT += '' +
                            '<div class="line line-' + c + (THIS.root ? ' root' : '') + (!THIS.typed ? ' active' : '') + '">' + PREFIX +
                                '<span class="command"></span>' + (!THIS.typed ? '<span class="typed-cursor">&nbsp;</span>' : '') +
                            '</div>';

                    }

                    c = c + 1;
                    i = i + 1;

                });

            }

            /// Close the content of the shell
            CONTENT += '</div>';

            /// Fill the HTML element with status bar and content
            $(THIS.element).addClass(CLASSES);
            $(THIS.element).html(STATUSBAR + CONTENT);

            /// Typed.js integration
            if(THIS.typed && typeof $.fn.typed !== 'undefined') {

                var nCommands = $(THIS.element).find(".line").length,
                    line, command, commandText, speed, reset,
                    initCommands = function (i) {

                        line = $(THIS.element).find(".line-" + i);
                        command = line.find(".command");
                        commandText = line.find(".command").html();
                        speed = line.hasClass("sudo") ? "2500" : "800"; /// Time for password

                        command.html(null);
                        line.addClass("active");

                        command.typed({
                            strings: ["^" + speed + commandText],
                            typeSpeed: 50,
                            cursorChar: "&nbsp;",
                            showCursor: true,
                            callback: function () {
                                /// Removes cursor from each line except for the last one
                                if( i !== nCommands - 2 && i < nCommands ) {
                                    line.find(".typed-cursor").remove();
                                    initCommands(i + 1);
                                }
                            }
                        });

                    };

                initCommands(0);

            }

        }

    };


    $.fn[NAME] = function (value) {
        var args = arguments;
        return this.each(function () {
            var $this = $(this);
            var plugin = $this.data(NAME);
            if (!plugin) {
                plugin = new Plugin(this, value);
                $this.data(NAME, plugin);
            }
        });
    };

})(window.jQuery, window, document);