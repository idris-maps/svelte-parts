<script lang="ts">
  import type { Field, Data } from 'svelte-parts/form/types'
  import Form from 'svelte-parts/form/Form.svelte'

  const fields: Field[] = [
    { type: 'text', property: 'username', label: 'User name', pattern: '[a-z0-9-]+', minLength: 5 },
    { type: 'date', property: 'birthDate', label: 'Birth date' },
    { type: 'email', property: 'email', label: 'Email' },
    { type: 'checkbox', property: 'wantsSpam', label: 'Subscribe to the newsletter', value: true },
  ]
  const onSubmit = (data: Data) => alert(JSON.stringify(data))
</script>

<Form fields={fields} onSubmit={onSubmit} />
