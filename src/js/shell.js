import defaults from './defaults.js';

/**
 * Shell.js
 * @param {string} elementId HTML element ID _OR_ HTML element
 * @param {object} options options object
 * @returns {object} a new Typed object
 */
export default class Shell {

  constructor(elementId, options) {
    this.initialize(elementId, options);
    this.build();
  }

  /**
   * Load up defaults & options on the Shell instance
   * @param {string} elementId HTML element ID || instance of HTML element
   * @param {object} options options object
   * @static
   * @private
   */
  static initialize(elementId, options) {

    this.el = null;
    this.options = {};
    this.commands = [];

    if (typeof elementId === 'string') {
      this.el = document.querySelector(elementId);
    } else {
      this.el = elementId;
    }

    this.options = {...defaults, ...options};

  };

  build() {
/*
    if (self.el) {

      /// Commands list
      COMMANDS = self.commands;

      /// Classes for HTML element
      CLASSES = (
        "shell " + self.style + " " + self.theme + " " +
        (self.responsive ? "responsive " : "").toString() + " " +
        (self.shadow ? "shadow " : "")
      ).toString();

      /// Build the status bar with title and buttons
      STATUSBAR = self.buildStatusBar();

      /// Open the content of the shell
      CONTENT = '<div class="content">';

      /// If style is OSX add a new line with last login
      if (self.style === "osx") {

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
        self.root = false;
        PREFIX = self.buildPrefix();

        COMMANDS.forEach(function(command) {

          CONTENT += '' +
            '<div class="line line-' + c + (self.root ? ' root' : '') + '">' + PREFIX +
            '<span class="command">' + command + '</span>' +
            '</div>';


          if(self.style !== "windows") {

            /// If command contains "sudo" become root user
            if (/sudo/.test(command)) {

              c = c + 1;
              self.root = true;
              PREFIX = self.buildPrefix();
              STATUSBAR = self.buildStatusBar();
              CONTENT += '' +
                '<div class="line line-' + c + ' root">' +
                '[sudo] password for ' + self.user + ':<span class="command"></span>' +
                '</div>';

            }

            /// If command contains "exit" logout from root
            if (/exit/.test(command)) {

              c = c + 1;
              self.root = false;
              PREFIX = self.buildPrefix();
              STATUSBAR = self.buildStatusBar();
              CONTENT += '<div class="line line-' + c + ' logout">logout</div>';

            }

          }

          /// Adds a new empty line of command at the end
          if( i == COMMANDS.length - 1 ) {

            PREFIX = self.buildPrefix();
            STATUSBAR = self.buildStatusBar();
            CONTENT += '' +
              '<div class="line line-' + c + (self.root ? ' root' : '') + (!self.typed ? ' active' : '') + '">' + PREFIX +
              '<span class="command"></span>' + (!self.typed ? '<span class="typed-cursor">&nbsp;</span>' : '') +
              '</div>';

          }

          c = c + 1;
          i = i + 1;

        });

      }

      /// Close the content of the shell
      CONTENT += '</div>';

      /// Fill the HTML element with status bar and content
      self.el.className += CLASSES;
      self.el.innerHTML = STATUSBAR + CONTENT;

    }*/
  }

}


