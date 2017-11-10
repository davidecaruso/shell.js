import Defaults from './defaults';
import Helpers from './helpers';
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
    if (typeof elementSelector === 'string' && document.querySelectorAll(elementSelector).length) {
        this.el = document.querySelectorAll(elementSelector);
    }

    this.options = {...Defaults, ...options};

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
      if (this.options.typed) classes.push('typed');

      if (this.el[0].className.length) {
        this.el[0].className = `${this.el[0].className} ${classes.join(' ')}`;
      } else {
        this.el[0].className = classes.join(' ');
      }
      this.el[0].innerHTML = this.buildStatusBar() + this.buildContent();

      /// Typed.js integration
      if (this.options.typed && typeof this.options.typed === 'function') {
        let commandsNum = this.el[0].querySelectorAll('.line').length;

        /// Execute commands
        if (commandsNum) this.executeCommand(0, commandsNum);

      } else {
        /// Typed.js was not found, remove class
        this.el[0].className = this.el[0].className.replace(' typed', '');
      }

    }

  }

  executeCommand(index, commandsNum) {

    let typed = this.options.typed;
    let line = this.el[0].querySelectorAll(`.line-${index}`);
    let command = line[0].querySelectorAll('.command');
    let commandText = command[0].innerHTML;
    let speed = '^800';

    /// Show the line
    line[0].className = `active ${line[0].className}`;

    if (command[0].className.indexOf('output') === -1 && index < commandsNum - 1) {

      /// Empty the command
      command[0].innerHTML = '';

      new typed(command[0], {
        strings:       [speed + commandText],
        typeSpeed:     50,
        loop:          false,
        contentType:   'html',
        cursorChar:    '&nbsp;',
        showCursor:    true,
        onStringTyped: () => {
          /// Removes cursor from each line except for the last one
          line[0].removeChild(line[0].querySelectorAll('.typed-cursor')[0]);
          this.executeCommand((index + 1), commandsNum);
        }
      });

    } else if (index <= commandsNum - 2) {
      /// After the bash output go type next line
      this.executeCommand((index + 1), commandsNum);
    }

  };

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
                    class="user">&nbsp;${user}</span><span 
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

    prefix += '<span class="spacer">&nbsp;</span>';
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
                     <button class="icon-close icon-dot"></button>
                     <button class="icon-minimize"></button>
                     <button class="icon-enlarge"></button>
                   </div>`;
        title = `<div class="title">${user} &horbar; sh &horbar; 80x24</div>`;
        break;

      case 'windows':
        buttons = `<div class="buttons">
                    <button class="icon-minimize"></button>
                    <button class="icon-enlarge"></button>
                    <button class="icon-close"></button>
                   </div>`;
        title = `<div class="icon"><i class="icon-command"></i></div><div class="title">Command Prompt</div>`;
        break;

      case 'ubuntu':
      /* falls through */
      default:
        buttons = `<div class="buttons">
                    <button class="icon-close"></button>
                    <button class="icon-minimize"></button>
                    <button class="icon-enlarge"></button>
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
    switch (this.options.style) {

      case 'osx':
        let hours = Helpers.str_pad(date.getHours(), 2, 'STR_PAD_LEFT');
        let minutes = Helpers.str_pad(date.getMinutes(), 2, 'STR_PAD_LEFT');
        let seconds = Helpers.str_pad(date.getSeconds(), 2, 'STR_PAD_LEFT');

        content += this.buildLine({
          command: `Last login: ${days[date.getDay()]} ${months[date.getMonth()]} ${hours}:${minutes}:${seconds} on ttys000`,
          output:  true,
          prefix:  false
        });

        counter++;
        break;

    }

    /// If have some commands...
    if (this.options.commands.length) {

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

          switch (this.options.style) {
            case 'windows':
              params.command = 'bash: sudo: command not found';
              params.output = true;
              this.options.root = false;
              break;

            case 'osx':
              params.command = `Password:<span class="icon-key"></span>`;
              params.output = true;
              this.options.root = true;
              break;

            case 'ubuntu':
            /* falls through */
            default:
              params.command = `[sudo] password for ${this.options.user}:`;
              params.output = true;
              this.options.root = true;
              break;
          }

          content += this.buildLine(params);

        }

        /// If command contains "exit" logout from root
        if (/exit/.test(command)) {

          counter++;
          params.counter = counter;

          if (this.options.style === 'windows') {
            params.command = 'bash: exit: command not found';
            params.output = true;
          } else {
            this.options.root = false;
            params.command = 'logout';
            params.output = true;
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
    classes.push(`line-${params.counter}`);

    if (params.empty) {

      /// Add "active" class
      if (!this.options.typed) {
        classes.push('active');
      }

      line = `<div class="${classes.join(' ')}">${this.buildPrefix()}<span class="command"><span class="typed-cursor">&nbsp;</span></span></div>`;

    } else {

      line = `<div class="${classes.join(' ')}">${(params.command ? `${(params.prefix ? this.buildPrefix() : '')}<span class="command${(params.output ? ' output' : '')}">${params.command}</span>` : '')}</div>`;

    }

    return line;

  }

};