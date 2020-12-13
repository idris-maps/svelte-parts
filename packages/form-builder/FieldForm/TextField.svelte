<script>
  import Form from '@svelte-parts/form'
  import { fixProperty, formField, removeEmptyKeys, addExistingValues } from './utils'

  export let type
  export let onAdd
  export let field = null

  const onSubmit = d => {
    const f = {
      ...removeEmptyKeys(d),
      type,
      property: fixProperty(d.label),
      label: d.label,
      notRequired: d.required === 'No',
    }
    onAdd(f)
  }

  const fields = addExistingValues([
    formField.label,
    formField.minLength,
    formField.maxLength,
    formField.pattern,
    formField.placeholder,
    formField.required,
  ], field)
</script>

<Form
  fields={fields}
  submitButton={field ? 'Update' : `Add ${type} field`}
  onSubmit={onSubmit}
/>
