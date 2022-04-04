# `@svelte-parts/form`

Yet another form component.

The idea here is to define the fields in json. The form definition can then come from the server or be modified on the fly.

Try it out in the [svelte REPL](https://svelte.dev/repl/0cb7990827dd48dcabe40084a02c75f0?version=3.46.6)

## Install

```
npm install @svelte-parts/form
```

## Usage

```html
<script>
  import Form from '@svelte-parts/form'

  const fields = [
    { type: 'text', property: 'username', label: 'User name', pattern: '[a-z0-9-]+', minLength: 5 },
    { type: 'date', property: 'birthDate', label: 'Birth date' },
    { type: 'email', property: 'email', label: 'Email' },
    { type: 'checkbox', property: 'wantsSpam', label: 'Subscribe to the newsletter', value: true },
  ]
  const onSubmit = data => alert(JSON.stringify(data))
</script>

<Form fields={fields} onSubmit={onSubmit}>
```

### Properties

* `fields` the form definition. It is the only required field (see [type definition](https://github.com/idris-maps/svelte-parts/blob/master/packages/form/index.d.ts))
* `onSubmit` a callback triggered when the form is submitted
* `submitButton` is a string to use as a label for the submit button if you don not want to use the browser default
* `errorMessage` is a string that will be shown between the last form field and the submit button

### Types

```html
<script lang="ts">
  import type { Field } from '@svelte-parts/form'
  import Form from '@svelte-parts/form'

  const fields: Field[] = [
    { type: 'text', property: 'username', label: 'User name', pattern: '[a-z0-9-]+', minLength: 5 },
    { type: 'date', property: 'birthDate', label: 'Birth date' },
    { type: 'email', property: 'email', label: 'Email' },
    { type: 'checkbox', property: 'wantsSpam', label: 'Subscribe to the newsletter', value: true },
  ]
  const onSubmit = data => alert(JSON.stringify(data))
</script>

<Form fields={fields} onSubmit={onSubmit} />
```