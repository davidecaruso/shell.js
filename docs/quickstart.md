## Quick start

### Install

Install **Shell.js** in your local project:

```bash
npm install shell.js
# or
yarn add shell.js
```

You can also import it as external script:

```html
<script src="//cdn.jsdelivr.net/npm/shell.js/lib/shell.min.js"></script>
```

### Initialize

Create an HTML element, give its CSS selector to `Shell.js` and make magic happens!

```html
<div id="shell"></div>

<script type="application/javascript">
  var shell = Shell("#shell", ["echo Hello, world!", "Hello, world!"]);
  shell.type();
</script>
```

Now its time of [customization](customization.md)!
