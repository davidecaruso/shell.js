## Customization

### User

Set the user of the terminal session. _(default: "user")_

```javascript
Shell("#shell", [ ... ], { "user": "johndoe" });
```

### Host

Set the host of the terminal session. _(default: "host")_

```javascript
Shell("#shell", [ ... ], { "host": "example.org" });
```

### Path

Set the path location of the terminal session. _(default: "~" or "C:\Windows\system32\")_

```javascript
Shell("#shell", [ ... ], { "path": "/tmp" });
```

### Engine

Choose your favorite operating system to style your **Shell.js** instance from the available options:

* `macos`
* `ubuntu`
* `windows`
* `default` _(default)_

```javascript
Shell("#shell", [ ... ], { "engine": "macos" });
```

### Theme

Choose between the `light` and the `dark` side of the Force.  _(default: "dark")_

```javascript
Shell("#shell", [ ... ], { "theme": "light" });
```

### Responsiveness

Decide if the terminal should be responsive or not. _(default: false)_

```javascript
Shell("#shell", [ ... ], { "responsive": true });
```

### Shadiness
Decide if the terminal should have shadow or not. _(default: false)_

```javascript
Shell("#shell", [ ... ], { "shadow": true });
```

### Root

Decide if the logged user of the terminal session is `root` or not. _(default: false)_

```javascript
Shell("#shell", [ ... ], { "root": true });
```

Let's create some [commands](commands.md)!
