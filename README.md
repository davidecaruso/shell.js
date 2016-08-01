# Shell.js

Quickly create a terminal window.

![Screenshot](https://github.com/davidecaruso/shell.js/blob/master/images/screenshot.png)

## Install

You need [Bower][bower] installed: `npm install -g bower`

```bash
bower install shell.js
```


## Setup

First create an HTML element with a specified ID:

```html
<div id="awesome-shell"></div>
```

Then pass your DOM Element to the **Shell** constructor:

```javascript
/// Vanilla JS
var awesomeShell = document.getElementById('awesome-shell');
var shell = new Shell(awesomeShell);

/// jQuery
$('#awesome-shell').shell();
```

## Options

For each **Shell** instance you can set the following options:

| Options             | Values              | Description                                                                                                                           |
| ------------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------|
| `user`              | `string`                                    | The username. (default: `user`)                                                                               |
| `host`              | `string`                                    | The host. (default: `host`)                                                                                   |
| `path`              | `string`                                    | The local directory. (default: `~`)                                                                           |
| `style`             | `custom` \| `ubuntu` \| `osx` \| `windows`  | The operating system which defines style. (default: `custom`)                                                 |
| `theme`             | `dark`  \| `light`                          | The theme of the shell. (default: `dark`)                                                                     |
| `responsive`        | `false` \| `true`                           | `true` sets width and height to 100%, `false` leaves unchanged the inherited size. (default: `false`)         |
| `typed`             | `false` \| `true`                           | Only for the jQuery version. Adds the **[Typed.js][typedjs]** integration. (default: `false`)                 |
| `commands`          | `array`                                     | Array that contains the shell's commands                                                                      |

### Constructor Object Example

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

## jQuery

If you're using **[jQuery][jquery]** you can use **Shell.js** as a plugin:

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
npm install
grunt
```

## Author

[Davide Caruso][linkedin]

## License

Licensed under [MIT][mit].

[demo]: &nbsp;
[linkedin]: https://it.linkedin.com/in/davidecaruso93
[mit]: http://www.opensource.org/licenses/mit-license.php
[jquery]: http://jquery.com/
[grunt]: http://gruntjs.com/
[bower]: http://bower.io/
[typedjs]: https://github.com/mattboldt/typed.js/