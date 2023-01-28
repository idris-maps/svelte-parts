<script lang="ts">
  import type { Data, TextField, Field } from '../../types'
  import Form from '../../Form.svelte'
  import { fixProperty, formField, removeEmptyKeys, addExistingValues } from './utils'

  export let type: string
  export let onAdd: (d: TextField) => void
  export let field: Field | null = null

  const onSubmit = (d: Data) => {
    const f = {
      ...removeEmptyKeys(d),
      type,
      property: fixProperty(d.label),
      label: d.label,
      notRequired: d.required === 'No',
    } as TextField
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
