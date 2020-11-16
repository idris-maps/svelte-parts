# `@svelte-parts/editor`

A markdown editor for svelte. Uses [codemirror](https://codemirror.net) and exposes a svelte wrapper so you can create your own editor.

[Demo](https://svelte-parts.surge.sh/editor)

## Install

```
npm install @svelte-parts/editor
```

## Markdown editor usage

```html
<script>
 import Editor from '@svelte-parts/editor'
</script>

<Editor />
```

### Properties

* `onChange: (value: string) => void`
* `initialValue: string`
* `theme: string` (see below)

All properties are optional

### CSS

You must use the codemirror css. The editor is unusable without it. How to include it is up to you.

1. You can import it directly in the file, if your setup allows it. If you use rollup, you need a plugin such as [`rollup-plugin-css-only`](https://github.com/thgh/rollup-plugin-css-only)

```html
<script>
  import Editor from '@svelte-parts/editor'
  import 'codemirror/lib/codemirror.css'
</script>

<Editor />
```

2. Or copy the file from `node_modules/codemirror/lib/codemirror.css` and include it directly in `index.html`

```html
<link rel='stylesheet' href='/codemirror.css'>
```

### Themes

The editor works with the default css file. It is however possible to add themes. Two are provided with this package:

* `@svelte-parts/editor/md-dark.css`
* `@svelte-parts/editor/md-light.css`

The theme must be declared to the component with the `theme` property. Example:

```html
<script>
  import Editor from '@svelte-parts/editor'
  import 'codemirror/lib/codemirror.css'
  import '@svelte-parts/editor/md-dark.css'
</script>

<Editor theme="md-dark" />
```

Find more codemirror themes [here](https://codemirror.net/demo/theme.html).

## Code mirror wrapper usage

```html
<script>
  import CodeMirror from '@svelte-parts/editor/codemirror'
  import 'codemirror/lib/codemirror.css'

  const config = {
    lineNumbers: true,
    lineWrapping: true,
  }
</script>

<CodeMirror config={config} />
```

### Properties

* `config: EditorConfiguration`
* `accessEditor: (editor: EditorFromTextArea) => void | undefined`

See how the [markdown editor](https://github.com/idris-maps/svelte-parts/blob/master/packages/editor/Editor.svelte) is made for an example usage.
