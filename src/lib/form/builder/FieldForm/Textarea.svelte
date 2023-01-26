<script>
  import Form from '@svelte-parts/form'
  import { fixProperty, formField, removeEmptyKeys, addExistingValues } from './utils'

  export let onAdd
  export let field = null

  const onSubmit = d => {
    const f = {
      ...removeEmptyKeys(d),
      type: 'textarea',
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
  submitButton={field ? 'Update' : 'Add textarea field'}
  onSubmit={onSubmit}
/>
