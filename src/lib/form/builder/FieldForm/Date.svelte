<script>
  import Form from '@svelte-parts/form'
  import { fixProperty, formField, addExistingValues, removeEmptyKeys } from './utils'

  export let onAdd
  export let field

  const onSubmit = d => {
    const f = {
      ...removeEmptyKeys(d),
      type: 'date',
      property: fixProperty(d.label),
      label: d.label,
      notRequired: d.required === 'No',
    }
    onAdd(f)
  }

  const fields = addExistingValues([
    formField.label,
    {
      type: 'date',
      property: 'min',
      label: 'Minimum date (optional)',
      notRequired: true,
    },
    {
      type: 'date',
      property: 'max',
      label: 'Maximum date (optional)',
      notRequired: true,
    },
    formField.required,
  ], field)
</script>

<Form
  fields={fields}
  submitButton={field ? 'Update' : 'Add date field'}
  onSubmit={onSubmit}
/>
