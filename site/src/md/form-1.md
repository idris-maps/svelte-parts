# Form

Yet another form component.

The idea here is to define the fields in json. The form definition can then come from the server or be modified on the fly.

## Install

```
npm install svelte-parts
```

## Usage

```html
<script lang="ts">
  import type { Field } from 'svelte-parts/form/types'
  import Form from '@svelte-parts/form/Form.svelte'

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
