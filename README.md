# Shell.js

Quickly create a terminal window.

[![GitHub version](https://badge.fury.io/gh/davidecaruso%2Fshell.js.svg)](https://badge.fury.io/gh/davidecaruso%2Fshell.js)
[![Bower version](https://badge.fury.io/bo/shell.js.svg)](#install)
[![npm version](https://badge.fury.io/js/shell.js.svg)](https://www.npmjs.com/package/shell.js)

![Screenshot](https://github.com/davidecaruso/shell.js/raw/master/images/screenshot.png)

## Install

You need [Bower][bower] installed: `$ npm install -g bower`

```bash
$ bower install shell.js --save
```

Or using npm:

```bash
$ npm install shell.js --save
```

## Options

For each **Shell** instance you can set the following options:

| Options       | Values                                        | Description                                                                                           |
| ------------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| user          | string                                        | The username. (default: `'user'`)                                                                     |
| host          | string                                        | The host. (default: `'host'`)                                                                         |
| path          | string                                        | The local directory. (default: `'~'`)                                                                 |
| style         | `'custom'`, `'ubuntu'`, `'osx'`, `'windows'`  | The operating system which defines style. (default: `'custom'`)                                       |
| theme         | `'dark'`, `'light'`                           | The theme of the shell. (default: `'dark'`)                                                           |
| responsive    | `false`, `true`                               | `true` sets width and height to 100%, `false` leaves unchanged the inherited size. (default: `false`) |
| typed         | `false`, `true`                               | Only for the jQuery version. Adds the **[Typed.js][typedjs]** integration. (default: `false`)         |
| commands      | array                                         | Array that contains the shell's commands.                                                             |


## Setup

Create an HTML element with a specified ID. 
```html
<div id="awesome-shell"></div>
```

Then pass your DOM Element to the **Shell** constructor:

```javascript
var awesomeShell = document.getElementById('awesome-shell');
var shell = new Shell(awesomeShell, {
  user: "foobar",
  host: "MacMini",
  path: "/etc/",
  style: "osx",
  theme: "dark",
  responsive: false,
  commands: ["First command", "Second command", "..."]
});
```

Or if you're using **[jQuery][jquery]**:

```javascript
$('#awesome-shell').shell({
  user: "foobar",
  host: "MacMini",
  path: "/etc/",
  style: "osx",
  theme: "dark",
  typed: true,
  responsive: false,
  commands: ["First command", "Second command", "..."]
});
```

## Build

You need [Grunt][grunt] installed: `npm install -g grunt`

```bash
$ npm install
$ grunt
```

## Author

[Davide Caruso][linkedin]

## License

Licensed under [MIT][mit].

[linkedin]: https://it.linkedin.com/in/davidecaruso93
[mit]: http://www.opensource.org/licenses/mit-license.php
[jquery]: http://jquery.com/
[grunt]: http://gruntjs.com/
[bower]: http://bower.io/
[typedjs]: https://github.com/mattboldt/typed.js/