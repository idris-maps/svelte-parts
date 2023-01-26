<script lang="ts">
  import type { Data, Color, Field } from '../../types'
  import Form from '../../Form.svelte'
  import { fixProperty, formField, addExistingValues, removeEmptyKeys } from './utils'

  export let onAdd: (d: Color) => void
  export let field: Field | null

  const onSubmit = (d: Data) => {
    const f = {
      ...removeEmptyKeys(d),
      type: 'color',
      property: fixProperty(d.label),
      label: d.label,
      notRequired: d.required === 'No',
    } as Color
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
