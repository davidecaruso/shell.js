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

;(function ($, window, document, undefined) {

    // Strict Mode
    'use strict';

    // Constants
    var NAME = 'shell',
        DEFAULTS = {
            user: "user", /// The user of the shell
            host: "host", /// The host of the shell
            path: "~", /// The current path
            style: "custom", /// The style (custom, ubuntu, osx, windows)
            theme: "dark", /// The theme (dark, light)
            responsive: false, /// If is responsive
            shadow: true, /// Display the shadow
            commands: [] /// The commands list
        },
        DATE = new Date(),
        DAYS = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
        MONTHS = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
        COMMANDS, CLASSES, STATUSBAR, CONTENT, PREFIX;

    function Plugin (element, options) {

        // DOM Context
        this.element = element;

        // Selections
        this.$context = $(element).data('api', this);

        // Data Extraction
        //var data = {
        //    user: this.$context.data('user') || null,
        //    host: this.$context.data('host') || null,
        //    path: this.$context.data('path') || null,
        //    style: this.$context.data('style') || null,
        //    theme: parseFloat(this.$context.data('theme')) || null,
        //    responsive: parseFloat(this.$context.data('responsive')) || null
        //};

        // Delete Null Data Values
        //for (var key in data) {
        //    if (data[key] === null) delete data[key];
        //}

        // Compose Settings Object
        $.extend(this, DEFAULTS, options);

        // Initialise
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

        if ($(this.element).length) {

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

                /// Print each command
                $.each(COMMANDS, function( index, value ) {

                    CONTENT += '' +
                        '<div class="line line-' + index + (THIS.root ? ' root' : '') + '">' + PREFIX +
                            '<span class="command">' + value + '</span>' +
                        '</div>';

                    if (THIS.style !== "windows") {

                        /// If command contains "sudo" become root user
                        if (/sudo/.test(value)) {

                            THIS.root = true;
                            PREFIX = THIS.buildPrefix();
                            STATUSBAR = THIS.buildStatusBar();
                            CONTENT += '' +
                                '<div class="line root">' +
                                    '[sudo] password for ' + THIS.user + ':<span class="command"></span>' +
                                '</div>'

                        }

                        /// If command contains "exit" logout from root
                        if (/exit/.test(value)) {

                            THIS.root = false;
                            PREFIX = THIS.buildPrefix();
                            STATUSBAR = THIS.buildStatusBar();
                            CONTENT += '<div class="line logout">logout</div>'

                        }

                    }
                    
                })
            }

            /// Close the content of the shell
            CONTENT += '</div>';

            /// Fill the HTML element with status bar and content
            $(this.element).addClass(CLASSES);
            $(this.element).html(STATUSBAR + CONTENT);

        }

    };

    var API = {
        //example: Plugin.prototype.example
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
            if (API[value]) {
                plugin[value].apply(plugin, Array.prototype.slice.call(args, 1));
            }
        });
    };

})(window.jQuery, window, document);