import defaults from './defaults.js';

/**
 * Shell.js
 * @param {string} elementSelector HTML element selector _OR_ HTML element
 * @param {object} options options object
 * @returns {object} a new Typed object
 */
class Shell {

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
    if (this.options.style === 'windows' && !this.options.path) {
      this.options.path = 'C:\\Windows\\system32\\';
    }

  }

  build() {

    if (this.el) {

      /// HTML element's classes
      let classes = ['shell', this.options.style, this.options.theme];
      if (this.options.responsive) classes.push('responsive');
      if (this.options.shadow) classes.push('shadow');

      this.el.className = this.el.className + ' ' + classes.join(' ');
      this.el.innerHTML = this.buildStatusBar() + this.buildContent();

    }

  }

  buildPrefix() {

    let prefix = '<span class="prefix">';
    let user = this.options.root ? 'root' : this.options.user;
    let char = this.options.root ? '#' : null;

    /// Which OS
    switch (this.options.style) {

      case 'osx':
        char = char || '$';
        prefix += `<span class="host">${this.options.host}</span>:<span class="path">${this.options.path}</span><span class="user">${user}${char}</span>`;
        break;

      case 'windows':
        char = char || '&gt;';
        prefix += `<span class="path">${this.options.path}${char}</span>`;
        break;

      case 'ubuntu':
      /* falls through */
      default:
        char = char || '$';
        prefix += `<span class="user">${user}@</span><span class="host">${this.options.host}</span>:<span class="path">${this.options.path}</span>${char}`;
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
        title = `<div class="title">${user} &horbar; sh</div>`;
        break;

      case 'windows':
        buttons = `<div class="buttons">
                    <button class="minimize" title="Minimize"><i class="fa fa-minus"></i></button>
                    <button class="enlarge" title="Enlarge"><i class="fa fa-square-o"></i></button>
                    <button class="close" title="Close"><i class="fa fa-times"></i></button>
                   </div>`;
        title = `<div class="title">
                  <span class="icon"><i class="fa fa-terminal"></i></span> Command Prompt
                 </div>`;
        break;

      case 'ubuntu':
      /* falls through */
      default:
        buttons = `<div class="buttons">
                    <a href="javascript:;" class="close" title="Close"><i class="fa fa-times"></i></a>
                    <a href="javascript:;" class="minimize" title="Minimize"><i class="fa fa-minus"></i></a>
                    <a href="javascript:;" class="enlarge" title="Enlarge"><i class="fa fa-plus"></i></a>
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

    /// If style is OSX add a new line with last login
    if (this.options.style === 'osx') {

      let hours = this._pad(date.getHours(), 2);
      let minutes = this._pad(date.getMinutes(), 2);
      let seconds = this._pad(date.getSeconds(), 2);

      content += this.buildLine({
        command: `Last login: ${days[date.getDay()]} ${months[date.getMonth()]} ${hours}:${minutes}:${seconds} on ttys000`,
        prefix:  false
      });

    }

    /// If have some commands...
    if (this.options.commands.length) {

      let index = 0;
      let counter = 0;

      this.options.commands.forEach(command => {

        let params = {
          command,
          counter,
          output: null
        };

        /// Build line
        content += this.buildLine(params);

        /// If command contains "sudo" become root user
        if (/sudo/.test(command)) {

          counter++;
          params.counter = counter;

          if (this.options.style !== 'windows') {
            params.command = 'bash: sudo: command not found';
          } else {
            this.options.root = true;
            params.command = null;
            params.output = `[sudo] password for ${this.options.user} :`;
          }

          content += this.buildLine(params);

        }

        /// If command contains "exit" logout from root
        if (/exit/.test(command)) {

          counter++;
          params.counter = counter;

          if (this.options.style !== 'windows') {
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

    }

    content += this.buildLine({empty: true});

    /// Close the content of the shell
    content += '</div>';

    return '';

  }

  buildLine(params) {

    let line;

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

      line = `<div class="${classes.join(' ')}">
                ${this.buildPrefix()}
                <span class="command"></span>
                ${(!this.options.typed ? '<span class="typed-cursor">&nbsp;</span>' : '')}
              </div>`;

    } else {

      line = `<div class="${classes.join(' ')}">
              ${(params.output ? `<span class="output">${params.output}</span>` : null)}
              ${(params.command ? `${(params.prefix ? this.buildPrefix() + ' ' : null)}<span class="command">${params.command}</span>` : null)}
            </div>`;

    }

    return line;

  }

  static _pad(string, length, char) {
    char = char || '0';
    string = string + '';
    return string.length >= length ? string : new Array(length - string.length + 1).join(char) + string;
  }

}

module.exports = Shell;