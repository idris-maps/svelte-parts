# @svelte-parts/form-builder

UI to create form descriptions for [@svelte-parts/form](https://github.com/idris-maps/svelte-parts/tree/master/packages/form#svelte-partsform).

## Install

```
npm install svelte-parts
```

## Usage

```html
<script lang="ts">
  import Form from 'svelte-parts/form/Form.svelte'
  import FormBuilder from 'svelte-parts/form/builder/FormBuilder.svelte'
  import type { Field } from 'svelte-parts/form/types'

  let fields: Field[] = []
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

## Result
