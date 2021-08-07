# `@svelte-parts/markdown`

For markdown blocks

[Demo](https://svelte-parts.surge.sh/markdown)

## Install

```
npm install @svelte-parts/markdown
```

## Usage

```jsx
<Markdown>
# Title

## List

1. one
2. two
3. three
</Markdown>
```

Uses [marked](https://github.com/markedjs/marked) to convert to HTML and is sanitized with [dompurify](https://github.com/cure53/DOMPurify). Both can be configured with the optional attributes:

* `dompurifyConfig` (type: `DOMPurify.Config`)
* `markedExtensions` (type: `MarkedExtension[]`)
* `markedOptions` (type: `MarkedOptions`)
