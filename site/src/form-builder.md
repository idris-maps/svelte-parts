---
title: "@svelte-parts/form-builder"
description: UI to create form descriptions
layout: layout.njk
---

# @svelte-parts/form-builder

UI to create form descriptions for [@svelte-parts/form](https://github.com/idris-maps/svelte-parts/tree/master/packages/form#svelte-partsform).

## Install

```
npm install @svelte-parts/form-builder
```

## Demo

```comp
name: form-builder
```

## Usage

```jsx
<script>
  import Form from '@svelte-parts/form'
  import FormBuilder from '@svelte-parts/form-builder'

  let fields = []
</script>

<h4>Create form</h4>
<FormBuilder onChange={d => fields = d} />
{#if fields.length > 0}
  <h4>Preview</h4>
  <Form
    fields={fields}
    onSubmit={d => alert(JSON.stringify(d)) }
  />
{/if}
```

### Properties

* `onChange` a function taking an array of [`Fields`](https://github.com/idris-maps/svelte-parts/blob/master/packages/form/index.d.ts) triggered on every change
* `onSubmit` a function taking an array of [`Fields`](https://github.com/idris-maps/svelte-parts/blob/master/packages/form/index.d.ts) triggered when the user clicks on "Create form" (the button is only shown if this function is defined)
* `ignoreFields` fields that should not be proposed to the user. Depending on the context, you may not want to encourage creating a password field, for example.

