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
