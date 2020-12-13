<script>
  import Form from '@svelte-parts/form'
  import { fixProperty, formField, addExistingValues } from './utils'

  export let onAdd
  export let field

  const onSubmit = d => {
    const f = {
      type: 'checkbox',
      property: fixProperty(d.label),
      label: d.label,
    }
    if (d.value === 'true') { onAdd({ ...f, value: true }) }
    else if (d.value === 'false') { onAdd({ ...f, value: false }) }
    else { onAdd(f) }
  }

  const fields = addExistingValues([
    formField.label,
    {
      type: 'select',
      property: 'value',
      label: 'Default value',
      options: [
        'No default value',
        'true',
        'false',
      ],
    },
  ], field)
</script>

<Form
  fields={fields}
  submitButton={field ? 'Update' : 'Add checkbox field'}
  onSubmit={onSubmit}
/>
