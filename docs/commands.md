## Commands

> Remember that to print commands you must invoke the `.type()` method of your instance.

### Simple commands

Pass an array of strings.

```javascript
Shell("#shell", ["Hello, world!"]).type();
```

### Special commands

There are some commands that introduce special behaviours:

* `sudo` _(exec commands as super user)_
* `exit` _(exit from suer user session)_
* (more soon)

```javascript
Shell("#shell", ["sudo rm -rf /", "exit"]).type();
```

### Custom commands

Create custom commands to manipulate your instance:

```javascript
var ls = {
  "input": "ls",
  "output": function() {
    return { value: "Applications  Desktop  Downloads  Movies  Pictures<br />Documents  Library  Music  Public" }
  }
}

var cd = function(path) {
  return {
    "input": "cd " + path,
    "output": function(config) {
      config.path = path
      return { value: "" }
    }
  }
}

Shell("#shell", [ls, cd("/tmp")]).type();
```

Make **Shell.js** [alive](integrations.md)!
