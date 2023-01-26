<script>
  import Form from '@svelte-parts/form'
  import { fixProperty, formField, addExistingValues, removeEmptyKeys } from './utils'

  export let onAdd
  export let field

  const onSubmit = d => {
    const f = {
      ...removeEmptyKeys(d),
      type: 'color',
      property: fixProperty(d.label),
      label: d.label,
      notRequired: d.required === 'No',
    }
    onAdd(f)
  }

  const fields = addExistingValues([
    formField.label,
    formField.required,
  ], field)
</script>

<Form
  fields={fields}
  submitButton={field ? 'Update' : 'Add color field'}
  onSubmit={onSubmit}
/>
