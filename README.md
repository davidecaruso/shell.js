![Shell.js](assets/images/logo.margins.png)
<p align="center">

[![npm](https://img.shields.io/npm/v/shell.js.svg)](https://www.npmjs.com/package/shell.js)
[![npm](https://img.shields.io/npm/dm/shell.js.svg)](https://www.npmjs.com/package/shell.js)
[![snyk](https://snyk.io/test/github/davidecaruso/shell.js/badge.svg)](https://snyk.io/test/github/davidecaruso/shell.js)
[![travis](https://travis-ci.org/davidecaruso/shell.js.svg?branch=master)](https://travis-ci.org/davidecaruso/shell.js)
[![coveralls](https://coveralls.io/repos/github/davidecaruso/shell.js/badge.svg?branch=master)](https://coveralls.io/github/davidecaruso/shell.js?branch=master)
![license](https://img.shields.io/github/license/davidecaruso/shell.js.svg)

</p>

> A **JavaScript** library to create HTML **terminals** in web pages.

## Install
```bash
$ yarn add shell.js # recommended
$ npm i shell.js
$ bower install shell.js --save
```

## Config
For each **Shell** instance you can set the following options:

| Config | Allowed values | Description | Defaut value |
| ------- | -------------- | ----------- | ------------ |
| user | *string* | The user | **"user"** |
| host | *string* | The host | **"host"** |
| path | *string* | The working directory | **"~"** &#124; **"C:\Windows\system32\"** |
| engine | **"default"**&#124;**"ubuntu"**&#124;**"macos"**&#124;**"windows"** | The Engine engine | **"default"** |
| theme | **"dark"**&#124;**"light"** | The theme | **"dark"** |
| responsive | *boolean* | Responsiveness  | *true* |
| typed | *Typed* callable | **[Typed.js](https://github.com/mattboldt/typed.js/)** integration to make shell alive | *null* |
| commands | array | The commands list | *[]* |


## Usage
Create a HTML element with a specified ID... 
```html
<div id="awesome-shell"></div>
```
...and pass the CSS selector to the **Shell.js** constructor:

```javascript
document.addEventListener('DOMContentLoaded', function () {
  let shell = new shell('#awesome-shell', {
    user: 'foobar',
    host: 'MacMini',
    path: '/etc/',
    engine: 'macos',
    theme: 'dark',
    responsive: false,
    commands: ['First command', 'Second command', '...']
  });
});
```

> Visit the documentation [page](https://shelljs.io)

## Author
[Davide Caruso](https://about.me/davidecaruso)

## License
Licensed under [MIT](LICENSE).
