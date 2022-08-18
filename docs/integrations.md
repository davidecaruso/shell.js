## Integrations

### Typed.js

To give life to your **Shell.js** instance, integrate it with [Typed.js](https://github.com/mattboldt/typed.js/):

```html
<div id="shell"></div>

<script src="//cdn.jsdelivr.net/npm/typed.js/lib/typed.min.js"></script>
<script type="application/javascript">
  Shell("#shell", ["Hello, world!"], {
    typing: {
      ctor: Typed, // Typed.js constructor
      opts: { ... } // Typed.js options
    }
  }).type();
</script>
```
