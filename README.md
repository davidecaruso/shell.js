# Shell.js

Quickly create a terminal window.

<!--Check out this **[demo][demo]** to see it in action!-->

## Setup

First create an HTML element with a specified ID:

```html
<div id="awesome-shell"></div>
```

Then pass your DOM Element to the **Shell** constructor:

```javascript
var awesomeShell = document.getElementById('awesome-shell');
var shell = new Shell(awesomeShell);
```

## Options

For any **Shell** instance you can set the following options:

| Options             | Values              | Description                                                                                                                           |
| ------------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------|
| `user`              | `string`                                    | The name of the user. (default: `user`)                                                                   |
| `host`              | `string`                                    | The host name. (default: `host`)                                                                          |
| `path`              | `string`                                    | The local directory. (default: `~`)                                                                       |
| `style`             | `custom` \| `ubuntu` \| `osx` \| `windows`  | The operating system. (default: `custom`)                                                                 |
| `theme`             | `dark`  \| `light`                          | The theme of the shell. (default: `dark`)                                                                 |
| `responsive`        | `false` \| `true`                           | `true` sets width and height to 100%, `false` leaves unchanged the inherited size. (default: `false`)     |
| `commands`          | `array`                                     | Array that contains the shell's commands                                                                  |

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
$('#awesome-shell').shell();
```

### jQuery: Passing Options

```javascript
$('#awesome-shell').shell({
  user: "foobar",
  host: "MacMini",
  path: "/etc/",
  style: "osx",
  theme: "dark",
  responsive: false,
  commands: ["First command", "Second command", "..."]
});
```

## Build

> As a prerequisite, you will need [grunt][grunt] installed: `npm install -g grunt`

```
npm install
grunt
```

## Install

> For installing, you will need [bower][bower] installed: `npm install -g bower`

```
bower install shell.js
```

## Author

Davide Caruso: [linkedin][linkedin]

## License

Licensed under [MIT][mit].

[demo]: &nbsp;
[linkedin]: https://it.linkedin.com/in/davidecaruso93
[mit]: http://www.opensource.org/licenses/mit-license.php
[jquery]: http://jquery.com/
[grunt]: http://gruntjs.com/
[bower]: http://bower.io/