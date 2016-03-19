// The MIT License (MIT)

// Copyright (c) 2016 Davide Caruso

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

;(function (window, document, undefined) {

    // Strict Mode
    'use strict';

    // Constants
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

        // DOM Context
        this.element = element;

        // Data Extraction
        var data = {
            user: this.data(this.element, 'user'),
            host: this.data(this.element, 'host'),
            path: this.data(this.element, 'path'),
            style: this.data(this.element, 'style'),
            theme: parseFloat(this.data(this.element, 'theme')),
            responsive: parseFloat(this.data(this.element, 'responsive'))
        };

        // Delete Null Data Values
        for (var key in data) {
            if (data[key] === null) delete data[key];
        }

        // Compose Settings Object
        this.extend(this, DEFAULTS, options);

        // Initialise
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

        if (this.element) {

            /// Commands list
            COMMANDS = this.commands;

            /// Classes for HTML element
            CLASSES = (
                "shell " + this.style + " " + this.theme + " " +
                (this.responsive ? "responsive " : "").toString() + " " +
                (this.shadow ? "shadow " : "")
            ).toString();

            /// Build the status bar with title and buttons
            STATUSBAR = this.buildStatusBar();

            /// Open the content of the shell
            CONTENT = '<div class="content">';

            /// If style is OSX add a new line with last login
            if (this.style === "osx") {

                CONTENT += '' +
                    '<div class="line">' +
                        '<span class="command">Last login: ' + DAYS[DATE.getDay()] + ' ' + MONTHS[DATE.getMonth()] +
                        ' ' + pad(DATE.getHours(), 2) + ':' + pad(DATE.getMinutes(), 2) + ':' +
                        pad(DATE.getSeconds(), 2) + ' on ttys000</span>' +
                    '</div>';

            }

            /// If have some commands...
            if (typeof COMMANDS === "object" && COMMANDS[0]) {

                this.root = false;
                var THIS = this;
                PREFIX = this.buildPrefix();

                COMMANDS.forEach(function(command) {

                    CONTENT += '' +
                        '<div class="line' + (THIS.root ? ' root' : '') + '">' + PREFIX +
                            '<span class="command">' + command + '</span>' +
                        '</div>';


                    if(THIS.style !== "windows") {

                        /// If command contains "sudo" become root user
                        if (/sudo/.test(command)) {

                            THIS.root = true;
                            PREFIX = THIS.buildPrefix();
                            STATUSBAR = THIS.buildStatusBar();
                            CONTENT += '' +
                                '<div class="line root">' +
                                '[sudo] password for ' + THIS.user + ':<span class="command"></span>' +
                                '</div>'

                        }

                        /// If command contains "exit" logout from root
                        if (/exit/.test(command)) {

                            THIS.root = false;
                            PREFIX = THIS.buildPrefix();
                            STATUSBAR = THIS.buildStatusBar();
                            CONTENT += '<div class="line logout">logout</div>'

                        }

                    }

                });

            }

            /// Close the content of the shell
            CONTENT += '</div>';

            /// Fill the HTML element with status bar and content
            this.element.className += CLASSES;
            this.element.innerHTML = STATUSBAR + CONTENT;
        }


    };

    // Expose Shell
    window[NAME] = Shell;

})(window, document);