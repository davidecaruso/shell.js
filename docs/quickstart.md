## Quick start

### Install

Install **Shell.js** in your local project:

```bash
npm install shell.js
# or
yarn add shell.js
```

You can also import it from CDN:

```html
<script src="//cdn.jsdelivr.net/npm/shell.js/lib/shell.min.js"></script>
```

### Initialize

Create an HTML element, give its CSS selector to `Shell.js` and make magic happen!

```html
<div id="shell"></div>

<script type="application/javascript">
  Shell("#shell").type(["Hello, world!"]);
</script>
```

Now its time of [customization](customization.md)!
