## Commands

To print commands with **Shell.js** just invoke the `.type([ ... ])` method. Moreover, to empty the content of **Shell.js**, invoke the `.clear()` method.

### Simple commands

Pass an array of strings.

```javascript
Shell("#shell").type(["Hello, world!"]);
```

### Special commands

There are some commands that introduce special behaviours:

* `sudo` _(exec commands as super user)_
* `exit` _(exit from super user session)_
* (more soon)

```javascript
Shell("#shell").type(["sudo rm -rf /", "exit"]);
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

Shell("#shell").type([ls, cd("/tmp")]);
```

Make **Shell.js** [alive](integrations.md)!
