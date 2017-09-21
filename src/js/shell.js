import defaults from './defaults.js';
import '../sass/shell.scss'

/**
 * Shell.js
 * @param {string} elementSelector HTML element selector _OR_ HTML element
 * @param {object} options options object
 * @returns {object} a new Typed object
 */
module.exports = class Shell {

  constructor(elementSelector, options) {
    this.initialize(elementSelector, options);
    this.build();
  }

  /**
   * Load up defaults & options on the Shell instance
   * @param {string} elementSelector HTML element ID || instance of HTML element
   * @param {object} options options object
   * @static
   * @private
   */
  initialize(elementSelector, options) {

    this.el = null;
    if (typeof elementSelector === 'string') {
      let el = document.querySelectorAll(elementSelector);
      if (el.length) {
        this.el = el;
      }
    }

    this.options = {...defaults, ...options};

    /// Hardcode for Windows
    if (this.options.style === 'windows' && this.options.path === '~') {
      this.options.path = 'C:\\Windows\\system32\\';
    }

  }

  build() {

    if (this.el) {
      /// HTML element's classes
      let classes = ['shell', this.options.style, this.options.theme];
      if (this.options.responsive) classes.push('responsive');
      if (this.options.shadow) classes.push('shadow');
      if (this.options.typed) classes.push('typed');

      if (this.el[0].className.length) {
        this.el[0].className = `${this.el[0].className} ${classes.join(' ')}`;
      } else {
        this.el[0].className = classes.join(' ');
      }
      this.el[0].innerHTML = this.buildStatusBar() + this.buildContent();

      /// Typed.js integration
      if (this.options.typed && typeof Typed !== 'undefined') {

        let commandsNum = this.el[0].querySelectorAll('.line').length;
        let lastLine = this.el[0].querySelectorAll(`.line-${commandsNum - 1}`);
        let initCommands = (i) => {

          let line = this.el[0].querySelectorAll(`.line-${i}`);
          let command = line[0].querySelectorAll('.command');
          let commandText = command[0].innerHTML;
          let speed = line[0].className.indexOf('root') >= 0 ? 2500 : 800; /// Time for password

          /// Show the line
          line[0].className = `active ${line[0].className}`;

          if (command[0].className.indexOf('output') === -1 && i < commandsNum - 1) {

            /// Empty the command
            command[0].innerHTML = '';

            new Typed(command[0], {
              strings:       [`^${speed} ${commandText}`],
              typeSpeed:     50,
              loop:          false,
              contentType:   'html',
              cursorChar:    '&nbsp;',
              showCursor:    true,
              onStringTyped: function (arrayPos, self) {
                // Removes cursor from each line except for the last one
                line[0].removeChild(line[0].querySelectorAll('.typed-cursor')[0]);
                initCommands(i + 1);
              }
            });

          } else {
            if (i <= commandsNum - 2) {
              /// After the bash output go type next line
              initCommands(i + 1);
            }
          }

        };

        /// Type first line
        initCommands(0);

      } else {
        /// Typed.js was not found, remove class
        this.el[0].className = this.el[0].className.replace(' typed', '');
      }

    }

  }

  buildPrefix() {

    let prefix = '<span class="prefix">';
    let user = this.options.root ? 'root' : this.options.user;
    let char = this.options.root ? '#' : '';

    /// Which OS
    switch (this.options.style) {

      case 'osx':
        char = char || '$';
        prefix += `<span class="host">${this.options.host}</span><span 
                    class="colon">:</span><span 
                    class="path">${this.options.path}</span><span 
                    class="user">${user}</span><span 
                    class="char">${char}</span>`;
        break;

      case 'windows':
        char = char || '&gt;';
        prefix += `<span class="path">${this.options.path}</span><span 
                    class="char">${char}</span>`;
        break;

      case 'ubuntu':
      /* falls through */
      default:
        char = char || '$';
        prefix += `<span class="user">${user}@</span><span 
                    class="host">${this.options.host}</span><span 
                    class="colon">:</span><span 
                    class="path">${this.options.path}</span><span 
                    class="char">${char}</span>`;
        break;

    }

    prefix += '</span>';

    return prefix;

  }

  buildStatusBar() {

    let statusBar = '<div class="status-bar">';
    let user = this.options.root ? 'root' : this.options.user;
    let buttons;
    let title;

    /// Which OS
    switch (this.options.style) {

      case 'osx':
        buttons = `<div class="buttons">
                     <button class="close" title="Close"><i class="fa fa-times"></i></button>
                     <button class="minimize" title="Minimize"><i class="fa fa-minus"></i></button>
                     <button class="enlarge" title="Enlarge"><i class="fa fa-plus"></i></button>
                   </div>`;
        title = `<div class="title">${user} &horbar; sh &horbar; 80x24</div>`;
        break;

      case 'windows':
        buttons = `<div class="buttons">
                    <button class="minimize" title="Minimize"><i class="fa fa-minus"></i></button>
                    <button class="enlarge" title="Enlarge"><i class="fa fa-square-o"></i></button>
                    <button class="close" title="Close"><i class="fa fa-times"></i></button>
                   </div>`;
        title = `<div class="icon"><i class="fa fa-terminal"></i></div><div class="title">Command Prompt</div>`;
        break;

      case 'ubuntu':
      /* falls through */
      default:
        buttons = `<div class="buttons">
                    <button href="javascript:;" class="close" title="Close"><i class="fa fa-times"></i></button>
                    <button href="javascript:;" class="minimize" title="Minimize"><i class="fa fa-minus"></i></button>
                    <button href="javascript:;" class="enlarge" title="Enlarge"><i class="fa fa-plus"></i></button>
                   </div>`;
        title = `<div class="title">${user}@${this.options.host}: ${this.options.path}</div>`;
        break;

    }

    statusBar += buttons + title;
    statusBar += '</div>';

    return statusBar;

  }

  buildContent() {

    /// Content's HTML wrapper
    let content = '<div class="content">';
    let date = new Date();
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let index = 0;
    let counter = 0;

    /// If style is OSX add a new line with last login
    if (this.options.style === 'osx') {

      let hours = Shell._pad(date.getHours(), 2);
      let minutes = Shell._pad(date.getMinutes(), 2);
      let seconds = Shell._pad(date.getSeconds(), 2);

      content += this.buildLine({
        command: `Last login: ${days[date.getDay()]} ${months[date.getMonth()]} ${hours}:${minutes}:${seconds} on ttys000`,
        output:  true,
        prefix:  false
      });

      counter++;

    }

    /// If have some commands...
    if (this.options.commands.length) {

      this.options.commands.forEach(command => {

        let params = {
          command,
          counter,
          output: null
        };
        let becomeRoot = false;

        /// Build line
        content += this.buildLine(params);

        /// If command contains "sudo" become root user
        if (/sudo/.test(command)) {

          counter++;
          params.counter = counter;

          if (this.options.style === 'windows') {
            params.command = 'bash: sudo: command not found';
            params.output = true;
          } else {
            params.command = `[sudo] password for ${this.options.user}:`;
            params.output = true;
            becomeRoot = true;
          }

          content += this.buildLine(params);
          if (becomeRoot) {
            this.options.root = true;
          }

        }

        /// If command contains "exit" logout from root
        if (/exit/.test(command)) {

          counter++;
          params.counter = counter;

          if (this.options.style === 'windows') {
            params.command = 'bash: sudo: command not found';
          } else {
            this.options.root = false;
            params.command = null;
            params.output = 'logout';
          }

          content += this.buildLine(params);

        }

        counter++;
        index++;

      });

      content += this.buildLine({counter, empty: true});

    }

    /// Close the content of the shell
    content += '</div>';

    return content;

  }

  buildLine(params) {

    let line = '';

    /// Default parameters
    params = {
      ...{
        counter: 0,
        empty:   false,
        command: null,
        prefix:  true,
        output:  false
      },
      ...params
    };

    let classes = ['line'];
    /// Add "root" class
    if (this.options.root) {
      classes.push('root');
    }
    /// Add "line-[number]" class
    if (!isNaN(params.counter)) {
      classes.push(`line-${params.counter}`);
    }

    if (params.empty) {

      /// Add "active" class
      if (!this.options.typed) {
        classes.push('active');
      }

      line = `<div class="${classes.join(' ')}">${this.buildPrefix()}<span class="command"><span class="typed-cursor">&nbsp;</span></span></div>`;

    } else {

      line = `<div class="${classes.join(' ')}">${(params.command ? `${(params.prefix ? this.buildPrefix() + ' ' : '')}<span class="command${(params.output ? ' output' : '')}">${params.command}</span>` : '')}</div>`;

    }

    return line;

  }

  static _pad(string, length, char) {
    char = char || '0';
    string = string + '';
    return string.length >= length ? string : new Array(length - string.length + 1).join(char) + string;
  }

};