## Customization

### Engine

Choose your favorite operating system to style your **Shell.js** instance from the available options:

* `macos`
* `ubuntu`
* `windows`
* `default` _(default)_

```javascript
Shell("#shell", [ ... ], { "style": { "engine": "macos" } });
```

### Theme

Choose between the `light` and the `dark` side of the Force:

```javascript
Shell("#shell", [ ... ], { "style": { "theme": "dark" } });
```

### Attributes

**Shell.js** has some _boolean_ attributes:

* `responsive` _(default: false)_
* `shadow` _(default: false)_

```javascript
Shell("#shell", [ ... ], { "style": { "responsive": true, "shadow": true } });
```

Let's create some [commands](commands.md)!
