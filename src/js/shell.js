;(function (window, document, undefined) {

    /// Strict Mode
    'use strict';

    /// Constants
    var NAME = 'Shell',
        DEFAULTS = {
            user: "user", /// The user of the shell
            host: "host", /// The host of the shell
            path: "~", /// The current path
            style: "custom", /// The style (custom, ubuntu, osx, windows)
            theme: "dark", /// The theme (dark, light)
            responsive: false, /// If is responsive
            commands: [] /// The commands list
        },
        DATE = new Date(),
        DAYS = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
        MONTHS = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
        COMMANDS, CLASSES, STATUSBAR, CONTENT, PREFIX;

    function Shell(element, options) {

        /// DOM Context
        this.element = element;

        /// Compose Settings Object
        this.extend(this, DEFAULTS, options);

        /// Initialize
        this.initialize();
    }

    /// Fill a string of a determinate length with a char
    function pad(string, length, char) {
        char = char || '0';
        string = string + '';
        return string.length >= length ? string : new Array(length - string.length + 1).join(char) + string;
    }

    Shell.prototype.extend = function() {
        if (arguments.length > 1) {
            var master = arguments[0];
            for (var i = 1, l = arguments.length; i < l; i++) {
                var object = arguments[i];
                for (var key in object) {
                    master[key] = object[key];
                }
            }
        }
    };

    Shell.prototype.data = function(element, name) {
        return this.deserialize(element.getAttribute('data-'+name));
    };

    Shell.prototype.deserialize = function(value) {
        if (value === 'true') {
            return true;
        } else if (value === 'false') {
            return false;
        } else if (value === 'null') {
            return null;
        } else if (!isNaN(parseFloat(value)) && isFinite(value)) {
            return parseFloat(value);
        } else {
            return value;
        }
    };
    
    /// Builds the prefix of the command
    Shell.prototype.buildPrefix = function() {

        var PREFIX = '',
            userName = this.root ? 'root' : this.user,
            bashChar = this.root ? '#' : '$';

        switch(this.style) { /// Which OS

            case "osx":
                PREFIX = '<span class="host">' + this.host +'</span>:' +
                         '<span class="path">' + this.path + '</span> ' +
                         '<span class="user">' + userName + bashChar + '</span> ';
                break;

            case "windows":
                this.path = typeof arguments[0].path !== "undefined" ? this.path : "C:\\Windows\\system32\\";
                PREFIX = '<span class="path">' + this.path + '&gt;</span> ';
                break;

            case "ubuntu":
            default:
                PREFIX = '<span class="user">' + userName + '@</span>' +
                         '<span class="host">' + this.host +'</span>:' +
                         '<span class="path">' + this.path + '</span>' + bashChar + ' ';
                break;

        }

        return PREFIX;

    };
    
    
    /// Builds the status bar of the shell window
    Shell.prototype.buildStatusBar = function () {

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


    Shell.prototype.initialize = function () {

        var THIS = this;

        if (THIS.element) {

            /// Commands list
            COMMANDS = THIS.commands;

            /// Classes for HTML element
            CLASSES = (
                "shell " + THIS.style + " " + THIS.theme + " " +
                (THIS.responsive ? "responsive " : "").toString() + " " +
                (THIS.shadow ? "shadow " : "")
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

                COMMANDS.forEach(function(command) {

                    CONTENT += '' +
                        '<div class="line line-' + c + (THIS.root ? ' root' : '') + '">' + PREFIX +
                            '<span class="command">' + command + '</span>' +
                        '</div>';


                    if(THIS.style !== "windows") {

                        /// If command contains "sudo" become root user
                        if (/sudo/.test(command)) {

                            c = c + 1;
                            THIS.root = true;
                            PREFIX = THIS.buildPrefix();
                            STATUSBAR = THIS.buildStatusBar();
                            CONTENT += '' +
                                '<div class="line line-' + c + ' root">' +
                                    '[sudo] password for ' + THIS.user + ':<span class="command"></span>' +
                                '</div>';

                        }

                        /// If command contains "exit" logout from root
                        if (/exit/.test(command)) {

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
            THIS.element.className += CLASSES;
            THIS.element.innerHTML = STATUSBAR + CONTENT;

        }

    };

    // Expose Shell
    window[NAME] = Shell;

})(window, document);