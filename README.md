# Shell.js

Quickly create a terminal window.

[![GitHub version](https://badge.fury.io/gh/davidecaruso%2Fshell.js.svg)](https://badge.fury.io/gh/davidecaruso%2Fshell.js)
[![Bower version](https://badge.fury.io/bo/shell.js.svg)](#install)
[![npm version](https://badge.fury.io/js/shell.js.svg)](https://www.npmjs.com/package/shell.js)

![Screenshot](https://github.com/davidecaruso/shell.js/raw/master/assets/images/screenshot.png)

## Install

```bash
$ yarn add shell.js
$ # OR
$ npm i shell.js
$ # OR
$ bower install shell.js --save
```

## Options

For each **Shell** instance you can set the following options:

| Options       | Values                                                    | Description                                                            |
| ------------- | --------------------------------------------------------- | ---------------------------------------------------------------------- |
| user          | string                                                    | The logged user (default: `'user'`)                                    |
| host          | string                                                    | The local host (default: `'host'`)                                     |
| path          | string                                                    | The current path displayed in the terminal (default: `'~'`)            |
| style         | `'custom'`&#124;`'ubuntu'`&#124;`'osx'`&#124;`'windows'`  | The operating system (default: `'custom'`)                             |
| theme         | `'dark'`&#124;`'light'`                                   | The theme (default: `'dark'`)                                          |
| responsive    | `false`&#124;`true`                                       | If `true` the terminal will be fluid (default: `false`)                |
| typed         | `false`&#124;`true`                                       | Adds the **[Typed.js][typedjs]** integration (default: `false`)     |
| commands      | array                                                     | The commands list (default: `[]`)                                      |


## Usage

Create an HTML element with a specified ID. 
```html
<div id="awesome-shell"></div>
```

Then pass your DOM Element to the **Shell** constructor:

```javascript
document.addEventListener('DOMContentLoaded', function() {
    let shell = new Shell('#awesome-shell', {
        user: 'foobar',
        host: 'MacMini',
        path: '/etc/',
        style: 'osx',
        theme: 'dark',
        responsive: false,
        commands: ['First command', 'Second command', '...']
    });
});
```

## Author

[Davide Caruso][linkedin]

## License

Licensed under [MIT][mit].

[linkedin]: https://it.linkedin.com/in/davidecaruso93
[mit]: https://opensource.org/licenses/mit-license.php
[jquery]: http://jquery.com/
[grunt]: http://gruntjs.com/
[typedjs]: https://github.com/mattboldt/typed.js/