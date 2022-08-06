![Shell.js](assets/images/logo.margins.png)
<p align="center">

[![npm](https://img.shields.io/npm/v/shell.js.svg)](https://www.npmjs.com/package/shell.js)
[![npm](https://img.shields.io/npm/dm/shell.js.svg)](https://www.npmjs.com/package/shell.js)
[![snyk](https://snyk.io/test/github/davidecaruso/shell.js/badge.svg)](https://snyk.io/test/github/davidecaruso/shell.js)
[![travis](https://travis-ci.org/davidecaruso/shell.js.svg?branch=master)](https://travis-ci.org/davidecaruso/shell.js)
[![coveralls](https://coveralls.io/repos/github/davidecaruso/shell.js/badge.svg?branch=main)](https://coveralls.io/github/davidecaruso/shell.js?branch=main)
![license](https://img.shields.io/github/license/davidecaruso/shell.js.svg)

</p>

> A **JavaScript** library to create HTML **terminals** in web pages.

## Install
```bash
$ yarn add shell.js
$ npm i shell.js
```

## Config
For each **Shell** instance you can set the following options:

| Config           | Value type                                                          | Description                                                                       | Defaut                                    |
|------------------|---------------------------------------------------------------------|-----------------------------------------------------------------------------------|-------------------------------------------|
| user             | *string*                                                            | The user                                                                          | **"user"**                                |
| host             | *string*                                                            | The host                                                                          | **"host"**                                |
| path             | *string*                                                            | The working directory                                                             | **"~"** &#124; **"C:\Windows\system32\"** |
| root             | *boolean*                                                           | If the current user is `root` or not                                              | *false*                                   |
| style.engine     | **"default"**&#124;**"ubuntu"**&#124;**"macos"**&#124;**"windows"** | The engine                                                                        | **"default"**                             |
| style.theme      | **"dark"**&#124;**"light"**                                         | The theme                                                                         | **"dark"**                                |
| style.responsive | *boolean*                                                           | Responsiveness                                                                    | *true*                                    |
| style.shadow     | *boolean*                                                           | Shadowness                                                                        | *true*                                    |
| typing.ctor      | *Typed.js* instance                                                 | **[Typed.js](https://github.com/mattboldt/typed.js/)**                        | *null*                                    |
| typing.otps      | *Typed.js* options                                                  | **[Typed.js options](https://github.com/mattboldt/typed.js/#customization)**| *undefined*                               |


## Usage
```html
<div id="awesome-shell"></div>
```
```javascript
document.addEventListener('DOMContentLoaded', function () {
  const awesomeShell = shell('#awesome-shell', ['echo "Hello, world!"', 'ls -al']);
  awesomeShell.type()
});
```


## Documentation
Visit [shelljs.io](https://shelljs.io).

## Author
[Davide Caruso](https://about.me/davidecaruso)

## License
Licensed under [MIT](LICENSE).