// ;(function (window, document, undefined) {
//
//     /// Strict Mode
//     'use strict';
//
//     /// Constants
//     var NAME = 'Shell',
//         DATE = new Date(),
//         DAYS = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
//         MONTHS = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
//         COMMANDS, CLASSES, STATUSBAR, CONTENT, PREFIX;
//
//     /// Fill a string of a determinate length with a char
//     function pad(string, length, char) {
//         char = char || '0';
//         string = string + '';
//         return string.length >= length ? string : new Array(length - string.length + 1).join(char) + string;
//     }
//
//     Shell.prototype.extend = function() {
//         if (arguments.length > 1) {
//             var master = arguments[0];
//             for (var i = 1, l = arguments.length; i < l; i++) {
//                 var object = arguments[i];
//                 for (var key in object) {
//                     master[key] = object[key];
//                 }
//             }
//         }
//     };
//
//     Shell.prototype.data = function(element, name) {
//         return this.deserialize(element.getAttribute('data-'+name));
//     };
//
//     Shell.prototype.deserialize = function(value) {
//         if (value === 'true') {
//             return true;
//         } else if (value === 'false') {
//             return false;
//         } else if (value === 'null') {
//             return null;
//         } else if (!isNaN(parseFloat(value)) && isFinite(value)) {
//             return parseFloat(value);
//         } else {
//             return value;
//         }
//     };
//
//     /// Builds the prefix of the command
//     Shell.prototype.buildPrefix = function() {
//
//         var PREFIX = '',
//             userName = this.root ? 'root' : this.user,
//             bashChar = this.root ? '#' : '$';
//
//         switch(this.style) { /// Which OS
//
//             case "osx":
//                 PREFIX = '<span class="host">' + this.host +'</span>:' +
//                          '<span class="path">' + this.path + '</span> ' +
//                          '<span class="user">' + userName + bashChar + '</span> ';
//                 break;
//
//             case "windows":
//                 this.path = typeof arguments[0].path !== "undefined" ? this.path : "C:\\Windows\\system32\\";
//                 PREFIX = '<span class="path">' + this.path + '&gt;</span> ';
//                 break;
//
//             case "ubuntu":
//                 /* falls through */
//             default:
//                 PREFIX = '<span class="user">' + userName + '@</span>' +
//                          '<span class="host">' + this.host +'</span>:' +
//                          '<span class="path">' + this.path + '</span>' + bashChar + ' ';
//                 break;
//
//         }
//
//         return PREFIX;
//
//     };
//
//
//     /// Builds the status bar of the shell window
//     Shell.prototype.buildStatusBar = function () {
//
//         var statusBar = '<div class="status-bar">',
//             userName = this.root ? 'root' : this.user,
//             buttons,
//             title;
//
//         switch (this.style) { /// Which OS
//
//             case "osx":
//                 buttons = '<div class="buttons">' +
//                             '<a href="javascript:;" class="close" title="Close"><i class="fa fa-times"></i></a>' +
//                             '<a href="javascript:;" class="minimize" title="Minimize"><i class="fa fa-minus"></i></a>' +
//                             '<a href="javascript:;" class="enlarge" title="Enlarge"><i class="fa fa-plus"></i></a>' +
//                           '</div>';
//                 title = '<div class="title">' +
//                             userName + ' &horbar; sh' +
//                         '</div>';
//                 statusBar += buttons + title;
//                 break;
//
//             case "windows":
//                 buttons = '<div class="buttons">' +
//                     '<a href="javascript:;" class="minimize" title="Minimize"><i class="fa fa-minus"></i></a>' +
//                     '<a href="javascript:;" class="enlarge" title="Enlarge"><i class="fa fa-square-o"></i></a>' +
//                     '<a href="javascript:;" class="close" title="Close"><i class="fa fa-times"></i></a>' +
//                     '</div>';
//                 title = '<div class="title">' +
//                     '<span class="icon"><i class="fa fa-terminal"></i></span> Command Prompt' +
//                     '</div>';
//                 statusBar += title + buttons;
//                 break;
//
//             case "ubuntu":
//                 /* falls through */
//             default:
//                 buttons = '<div class="buttons">' +
//                             '<a href="javascript:;" class="close" title="Close"><i class="fa fa-times"></i></a>' +
//                             '<a href="javascript:;" class="minimize" title="Minimize"><i class="fa fa-minus"></i></a>' +
//                             '<a href="javascript:;" class="enlarge" title="Enlarge"><i class="fa fa-plus"></i></a>' +
//                           '</div>';
//                 title = '<div class="title">' +
//                             userName + '@' + this.host + ': ' + this.path +
//                         '</div>';
//                 statusBar += buttons + title;
//                 break;
//
//         }
//
//         statusBar += '</div>';
//
//         return statusBar;
//     };
//
//     // Expose Shell
//     window[NAME] = Shell;
//
// })(window, document);