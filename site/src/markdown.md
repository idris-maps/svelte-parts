---
title: "@svelte-parts/markdown"
description: Markdown blocks
layout: layout.njk
---

# @svelte-parts/markdown

## Install

```
npm install @svelte-parts/markdown
```

## Usage

```jsx
<Markdown>
### List

1. one
2. two
3. three
</Markdown>
```

## Result

```comp
name: markdown
fallback: markdown demo
```

Uses [marked](https://github.com/markedjs/marked) to convert to HTML and is sanitized with [dompurify](https://github.com/cure53/DOMPurify). Both can be configured with the optional attributes:

* `dompurifyConfig` (type: `DOMPurify.Config`)
* `markedExtensions` (type: `MarkedExtension[]`)
* `markedOptions` (type: `MarkedOptions`)
